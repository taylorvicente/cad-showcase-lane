import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProjectSection from "@/components/ProjectSection";
import cadImage from "@/assets/project-cad-1.jpg";
import robotImage from "@/assets/project-robot-arm.jpg";
import aerospaceImage from "@/assets/project-aerospace.jpg";

// Mock project data - in a real app, this would come from an API or database
const projectData = {
  "cad-component-design": {
    title: "Precision Component Design",
    description: "Advanced CAD modeling of high-precision mechanical components using SolidWorks, featuring complex geometries and manufacturing-ready designs.",
    image: cadImage,
    tags: ["SolidWorks", "CAD", "Manufacturing", "Precision Engineering"],
    date: "2024",
    longDescription: "This project involved the complete design and analysis of precision mechanical components for industrial applications. Using advanced CAD software, I created detailed 3D models with complex geometries that meet strict manufacturing tolerances.",
    context: "This was a personal project undertaken to demonstrate advanced CAD modeling capabilities for industrial applications. The goal was to design a high-precision mechanical bearing assembly that could withstand extreme operating conditions while maintaining sub-micron tolerances. The project was self-initiated to explore the intersection of theoretical engineering principles and practical manufacturing constraints.",
    role: "As the sole designer and engineer on this project, I was responsible for all aspects from initial concept through final validation. My specific contributions included:\n\n• Complete geometric design and 3D modeling in SolidWorks\n• Finite element analysis and stress validation\n• Manufacturing process planning and tolerance specification\n• Material selection and supplier coordination\n• Prototype testing and validation protocols",
    process: "The design process began with extensive research into existing bearing technologies and failure modes. I used SolidWorks to create parametric models that could be easily modified for different operating conditions. The design incorporates advanced features like optimized load distribution paths and integrated lubrication channels.",
    reasoning: "I chose this particular geometry to maximize load capacity while minimizing material usage. The curved load paths distribute stress more evenly than traditional designs, reducing peak stresses by 25%. The integrated lubrication system eliminates the need for external grease fittings, reducing maintenance requirements and improving reliability in harsh environments. This design approach demonstrates both technical proficiency and practical engineering judgment.",
    images: {
      context: [cadImage],
      role: [cadImage],
      process: [cadImage, robotImage],
      reasoning: [cadImage]
    }
  },
  "robotics-arm": {
    title: "6-DOF Robotic Arm",
    description: "Complete design and prototype of a 6-degree-of-freedom robotic arm with custom control algorithms and precision actuators.",
    image: robotImage,
    tags: ["Robotics", "Automation", "Control Systems", "Prototyping"],
    date: "2023",
    longDescription: "Designed and built a fully functional 6-degree-of-freedom robotic arm from the ground up, including mechanical design, control systems, and programming.",
    context: "This was a capstone project for my Mechanical Engineering degree, completed over two semesters. The objective was to design and build a robotic arm capable of precise manipulation tasks with repeatability better than ±0.1mm. The project had a $2,000 budget constraint and required integration with existing vision systems in our lab.",
    role: "I served as the mechanical design lead in a team of four students. My primary responsibilities included:\n\n• Complete mechanical design and CAD modeling of all components\n• Actuator selection and integration\n• Structural analysis and optimization\n• Manufacturing coordination and assembly\n• Performance testing and calibration\n• Documentation and technical reporting",
    process: "The development process started with kinematic analysis to optimize workspace and avoid singularities. I designed custom joint assemblies using aluminum extrusions and 3D-printed components to balance strength with weight. Each joint incorporates high-resolution encoders for precise position feedback. The modular design allows for easy maintenance and component replacement.",
    reasoning: "I selected servo motors over stepper motors for better speed control and holding torque. The aluminum frame provides excellent strength-to-weight ratio while allowing for precise machining of bearing surfaces. The control architecture uses cascaded PID loops with feedforward compensation to achieve the required precision. This approach balances performance with cost-effectiveness, meeting all project requirements within budget.",
    images: {
      context: [robotImage],
      role: [robotImage, aerospaceImage],
      process: [robotImage, cadImage],
      reasoning: [robotImage]
    }
  },
  "aerospace-turbine": {
    title: "Aerospace Turbine Blade",
    description: "Aerodynamic optimization and structural analysis of turbine blades for improved efficiency and durability in aerospace applications.",
    image: aerospaceImage,
    tags: ["Aerospace", "CFD Analysis", "Optimization", "Materials"],
    date: "2023",
    longDescription: "Conducted comprehensive aerodynamic optimization of turbine blade geometry using computational fluid dynamics and advanced materials analysis.",
    context: "This project was conducted as part of an industry collaboration with a major aerospace manufacturer. The goal was to improve turbine blade efficiency by 10% while maintaining structural integrity under extreme operating conditions (temperatures up to 1200°C, rotational speeds of 12,000 RPM). The project duration was 6 months with stringent confidentiality requirements.",
    role: "I was the primary CFD analyst and optimization engineer working under senior engineering supervision. My key contributions included:\n\n• Computational fluid dynamics modeling and simulation setup\n• Parametric geometry optimization using genetic algorithms\n• Thermal and structural analysis validation\n• Materials research for high-temperature applications\n• Performance correlation with experimental data\n• Technical documentation and patent application support",
    process: "The optimization process used ANSYS Fluent for aerodynamic analysis coupled with genetic algorithms for shape optimization. I developed custom scripts to automate the design-analysis-optimization loop, testing over 500 geometric variations. The final design incorporates advanced cooling passages and optimized blade profiles that maintain aerodynamic efficiency while providing adequate structural strength.",
    reasoning: "The blade geometry was optimized using multi-objective optimization targeting both aerodynamic efficiency and structural integrity. I chose Inconel 718 for its excellent high-temperature properties and fatigue resistance. The cooling passages follow a serpentine pattern that maximizes heat transfer while minimizing pressure losses. This design achieves 12% efficiency improvement over baseline while reducing peak blade temperatures by 50°C, significantly extending service life.",
    images: {
      context: [aerospaceImage],
      role: [aerospaceImage, cadImage],
      process: [aerospaceImage, robotImage],
      reasoning: [aerospaceImage]
    }
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-elevated"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                {project.date}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Demo
                </Button>
                <Button variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <ProjectSection
              title="Context"
              content={project.context}
              images={project.images.context}
              isImageLeft={true}
            />
            
            <ProjectSection
              title="Your Role"
              content={project.role}
              images={project.images.role}
              isImageLeft={false}
            />
            
            <ProjectSection
              title="Sketches, Pictures, and Videos"
              content={project.process}
              images={project.images.process}
              isImageLeft={true}
            />
            
            <ProjectSection
              title="What, How, Why"
              content={project.reasoning}
              images={project.images.reasoning}
              isImageLeft={false}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;