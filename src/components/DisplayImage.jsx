import { useState, useEffect } from "react";

const DisplayImage = ({ imageKey, className, alt, fallbackText }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = () => {
      const savedImages = localStorage.getItem('adminImages');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        // Get the most recent profile image (first in array)
        if (images.length > 0) {
          // Filter to get only profile images (not project images)
          const profileImages = images.filter(img => img.type === 'profile');
          if (profileImages.length > 0) {
            setImageSrc(profileImages[0].src);
          } else {
            // If no profile images, use the first image
            setImageSrc(images[0].src);
          }
        }
      }
      setLoading(false);
    };

    loadImage();

    // Listen for storage changes (when admin uploads new image)
    const handleStorageChange = (e) => {
      if (e.key === 'adminImages') {
        loadImage();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [imageKey]);

  if (loading) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center animate-pulse`}>
        <span className="text-gray-400 text-sm">Loading...</span>
      </div>
    );
  }

  if (!imageSrc) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">{fallbackText || "Upload photo"}</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt || "Profile"}
      className={className}
      onError={() => setImageSrc(null)}
    />
  );
};

export default DisplayImage; // ← THIS IS THE FIX