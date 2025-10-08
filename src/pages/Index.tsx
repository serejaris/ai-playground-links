import { AIToolCard } from "@/components/AIToolCard";
import { GraduationCap } from "lucide-react";

const aiTools = [
  {
    name: "Lovable",
    description: "Создавайте полноценные веб-приложения с помощью AI. Идеально подходит для быстрого прототипирования и создания интерактивных сайтов.",
    url: "https://lovable.dev/invite/0aaed065-f44c-4ed9-ab8d-ed251ce0f6fa",
    category: "Веб-разработка"
  },
  {
    name: "Replit",
    description: "Онлайн IDE с AI-помощником. Пишите код на любом языке программирования прямо в браузере, с поддержкой AI для генерации кода.",
    url: "https://replit.com/refer/serejaris",
    category: "Программирование"
  },
  {
    name: "Bolt.new",
    description: "AI-конструктор для создания веб-приложений. Быстро создавайте прототипы и полноценные проекты с помощью искусственного интеллекта.",
    url: "https://bolt.new/?rid=hgko08",
    category: "Веб-разработка"
  },
  {
    name: "v0 by Vercel",
    description: "Генерируйте UI компоненты с помощью AI. Создавайте красивые интерфейсы просто описывая их словами.",
    url: "https://v0.dev",
    category: "UI/UX Дизайн"
  },
  {
    name: "Figma Make",
    description: "AI-инструмент от Figma для создания дизайнов. Преобразуйте текстовые описания в готовые дизайн-концепты.",
    url: "https://www.figma.com/make/",
    category: "Дизайн"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-16 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Конструкторы для Урока
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Коллекция лучших AI-инструментов для создания веб-приложений, дизайна и программирования
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
            <AIToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              url={tool.url}
              category={tool.category}
            />
          ))}
        </div>

        {/* Instructions section */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Инструкция для учеников
          </h2>
          
          <div className="space-y-3 text-muted-foreground">
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">1</span>
              <span>Выберите интересующий вас AI-инструмент из списка выше</span>
            </p>
            
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">2</span>
              <span>Нажмите на кнопку "Открыть и зарегистрироваться"</span>
            </p>
            
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">3</span>
              <span>Пройдите регистрацию на платформе (обычно через email или Google)</span>
            </p>
            
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">4</span>
              <span>Начните экспериментировать с AI и создавайте свои первые проекты!</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>Создано для урока по AI конструкторам • 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
