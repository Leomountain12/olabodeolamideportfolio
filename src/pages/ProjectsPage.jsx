
import { useState, useEffect } from "react";
import { projects as defaultProjects, categories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import CategoryFilter from "../components/CategoryFilter";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [allProjects, setAllProjects] = useState(defaultProjects);

  useEffect(() => {
    // Load custom projects from localStorage
    const savedProjects = localStorage.getItem('customProjects');
    if (savedProjects) {
      const customProjects = JSON.parse(savedProjects);
      // Merge with default projects (custom projects override defaults with same title)
      const mergedProjects = [...defaultProjects];
      customProjects.forEach(custom => {
        const index = mergedProjects.findIndex(p => p.title === custom.title);
        if (index !== -1) {
          mergedProjects[index] = { ...mergedProjects[index], ...custom };
        } else {
          mergedProjects.push(custom);
        }
      });
      setAllProjects(mergedProjects);
    }

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'customProjects') {
        const updatedProjects = JSON.parse(e.newValue || '[]');
        const mergedProjects = [...defaultProjects];
        updatedProjects.forEach(custom => {
          const index = mergedProjects.findIndex(p => p.title === custom.title);
          if (index !== -1) {
            mergedProjects[index] = { ...mergedProjects[index], ...custom };
          } else {
            mergedProjects.push(custom);
          }
        });
        setAllProjects(mergedProjects);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle mx-auto">
            A collection of my work showcasing full-stack and AI solutions.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;