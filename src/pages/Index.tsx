import { AIToolCard } from "@/components/AIToolCard";
import { PromptIdeaCard } from "@/components/PromptIdeaCard";
import { GraduationCap, Code } from "lucide-react";

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

const promptIdeas = [
  {
    title: "Трекер привычек (неделя)",
    description: "Галочки по дням, прогресс‑бар, фильтр «сегодня/неделя».",
    prompt: "Собери одностраничный трекер привычек (таблица 7×N), сохраняй состояние в localStorage (habits:v1). Экспорт/Импорт JSON, сброс, и прогресс‑бар по неделе."
  },
  {
    title: "Pomodoro‑таймер",
    description: "Рабочие/перерывы, настраиваемые длительности, звук.",
    prompt: "Сделай Pomodoro‑таймер с настройками (work/break/long, автопереход), храни настройки и историю сессий в localStorage (pomodoro:v1), добавь кнопки экспорт/импорт."
  },
  {
    title: "To‑Do с приоритетами и тегами",
    description: "Быстрый ввод, фильтры, хоткеи (Enter, @tag, !prio).",
    prompt: "Одностраничный To‑Do без фреймворков: задачи, теги, приоритеты, поиск; всё состояние в localStorage (todo:v1), hotkeys, экспорт/импорт, счётчики по тегам."
  },
  {
    title: "Канбан‑борд (Backlog/Doing/Done)",
    description: "Drag‑and‑drop колонок и карточек.",
    prompt: "Канбан с DnD, кастомные колонки, поиск по карточкам; сохраняй доску в localStorage (kanban:v1), добавь экспорт/импорт и синхронизацию между вкладками через storage‑event."
  },
  {
    title: "Reading/Watch‑лист",
    description: "Ссылки + заметки + статус (to read/watching/done).",
    prompt: "Список чтения/просмотра: поле URL, название, заметка, статус; сохрани в localStorage (list:v1), фильтры по статусу, импорт/экспорт в JSON."
  },
  {
    title: "Мини‑учёт расходов (несекретно)",
    description: "Категории, суммы, график по категориям.",
    prompt: "Трекер расходов (категория, сумма, дата, заметка) с диаграммой; данные в localStorage (spend:v1), фильтры по периоду, экспорт/импорт."
  },
  {
    title: "Менеджер цветовых палитр",
    description: "Пипетка (input color), копирование HEX/RGB.",
    prompt: "Генератор/хранилище цветовых палитр с предварительным просмотром; храни палитры в localStorage (palette:v1), кнопки copy, экспорт/импорт."
  },
  {
    title: "Панель фич‑флагов/настроек для прототипа",
    description: "Тумблеры: dark‑mode, компактный вид, анимации.",
    prompt: "Панель \"Settings\" с фич‑флагами; при переключении сохраняй в localStorage (flags:v1) и сразу применяй классы к <body>; экспорт/импорт профилей."
  },
  {
    title: "Мини‑конструктор форм",
    description: "Добавляй поля (текст, число, выбор), сохраняй схему.",
    prompt: "Dynamic Form Builder: создавай поля, порядок, обязательность; схему и введённые данные храни в localStorage (forms:v1); экспорт схемы/данных в JSON."
  },
  {
    title: "Менеджер промптов (шаблоны для ИИ)",
    description: "Название, сам промпт, теги, копирование.",
    prompt: "Каталог промпт‑шаблонов: имя, текст, теги, быстрый copy; сохраняй в localStorage (prompts:v1), поиск по тегам, экспорт/импорт."
  },
  {
    title: "Интервальный/Tabata‑таймер",
    description: "Наборы интервалов, сохранение тренировок.",
    prompt: "Interval Timer: последовательности work/rest/rounds, сохраняй пресеты в localStorage (intervals:v1), звуки, экспорт/импорт."
  },
  {
    title: "Доска обратной связи/роадмапа",
    description: "Идеи → приоритизация (ICE/RICE), статусы.",
    prompt: "Product feedback board: карточки идей, поля impact/effort, сортировка, статусы; храни всё в localStorage (roadmap:v1), экспорт/импорт."
  },
  {
    title: "Генератор чек‑листов с шаблонами",
    description: "Пак‑лист, релиз‑чек, on‑boarding.",
    prompt: "Checklist maker: создавай шаблоны и инстансы чек‑листов; прогресс, клонирование; localStorage (checklist:v1), экспорт/импорт."
  },
  {
    title: "Multi‑Tally (множественные счётчики)",
    description: "Несколько счётчиков, горячие клавиши, быстрый сброс.",
    prompt: "Multi‑counter с именами, горячими клавишами (+/−), суммой; сохраняй в localStorage (tally:v1), экспорт/импорт."
  },
  {
    title: "Локальный опрос/голосовалка",
    description: "Вопросы, варианты, результаты (без бэкенда).",
    prompt: "Quick Poll: создавай вопросы и варианты, голосование локально; localStorage (poll:v1); показывай диаграмму, экспорт результатов."
  },
  {
    title: "Флэшкарты (упрощённый SRS)",
    description: "Колоды, отметки «знаю/повторить».",
    prompt: "Flashcards: создавай/редактируй колоды, режим обучения (show/hide), прогресс; храни в localStorage (cards:v1), экспорт/импорт."
  },
  {
    title: "UTM‑генератор",
    description: "Предустановки кампаний, валидация, copy URL.",
    prompt: "UTM builder: форма (source, medium, campaign…), кнопка \"Сгенерировать URL\", пресеты; localStorage (utm:v1), экспорт/импорт пресетов."
  },
  {
    title: "Конвертер единиц с «избранным»",
    description: "Частые конверсии, быстрый доступ.",
    prompt: "Unit converter: категории (длина/вес/температура…), добавляй избранные конверсии; localStorage (units:v1), экспорт/импорт."
  },
  {
    title: "Брейншторм названий/идей с «избранным»",
    description: "Генератор + список избранных, заметки к вариантам.",
    prompt: "Idea/name collector: поле генерации и список \"избранное\"; localStorage (ideas:v1), поиск/теги, экспорт/импорт."
  },
  {
    title: "Recipe box + план питания",
    description: "Рецепты, теги, недельный план, список покупок.",
    prompt: "Recipe box: карточки рецептов (ингредиенты, шаги, теги), неделя‑план и авто‑генерация списка покупок; всё в localStorage (recipes:v1), экспорт/импорт."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 border border-border bg-card mb-4">
            <GraduationCap className="w-6 h-6 text-foreground" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            AI Конструкторы для Урока
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Коллекция лучших AI-инструментов для создания веб-приложений, дизайна и программирования
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
        <div className="mb-12 p-6 border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Инструкция для учеников
          </h2>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">1</span>
              <span>Выберите интересующий вас AI-инструмент из списка выше</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">2</span>
              <span>Нажмите на кнопку "Открыть"</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">3</span>
              <span>Пройдите регистрацию на платформе (обычно через email или Google)</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">4</span>
              <span>Попробуйте идеи с промптами ниже!</span>
            </p>
          </div>
        </div>

        {/* Prompt Ideas Section */}
        <div className="border-t border-border pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 border border-border bg-card">
              <Code className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                20 идей с промптами для экспериментов
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Скопируйте промпт и используйте в Lovable, Bolt, Replit или ChatGPT
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promptIdeas.map((idea, index) => (
              <PromptIdeaCard
                key={index}
                number={index + 1}
                title={idea.title}
                description={idea.description}
                prompt={idea.prompt}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">Создано для урока по AI конструкторам • 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
