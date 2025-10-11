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
    description: "Онлайн IDE с AI-помощником. Пишите код на любом языке программирования прямо в браузере, с поддержкой AI для генерации кода. Поддерживает интеграцию с GitHub.",
    url: "https://replit.com/refer/serejaris",
    category: "Программирование"
  },
  {
    name: "Bolt.new",
    description: "AI-конструктор для создания веб-приложений. Быстро создавайте прототипы и полноценные проекты с помощью искусственного интеллекта. Поддерживает интеграцию с GitHub.",
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
    prompt: "Сделай веб-приложение трекер привычек на одну страницу: таблица 7×N, сохраняй состояние в localStorage, добавь сброс и прогресс‑бар по неделе."
  },
  {
    title: "Pomodoro‑таймер",
    description: "Рабочие/перерывы, настраиваемые длительности, звук.",
    prompt: "Сделай веб-приложение Pomodoro‑таймер с настройками работы, перерыва и длинного отдыха, храни настройки и историю сессий в localStorage и добавь звук."
  },
  {
    title: "To‑Do с приоритетами и тегами",
    description: "Быстрый ввод, фильтры, хоткеи (Enter, @tag, !prio).",
    prompt: "Сделай веб-приложение To‑Do без фреймворков: задачи, теги, приоритеты, поиск, горячие клавиши и счётчики по тегам; всё состояние сохраняй в localStorage."
  },
  {
    title: "Канбан‑борд (Backlog/Doing/Done)",
    description: "Drag‑and‑drop колонок и карточек.",
    prompt: "Сделай веб-приложение канбан с drag-and-drop, кастомными колонками и поиском по карточкам; сохраняй доску в localStorage и синхронизируй между вкладками через storage‑event."
  },
  {
    title: "Reading/Watch‑лист",
    description: "Ссылки + заметки + статус (to read/watching/done).",
    prompt: "Сделай веб-приложение список чтения и просмотра: поле URL, название, заметка, статус; сохраняй данные в localStorage и добавь фильтры по статусу."
  },
  {
    title: "Мини‑учёт расходов (несекретно)",
    description: "Категории, суммы, график по категориям.",
    prompt: "Сделай веб-приложение трекер расходов с категориями, суммой, датой и заметкой, покажи диаграмму и сохраняй данные в localStorage с фильтрами по периоду."
  },
  {
    title: "Менеджер цветовых палитр",
    description: "Пипетка (input color), копирование HEX/RGB.",
    prompt: "Сделай веб-приложение генератор и хранилище цветовых палитр с предварительным просмотром, копированием HEX/RGB и сохранением палитр в localStorage."
  },
  {
    title: "Панель фич‑флагов/настроек для прототипа",
    description: "Тумблеры: dark‑mode, компактный вид, анимации.",
    prompt: "Сделай веб-приложение панель Settings с фич‑флагами; при переключении сохраняй в localStorage и сразу применяй классы к <body>."
  },
  {
    title: "Мини‑конструктор форм",
    description: "Добавляй поля (текст, число, выбор), сохраняй схему.",
    prompt: "Сделай веб-приложение конструктор динамических форм: создавай поля, порядок и обязательность, а схему и введённые данные храни в localStorage."
  },
  {
    title: "Менеджер промптов (шаблоны для ИИ)",
    description: "Название, сам промпт, теги, копирование.",
    prompt: "Сделай веб-приложение каталог промпт‑шаблонов с именем, текстом, тегами и быстрым копированием, сохраняй всё в localStorage и добавь поиск по тегам."
  },
  {
    title: "Интервальный/Tabata‑таймер",
    description: "Наборы интервалов, сохранение тренировок.",
    prompt: "Сделай веб-приложение интервальный таймер с последовательностями работы и отдыха, сохраняй пресеты в localStorage и добавь звуки."
  },
  {
    title: "Доска обратной связи/роадмапа",
    description: "Идеи → приоритизация (ICE/RICE), статусы.",
    prompt: "Сделай веб-приложение доску обратной связи с карточками идей, полями impact и effort, сортировкой, статусами и хранением данных в localStorage."
  },
  {
    title: "Генератор чек‑листов с шаблонами",
    description: "Пак‑лист, релиз‑чек, on‑boarding.",
    prompt: "Сделай веб-приложение генератор чек‑листов: создавай шаблоны и инстансы, отображай прогресс, позволяй клонировать и сохраняй данные в localStorage."
  },
  {
    title: "Multi‑Tally (множественные счётчики)",
    description: "Несколько счётчиков, горячие клавиши, быстрый сброс.",
    prompt: "Сделай веб-приложение мульти‑счётчик с именами, горячими клавишами, суммой и сохранением значений в localStorage."
  },
  {
    title: "Локальный опрос/голосовалка",
    description: "Вопросы, варианты, результаты (без бэкенда).",
    prompt: "Сделай веб-приложение локального опроса: создавай вопросы и варианты, веди голосование локально, сохраняй результаты в localStorage и показывай диаграмму."
  },
  {
    title: "Флэшкарты (упрощённый SRS)",
    description: "Колоды, отметки «знаю/повторить».",
    prompt: "Сделай веб-приложение флэшкарт: создавай и редактируй колоды, добавь режим обучения с показом и скрытием и сохраняй прогресс в localStorage."
  },
  {
    title: "UTM‑генератор",
    description: "Предустановки кампаний, валидация, copy URL.",
    prompt: "Сделай веб-приложение UTM‑генератор с формой для параметров, кнопкой \"Сгенерировать URL\", пресетами и сохранением в localStorage."
  },
  {
    title: "Конвертер единиц с «избранным»",
    description: "Частые конверсии, быстрый доступ.",
    prompt: "Сделай веб-приложение конвертер единиц с категориями длины, веса, температуры и списком избранных конверсий, сохраняй всё в localStorage."
  },
  {
    title: "Брейншторм названий/идей с «избранным»",
    description: "Генератор + список избранных, заметки к вариантам.",
    prompt: "Сделай веб-приложение генератор идей и названий с полем генерации, списком избранного, поиском, тегами и сохранением в localStorage."
  },
  {
    title: "Recipe box + план питания",
    description: "Рецепты, теги, недельный план, список покупок.",
    prompt: "Сделай веб-приложение коробку рецептов с карточками ингредиентов, шагов и тегов, добавь недельный план и авто‑генерацию списка покупок, сохраняя всё в localStorage."
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
