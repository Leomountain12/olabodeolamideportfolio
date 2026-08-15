import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  // ✅ Safety check
  if (!project) {
    return null;
  }

  const [projectImage, setProjectImage] = useState(project.image || "https://via.placeholder.com/400x250?text=Project+Image");

  useEffect(() => {
    const savedProjectImages = localStorage.getItem('projectImages');
    if (savedProjectImages) {
      const images = JSON.parse(savedProjectImages);
      const matchedImage = images.find(img => img.projectName === project.title);
      if (matchedImage) {
        setProjectImage(matchedImage.src);
      }
    }
  }, [project.title]);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={projectImage}
          alt={project.title || "Project"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x250?text=Project+Image";
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full text-xs font-medium">
            {project.category || "Uncategorized"}
          </span>
        </div>
        {project.liveLink && (
          <div className="absolute bottom-3 right-3">
            <span className="px-2.5 py-0.5 bg-green-500 text-white rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
              <ExternalLink size={10} /> Live
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-1">{project.title || "Untitled"}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
          {project.description || "No description available."}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech && project.tech.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech && project.tech.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-orange-500 font-medium hover:gap-2 transition-all text-sm"
          >
            View Case Study <ArrowRight size={14} />
          </Link>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all text-sm font-medium shadow-md hover:shadow-blue-500/25"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;