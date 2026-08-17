
// src/components/DisplayImage.jsx
// import { useState, useEffect } from "react";

// const DisplayImage = ({ className, alt, fallbackText }) => {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const loadImage = () => {
//       // Try localStorage first
//       const savedImages = localStorage.getItem('adminImages');
//       if (savedImages) {
//         try {
//           const images = JSON.parse(savedImages);
//           const profileImages = images.filter(img => img.type === 'profile');
//           if (profileImages.length > 0) {
//             setImageSrc(profileImages[0].src);
//             return;
//           }
//         } catch (error) {
//           console.error("Error loading image:", error);
//         }
//       }
      
//       // Cloudinary fallback - shows on ALL devices!
//       setImageSrc("https://res.cloudinary.com/leodcatalyst/image/upload/v1/portfolio/profile.jpg");
//     };

//     loadImage();
//   }, []);

//   if (!imageSrc) {
//     return (
//       <div className={`${className} bg-gray-100 flex items-center justify-center`}>
//         <span className="text-gray-400 text-sm">{fallbackText || "Upload photo"}</span>
//       </div>
//     );
//   }

//   return <img src={imageSrc} alt={alt || "Profile"} className={className} />;
// };

// export default DisplayImage;
// src/components/DisplayImage.jsx
import { useState, useEffect } from "react";

const DisplayImage = ({ className, alt, fallbackText }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // ✅ ALWAYS use Cloudinary URL - shows on ALL browsers!
    // Upload your photo to Cloudinary and replace this URL
    setImageSrc("https://res.cloudinary.com/leodcatalyst/image/upload/v1/portfolio/profile.jpg");
  }, []);

  if (!imageSrc) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">{fallbackText || "Upload photo"}</span>
      </div>
    );
  }

  return <img src={imageSrc} alt={alt || "Profile"} className={className} />;
};

export default DisplayImage;