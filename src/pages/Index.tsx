import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
};

export default Index;
