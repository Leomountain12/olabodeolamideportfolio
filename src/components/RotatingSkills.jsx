// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import { 
//   SiReact, SiNextdotjs, SiNodedotjs, SiPython, 
//   SiTailwindcss, SiMongodb, SiPostgresql, SiDocker,
//   SiTensorflow, SiTypescript, SiGraphql,
//   SiFirebase, SiAmazon, SiGit, SiJavascript,
//   SiVuedotjs, SiDjango, SiFastapi, SiRedis,
//   SiKubernetes, SiJenkins, SiWebpack
// } from "react-icons/si";

// const RotatingSkills = () => {
//   const skills = [
//     { icon: SiReact, name: "React", color: "#61DAFB" },
//     { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
//     { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
//     { icon: SiPython, name: "Python", color: "#3776AB" },
//     { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
//     { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
//     { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
//     { icon: SiDocker, name: "Docker", color: "#2496ED" },
//     { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
//     { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
//     { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
//     { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
//     { icon: SiAmazon, name: "AWS", color: "#FF9900" },
//     { icon: SiGit, name: "Git", color: "#F05032" },
//     { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
//     { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
//     { icon: SiDjango, name: "Django", color: "#092E20" },
//     { icon: SiFastapi, name: "FastAPI", color: "#009688" },
//     { icon: SiRedis, name: "Redis", color: "#DC382D" },
//     { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
//     { icon: SiJenkins, name: "Jenkins", color: "#D24939" },
//     { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
//   ];

//   const firstRow = skills.slice(0, 11);
//   const secondRow = skills.slice(11);

//   return (
//     <section className="py-16 bg-gradient-to-r from-orange-50 to-white overflow-hidden">
//       <div className="container-custom">
//         <div className="text-center mb-10">
//           <h2 className="section-title">Technologies I Work With</h2>
//           <p className="section-subtitle mx-auto">
//             Constantly learning and mastering new technologies
//           </p>
//         </div>

//         {/* First Row */}
//         <div className="relative flex overflow-hidden py-4">
//           <motion.div
//             className="flex gap-8 items-center"
//             animate={{ x: [0, -1800] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 25,
//                 ease: "linear",
//               },
//             }}
//           >
//             {firstRow.map((skill, index) => (
//               <div key={index} className="flex flex-col items-center gap-2 min-w-[100px]">
//                 <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
//                   <skill.icon size={48} style={{ color: skill.color }} />
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">{skill.name}</span>
//               </div>
//             ))}
//             {firstRow.map((skill, index) => (
//               <div key={`dup-${index}`} className="flex flex-col items-center gap-2 min-w-[100px]">
//                 <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
//                   <skill.icon size={48} style={{ color: skill.color }} />
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">{skill.name}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Second Row */}
//         <div className="relative flex overflow-hidden py-4">
//           <motion.div
//             className="flex gap-8 items-center"
//             animate={{ x: [-1800, 0] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 25,
//                 ease: "linear",
//               },
//             }}
//           >
//             {secondRow.map((skill, index) => (
//               <div key={index} className="flex flex-col items-center gap-2 min-w-[100px]">
//                 <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
//                   <skill.icon size={48} style={{ color: skill.color }} />
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">{skill.name}</span>
//               </div>
//             ))}
//             {secondRow.map((skill, index) => (
//               <div key={`dup-${index}`} className="flex flex-col items-center gap-2 min-w-[100px]">
//                 <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
//                   <skill.icon size={48} style={{ color: skill.color }} />
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">{skill.name}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="text-center mt-8">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 rounded-full animate-pulse">
//             <Sparkles className="text-orange-500" size={20} />
//             <span className="text-orange-600 font-medium">
//               🚀 Currently Learning: AI Agents, Web3 & Quantum Computing
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RotatingSkills;
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, 
  SiTailwindcss, SiMongodb, SiPostgresql, SiDocker,
  SiTensorflow, SiTypescript, SiGraphql,
  SiFirebase, SiGit, SiJavascript,
  SiVuedotjs, SiDjango, SiFastapi, SiRedis,
  SiKubernetes, SiJenkins, SiWebpack
} from "react-icons/si";

const RotatingSkills = () => {
  const skills = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiJenkins, name: "Jenkins", color: "#D24939" },
    { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
  ];

  const firstRow = skills.slice(0, 11);
  const secondRow = skills.slice(11);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle mx-auto">
            Constantly learning and mastering new technologies
          </p>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {firstRow.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
                  <skill.icon size={48} style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-medium text-gray-600">{skill.name}</span>
              </div>
            ))}
            {firstRow.map((skill, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
                  <skill.icon size={48} style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-medium text-gray-600">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [-1800, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {secondRow.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
                  <skill.icon size={48} style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-medium text-gray-600">{skill.name}</span>
              </div>
            ))}
            {secondRow.map((skill, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
                  <skill.icon size={48} style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-medium text-gray-600">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 rounded-full animate-pulse">
            <Sparkles className="text-orange-500" size={20} />
            <span className="text-orange-600 font-medium">
              🚀 Currently Learning: AI Agents, Web3 & Quantum Computing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingSkills;