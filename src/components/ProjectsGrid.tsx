import ProjectCard from "./ProjectCard";
import cadImage from "@/assets/project-cad-1.jpg";
import robotImage from "@/assets/project-robot-arm.jpg";
import aerospaceImage from "@/assets/project-aerospace.jpg";

const projects = [
  {
    id: "cad-component-design",
    title: "Precision Component Design",
    description: "Advanced CAD modeling of high-precision mechanical components using SolidWorks, featuring complex geometries and manufacturing-ready designs.",
    image: cadImage,
    tags: ["SolidWorks", "CAD", "Manufacturing", "Precision Engineering"],
    date: "2024",
    featured: true,
  },
  {
    id: "robotics-arm",
    title: "6-DOF Robotic Arm",
    description: "Complete design and prototype of a 6-degree-of-freedom robotic arm with custom control algorithms and precision actuators.",
    image: robotImage,
    tags: ["Robotics", "Automation", "Control Systems", "Prototyping"],
    date: "2023",
  },
  {
    id: "aerospace-turbine",
    title: "Aerospace Turbine Blade",
    description: "Aerodynamic optimization and structural analysis of turbine blades for improved efficiency and durability in aerospace applications.",
    image: aerospaceImage,
    tags: ["Aerospace", "CFD Analysis", "Optimization", "Materials"],
    date: "2023",
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my mechanical engineering projects showcasing innovation, 
            precision design, and advanced manufacturing techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;