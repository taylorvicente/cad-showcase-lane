import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-surface-gradient py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss mechanical engineering opportunities or collaborate on innovative projects?
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            engineer@email.com
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <Button variant="ghost" size="icon" className="hover:shadow-tech transition-all">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:shadow-tech transition-all">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:shadow-tech transition-all">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;