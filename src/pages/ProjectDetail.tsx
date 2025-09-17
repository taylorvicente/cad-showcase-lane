import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
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
    challenges: ["Achieving sub-micron precision tolerances", "Optimizing for manufacturability", "Material selection for durability"],
    technologies: ["SolidWorks 2024", "ANSYS Workbench", "GD&T Standards", "CNC Machining"],
    outcomes: ["15% reduction in manufacturing cost", "Improved component lifespan by 30%", "Successfully prototyped and tested"],
  },
  "robotics-arm": {
    title: "6-DOF Robotic Arm",
    description: "Complete design and prototype of a 6-degree-of-freedom robotic arm with custom control algorithms and precision actuators.",
    image: robotImage,
    tags: ["Robotics", "Automation", "Control Systems", "Prototyping"],
    date: "2023",
    longDescription: "Designed and built a fully functional 6-degree-of-freedom robotic arm from the ground up, including mechanical design, control systems, and programming.",
    challenges: ["Achieving precise positioning accuracy", "Minimizing vibration and backlash", "Developing inverse kinematics algorithms"],
    technologies: ["MATLAB/Simulink", "Arduino", "Servo Motors", "3D Printing", "Machine Learning"],
    outcomes: ["±0.1mm positioning accuracy", "Successfully integrated with vision system", "Demonstrated at engineering showcase"],
  },
  "aerospace-turbine": {
    title: "Aerospace Turbine Blade",
    description: "Aerodynamic optimization and structural analysis of turbine blades for improved efficiency and durability in aerospace applications.",
    image: aerospaceImage,
    tags: ["Aerospace", "CFD Analysis", "Optimization", "Materials"],
    date: "2023",
    longDescription: "Conducted comprehensive aerodynamic optimization of turbine blade geometry using computational fluid dynamics and advanced materials analysis.",
    challenges: ["High-temperature material constraints", "Complex aerodynamic optimization", "Structural integrity under extreme loads"],
    technologies: ["ANSYS Fluent", "SolidWorks Flow Simulation", "Inconel 718", "Topology Optimization"],
    outcomes: ["12% efficiency improvement", "Reduced material stress by 25%", "Patent application filed"],
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

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cad">3D Model</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.technologies.map((tech, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-engineering-blue rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="cad" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Interactive 3D Model</CardTitle>
                </CardHeader>
                <CardContent className="h-96 bg-engineering-gray-light rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      3D CAD viewer will be integrated here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Future integration with Three.js or CAD viewers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Engineering Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Detailed stress analysis, fluid dynamics simulations, and optimization results.
                  </p>
                  <div className="h-64 bg-engineering-gray-light rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Analysis charts and simulations</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gallery" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item}>
                    <CardContent className="p-0">
                      <div className="h-48 bg-engineering-gray-light rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Project Image {item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;