import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Get all categories except "All" for the dropdown
  const allCategories = categories.filter(c => c !== "All");
  
  // Filter categories based on search
  const filteredCategories = allCategories.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-8">
      {/* Active Category Display */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="text-sm font-medium text-gray-600">Filter by:</span>
        <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
          {activeCategory}
        </span>
        {activeCategory !== "All" && (
          <button
            onClick={() => onCategoryChange("All")}
            className="text-xs text-gray-400 hover:text-orange-500 transition-colors"
          >
            ✕ Clear
          </button>
        )}
      </div>

      {/* Search + Dropdown */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="🔍 Search categories... (e.g., E-commerce, AI, FinTech)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="w-full px-10 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <ChevronDown 
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            size={18} 
          />
        </div>

        {/* Dropdown Results */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {searchTerm && filteredCategories.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500">
                No categories found. Type to create "{searchTerm}"
                <button
                  onClick={() => {
                    onCategoryChange(searchTerm);
                    setSearchTerm("");
                    setIsOpen(false);
                  }}
                  className="ml-2 text-orange-500 hover:text-orange-600 font-medium"
                >
                  Add "{searchTerm}"
                </button>
              </div>
            ) : (
              <>
                {/* Show "All" option first */}
                <button
                  onClick={() => {
                    onCategoryChange("All");
                    setSearchTerm("");
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    activeCategory === "All" ? "bg-orange-50 text-orange-500 font-medium" : "text-gray-700"
                  }`}
                >
                  All Categories
                </button>
                
                {/* Show matching categories */}
                {(searchTerm ? filteredCategories : allCategories).slice(0, 20).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onCategoryChange(cat);
                      setSearchTerm("");
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      activeCategory === cat ? "bg-orange-50 text-orange-500 font-medium" : "text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                
                {/* Show count if more than 20 */}
                {(searchTerm ? filteredCategories : allCategories).length > 20 && (
                  <div className="px-4 py-2 text-xs text-gray-400 border-t border-gray-100">
                    + {(searchTerm ? filteredCategories : allCategories).length - 20} more categories...
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Popular Quick Tags */}
      <div className="flex flex-wrap gap-1 mt-3">
        <span className="text-xs text-gray-400 mr-1">Popular:</span>
        {["AI / Machine Learning", "E-commerce", "EdTech", "FinTech", "SaaS", "Travel", "Real Estate", "Web Development"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              onCategoryChange(cat);
              setSearchTerm("");
            }}
            className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
              activeCategory === cat 
                ? "bg-orange-500 text-white" 
                : "bg-gray-100 hover:bg-orange-100 hover:text-orange-600 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;