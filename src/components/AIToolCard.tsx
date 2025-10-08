import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

interface AIToolCardProps {
  name: string;
  description: string;
  url: string;
  category: string;
}

export const AIToolCard = ({ name, description, url, category }: AIToolCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-card-foreground mb-1">{name}</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {category}
          </span>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <Button 
        asChild
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
      >
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          Открыть и зарегистрироваться
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </Card>
  );
};
