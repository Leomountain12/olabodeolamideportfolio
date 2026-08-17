
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
import { useState, useEffect } from "react";

const DisplayImage = ({ src, className, alt, fallbackText }) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // 1. If the parent passes a valid `src` prop, use that immediately
    if (src) {
      setImageSrc(src);
      return;
    }

    // 2. If no `src` prop is passed, check localStorage
    const loadImageFromStorage = () => {
      const savedUrl = localStorage.getItem('profileImageUrl');
      if (savedUrl) {
        console.log("✅ Loading from profileImageUrl:", savedUrl);
        setImageSrc(savedUrl);
        return;
      }

      const savedImages = localStorage.getItem('adminImages');
      if (savedImages) {
        try {
          const images = JSON.parse(savedImages);
          const profileImages = images.filter(img => img.type === 'profile');
          if (profileImages.length > 0) {
            console.log("✅ Loading from adminImages:", profileImages[0].src);
            setImageSrc(profileImages[0].src);
            localStorage.setItem('profileImageUrl', profileImages[0].src);
            return;
          }
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }

      // 3. If nothing is found, use the fallback
      console.log("❌ No image found, using fallback");
      setImageSrc("https://res.cloudinary.com/g77vrcnu/image/upload/v1/portfolio/profile.jpg");
    };

    loadImageFromStorage();

    // 4. POLLING FIX: Check localStorage every 500ms so updates appear in the SAME tab
    const intervalId = setInterval(() => {
      // Only run this if the parent isn't passing a `src` prop
      if (!src) {
        const newUrl = localStorage.getItem('profileImageUrl');
        // Update state only if the URL actually changed to prevent infinite re-renders
        if (newUrl && newUrl !== imageSrc) {
          setImageSrc(newUrl);
        }
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [src, imageSrc]); // Re-run if the parent's `src` prop changes

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