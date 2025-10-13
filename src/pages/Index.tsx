import { AIToolCard } from "@/components/AIToolCard";
import { PromptIdeaCard } from "@/components/PromptIdeaCard";
import { GraduationCap, Code } from "lucide-react";

const aiTools = [
  {
    name: "Lovable",
    description: "Конструктор, который генерирует рабочие веб-приложения по текстовому описанию. Удобен для быстрых прототипов, интеграций и демонстраций без ручной верстки.",
    url: "https://lovable.dev/invite/0aaed065-f44c-4ed9-ab8d-ed251ce0f6fa",
    category: "Веб-разработка",
    supportsGithub: false
  },
  {
    name: "Replit",
    description: "Облачная IDE с ассистентом Ghostwriter: редактируйте, запускайте и деплойте код прямо в браузере, получая подсказки и автодополнение от AI.",
    url: "https://replit.com/refer/serejaris",
    category: "Программирование",
    supportsGithub: true
  },
  {
    name: "Bolt.new",
    description: "Генератор интерфейсов на базе AI, который собирает React-приложения из вашего промпта. Помогает сверстать MVP и сразу выгружает код.",
    url: "https://bolt.new/?rid=hgko08",
    category: "Веб-разработка",
    supportsGithub: true
  },
  {
    name: "v0 by Vercel",
    description: "Сервис от Vercel, который превращает промпты в готовые компоненты shadcn/ui. Полезен для быстрых макетов и UI-итераций.",
    url: "https://v0.dev",
    category: "UI/UX Дизайн",
    supportsGithub: false
  },
  {
    name: "Figma Make",
    description: "Набор AI-функций Figma: генерируйте композиции, иллюстрации и варианты дизайна на основе текстовых подсказок.",
    url: "https://www.figma.com/make/",
    category: "Дизайн",
    supportsGithub: false
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
            AI-Билдеры
          </h1>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Подборка проверенных AI-инструментов и учебных промптов, которые помогают быстро собирать прототипы, дизайн-концепты и учебные проекты.
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
              supportsGithub={tool.supportsGithub}
            />
          ))}
        </div>

        {/* Instructions section */}
        <div className="mb-12 p-6 border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Как работать с подборкой
          </h2>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">1</span>
              <span>Выберите инструмент под задачу: код, дизайн или генерация интерфейсов.</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">2</span>
              <span>Перейдите по ссылке и зарегистрируйтесь (обычно достаточно аккаунта Google или GitHub).</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">3</span>
              <span>Изучите интерфейс: посмотрите примеры, гайды и готовые шаблоны, если они есть.</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">4</span>
              <span>Возьмите одну из идей ниже, скопируйте промпт и протестируйте работу конструктора.</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 border border-border bg-background flex items-center justify-center text-xs font-bold">5</span>
              <span>Сохраните результат и поделитесь им с одноклассниками или преподавателем.</span>
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
