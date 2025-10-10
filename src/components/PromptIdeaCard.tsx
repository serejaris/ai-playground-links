import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PromptIdeaCardProps {
  number: number;
  title: string;
  description: string;
  prompt: string;
}

export const PromptIdeaCard = ({ number, title, description, prompt }: PromptIdeaCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast.success("Промпт скопирован!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Ошибка копирования");
    }
  };

  return (
    <Card className="border-border bg-card p-4">
      <div className="flex items-start gap-3 mb-2">
        <span className="flex-shrink-0 w-6 h-6 border border-border bg-background flex items-center justify-center text-xs font-bold text-foreground">
          {number}
        </span>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-card-foreground mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="mt-3 p-3 bg-muted border border-border">
        <p className="text-xs text-foreground mb-2 leading-relaxed font-mono">{prompt}</p>
        <Button
          size="sm"
          variant="outline"
          onClick={handleCopy}
          className="w-full text-xs h-8"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Скопировано
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              Копировать промпт
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};
