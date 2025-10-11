import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Github } from "lucide-react";

interface AIToolCardProps {
  name: string;
  description: string;
  url: string;
  category: string;
  supportsGithub?: boolean;
}

export const AIToolCard = ({ name, description, url, category, supportsGithub }: AIToolCardProps) => {
  return (
    <Card className="group border-border bg-card p-6 transition-all duration-200 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-1.5 border border-border bg-background">
          <Sparkles className="w-4 h-4 text-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-card-foreground">{name}</h3>
            {supportsGithub && (
              <Github className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
          <span className="inline-block px-2 py-0.5 text-xs border border-border bg-muted text-muted-foreground">
            {category}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <Button 
        asChild
        className="w-full"
      >
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          Открыть
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </Button>
    </Card>
  );
};
