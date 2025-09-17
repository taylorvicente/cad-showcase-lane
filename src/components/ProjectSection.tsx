import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectSectionProps {
  title: string;
  content: string;
  images?: string[];
  isImageLeft?: boolean;
}

const ProjectSection = ({ title, content, images, isImageLeft = true }: ProjectSectionProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {images && images.length > 0 ? (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-start ${!isImageLeft ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={!isImageLeft ? 'lg:col-start-2' : ''}>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
            </div>
            <div className={`space-y-4 ${!isImageLeft ? 'lg:col-start-1' : ''}`}>
              {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-elevated">
                  <img 
                    src={image} 
                    alt={`${title} visual ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectSection;