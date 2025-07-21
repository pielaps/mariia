"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Sun, Moon, Menu, X } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Mail, Linkedin, MessageCircle } from "lucide-react"

// Language content
const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      researches: "Researches",
      volunteer: "Volunteer",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      description:
        "Hello!! I am a double-degree student at Ural Federal University and KEDGE Business School in France. I am passionate about data analysis and market research. I look forward to building my career in these fields. I am not afraid of numbers and difficult challenges. I have experience using Python (pandas, numpy) for data analysis, Excel and Google Sheets for reporting, and Python or Tableau for visualization.\n\nI bring beauty, brains, and talent to everything I do.",
      ctaButton: "Contact Me",
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          title: "Marketing Intern",
          company: "SMARTGEN Wealth Management",
          period: "Mar 2025 - Present",
          description: [
            "Analyzed 30 competitors in wealth management and created a strategic reference guide for the team",
            "Developed a Telegram bot in Python that automates real-time monitoring of competitor updates (reducing daily manual tracking time by up to 4 hours for the team)",
          ],
        },
        {
          title: "Project Administrator",
          company: "Unilever",
          period: "Mar - May 2024",
          description: [
            "Worked on a corporate culture development project",
            'Developed a themed quiz "UniQuiz" about the history of the "Kalina" factory and Unilever',
            "The quiz was held for 30 children of employees and received positive feedback as part of a corporate event",
          ],
        },
        {
          title: "Assistant",
          company: "Haensch",
          period: "Nov - Dec 2023",
          description: [
            "Researched certification rules for 40 industry-country pairs for internal market analysis",
            "Conducted certification research for 4 countries across multiple industries",
            "The results were included in a product certification guide developed in collaboration with the Russian Export Center",
          ],
        },
      ],
    },
    researches: {
      title: "Research Projects",
      projects: [
        {
          title: "Factors Influencing Taxi Fare Prices",
          description:
            "Conducted a full-scale research project using original survey data collected from 116 university students. Performed statistical and econometric analysis to identify key drivers of taxi pricing. Used tools such as regression modeling and correlation analysis to quantify the impact of each factor.",
          period: "2024",
        },
        {
          title: "Analysis of consumer behavior in the mobile communication market on the example of Tele2",
          description:
            "Analyzed tariff preferences of customers using a real mobile network operator as a case study. Built consumer indifference curves for different population segments and identified optimal tariff plans. Provided recommendations that demonstrated up to 40% cost reduction for certain user groups. Published in 2024 as part of a research collection on digital economy and consumption behavior.",
          period: "2024",
        },
        {
          title: "Key changes in accounting for material and production inventory",
          description: "",
          period: "2024",
        },
        {
          title: "Current changes in federal accounting standards: necessity in times of change",
          description: "",
          period: "2025",
        },
        {
          title: "Dynamics of economic cooperation between China and Russia under economic restrictions",
          description: "",
          period: "2025",
        },
      ],
    },
    volunteer: {
      title: "Volunteer Experience",
      activities: [
        {
          title: "Guide",
          organization: "INNOPROM",
          period: "Jul 2023",
          description: [
            "Led guided tours for international guests in both Russian and English, coordinated visitor flow, and provided on-site logistical support",
            "Represented the host country to foreign delegations and ensured a smooth and informative visitor experience",
            "Personally conducted a VIP tour for the delegation from Zimbabwe, contributing to the professional image of the event and its international outreach",
          ],
        },
        {
          title: "Volunteer Coordinator",
          organization: "International University Sports Festival Committee",
          period: "Jul - Sep 2023",
          description: [
            "Assisted foreign athletes and delegation members with accommodation, local transportation, and orientation throughout the city",
            "Served as a cultural liaison between international participants and local organizers, ensuring smooth communication and comfort during the event",
            "Helped maintain the festival's reputation for hospitality and operational excellence in a high-pressure international setting",
          ],
        },
      ],
    },
    contact: {
      title: "Contact Me",
      description:
        "I'm always interested in discussing new opportunities in business analysis, market research, or data analysis. Feel free to reach out!",
      email: "mariiapriakhina@gmail.com",
      linkedin: "https://www.linkedin.com/in/mariiapriakhina/",
      phone: "+33759314454",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      researches: "Recherches",
      volunteer: "Bénévolat",
      contact: "Contact",
    },
    about: {
      title: "À propos de moi",
      description:
        "Hello!! Je suis une étudiante en double diplôme à l'Université fédérale de l'Oural et à KEDGE Business School en France. Je suis passionnée par l'analyse de données et les études de marché. J'ai hâte de construire ma carrière dans ces domaines. Je n'ai pas peur des chiffres et des défis difficiles. J'ai de l'expérience dans l'utilisation de Python (pandas, numpy) pour l'analyse de données, Excel et Google Sheets pour le reporting, et Python ou Tableau pour la visualisation.\n\nJ'apporte beauté, intelligence et talent à tout ce que je fais.",
      ctaButton: "Me contacter",
    },
    experience: {
      title: "Expérience professionnelle",
      jobs: [
        {
          title: "Stagiaire en marketing",
          company: "SMARTGEN Wealth Management",
          period: "Mars 2025 - Présent",
          description: [
            "Analyse de 30 concurrents en gestion de patrimoine et création d'un guide de référence stratégique pour l'équipe",
            "Développement d'un bot Telegram en Python qui automatise la surveillance en temps réel des mises à jour des concurrents (réduisant le temps de suivi manuel quotidien jusqu'à 4 heures pour l'équipe)",
          ],
        },
        {
          title: "Administrateur de projet",
          company: "Unilever",
          period: "Mars - Mai 2024",
          description: [
            "Travail sur un projet de développement de la culture d'entreprise",
            "Développement d'un quiz thématique \"UniQuiz\" sur l'histoire de l'usine \"Kalina\" et d'Unilever",
            "Le quiz a été organisé pour 30 enfants d'employés et a reçu des commentaires positifs dans le cadre d'un événement d'entreprise",
          ],
        },
        {
          title: "Assistant",
          company: "Haensch",
          period: "Nov - Déc 2023",
          description: [
            "Recherche des règles de certification pour 40 paires industrie-pays pour l'analyse du marché interne",
            "Réalisation de recherches sur la certification pour 4 pays dans plusieurs secteurs",
            "Les résultats ont été inclus dans un guide de certification des produits développé en collaboration avec le Centre d'exportation russe",
          ],
        },
      ],
    },
    researches: {
      title: "Projets de recherche",
      projects: [
        {
          title: "Facteurs influençant les prix des courses en taxi",
          description:
            "Réalisation d'un projet de recherche à grande échelle utilisant des données d'enquête originales collectées auprès de 116 étudiants universitaires. Réalisation d'analyses statistiques et économétriques pour identifier les principaux moteurs de la tarification des taxis. Utilisation d'outils tels que la modélisation de régression et l'analyse de corrélation pour quantifier l'impact de chaque facteur.",
          period: "2024",
        },
        {
          title:
            "Analyse du comportement des consommateurs sur le marché de la communication mobile sur l'exemple de Tele2",
          description:
            "Analyse des préférences tarifaires des clients en utilisant un véritable opérateur de réseau mobile comme étude de cas. Construction de courbes d'indifférence des consommateurs pour différents segments de population et identification des plans tarifaires optimaux. Fourniture de recommandations qui ont démontré une réduction des coûts allant jusqu'à 40 % pour certains groupes d'utilisateurs. Publication en 2024 dans le cadre d'un recueil de recherches sur l'économie numérique et le comportement de consommation.",
          period: "2024",
        },
        {
          title: "Principaux changements dans la comptabilisation des stocks de matières et de production",
          description: "",
          period: "2024",
        },
        {
          title: "Changements actuels dans les normes comptables fédérales : nécessité en période de changement",
          description: "",
          period: "2025",
        },
        {
          title:
            "Dynamique de la coopération économique entre la Chine et la Russie dans le cadre de restrictions économiques",
          description: "",
          period: "2025",
        },
      ],
    },
    volunteer: {
      title: "Expérience bénévole",
      activities: [
        {
          title: "Guide",
          organization: "INNOPROM",
          period: "Juil 2023",
          description: [
            "Animation de visites guidées pour des invités internationaux en russe et en anglais, coordination du flux de visiteurs et fourniture d'un soutien logistique sur place",
            "Représentation du pays hôte auprès des délégations étrangères et garantie d'une expérience de visite fluide et informative",
            "Réalisation personnelle d'une visite VIP pour la délégation du Zimbabwe, contribuant à l'image professionnelle de l'événement et à son rayonnement international",
          ],
        },
        {
          title: "Coordinateur des bénévoles",
          organization: "Comité du Festival international du sport universitaire",
          period: "Juil - Sep 2023",
          description: [
            "Aide aux athlètes étrangers et aux membres des délégations pour l'hébergement, le transport local et l'orientation dans la ville",
            "Liaison culturelle entre les participants internationaux et les organisateurs locaux, assurant une communication fluide et le confort pendant l'événement",
            "Aide au maintien de la réputation du festival en matière d'hospitalité et d'excellence opérationnelle dans un contexte international à forte pression",
          ],
        },
      ],
    },
    contact: {
      title: "Me contacter",
      description:
        "Je suis toujours intéressée à discuter de nouvelles opportunités en analyse d'affaires, recherche de marché ou analyse de données. N'hésitez pas à me contacter !",
      email: "mariiapriakhina@gmail.com",
      linkedin: "https://www.linkedin.com/in/mariiapriakhina/",
      phone: "+33759314454",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      researches: "Исследования",
      volunteer: "Волонтерство",
      contact: "Контакты",
    },
    about: {
      title: "Обо мне",
      description:
        "Привет!! Я студентка двойного диплома Уральского федерального университета и KEDGE Business School во Франции. Я увлечена анализом данных и исследованиями рынка. Я с нетерпением жду возможности построить свою карьеру в этих областях. Я не боюсь цифр и сложных задач. У меня есть опыт использования Python (pandas, numpy) для анализа данных, Excel и Google Sheets для отчетности, а также Python или Tableau для визуализации.\n\nЯ привношу красоту, ум и талант во все, что делаю.",
      ctaButton: "Связаться со мной",
    },
    experience: {
      title: "Опыт работы",
      jobs: [
        {
          title: "Стажер по маркетингу",
          company: "SMARTGEN Wealth Management",
          period: "Март 2025 - настоящее время",
          description: [
            "Проанализировал 30 конкурентов в сфере управления капиталом и создал стратегическое справочное руководство для команды",
            "Разработал Telegram-бот на Python, который автоматизирует мониторинг обновлений конкурентов в режиме реального времени (сокращение ежедневного времени ручного отслеживания до 4 часов для команды)",
          ],
        },
        {
          title: "Администратор проекта",
          company: "Unilever",
          period: "Март - Май 2024",
          description: [
            "Работал над проектом развития корпоративной культуры",
            'Разработал тематическую викторину "UniQuiz" об истории фабрики "Калина" и Unilever',
            "Викторина была проведена для 30 детей сотрудников и получила положительные отзывы в рамках корпоративного мероприятия",
          ],
        },
        {
          title: "Ассистент",
          company: "Haensch",
          period: "Ноябрь - Декабрь 2023",
          description: [
            "Исследовал правила сертификации для 40 пар отрасль-страна для внутреннего анализа рынка",
            "Провел исследование сертификации для 4 стран по нескольким отраслям",
            "Результаты были включены в руководство по сертификации продукции, разработанное в сотрудничестве с Российским экспортным центром",
          ],
        },
      ],
    },
    researches: {
      title: "Исследовательские проекты",
      projects: [
        {
          title: "Факторы, влияющие на цены на такси",
          description:
            "Провел полномасштабный исследовательский проект с использованием оригинальных данных опроса, собранных у 116 студентов университета. Провел статистический и эконометрический анализ для выявления ключевых факторов, определяющих цены на такси. Использовал такие инструменты, как регрессионное моделирование и корреляционный анализ для количественной оценки влияния каждого фактора.",
          period: "2024",
        },
        {
          title: "Анализ потребительского поведения на рынке мобильной связи на примере Tele2",
          description:
            "Проанализировал тарифные предпочтения клиентов, используя в качестве примера реального оператора мобильной связи. Построил кривые безразличия потребителей для различных сегментов населения и определил оптимальные тарифные планы. Предоставил рекомендации, которые продемонстрировали снижение затрат до 40% для определенных групп пользователей. Опубликовано в 2024 году в рамках сборника исследований по цифровой экономике и потребительскому поведению.",
          period: "2024",
        },
        {
          title: "Ключевые изменения в учете материально-производственных запасов",
          description: "",
          period: "2024",
        },
        {
          title: "Текущие изменения в федеральных стандартах бухгалтерского учета: необходимость во времена перемен",
          description: "",
          period: "2025",
        },
        {
          title: "Динамика экономического сотрудничества между Китаем и Россией в условиях экономических ограничений",
          description: "",
          period: "2025",
        },
      ],
    },
    volunteer: {
      title: "Волонтерский опыт",
      activities: [
        {
          title: "Гид",
          organization: "ИННОПРОМ",
          period: "Июль 2023",
          description: [
            "Проводил экскурсии для иностранных гостей на русском и английском языках, координировал поток посетителей и оказывал логистическую поддержку на месте",
            "Представлял принимающую страну перед иностранными делегациями и обеспечивал беспрепятственный и информативный опыт посещения",
            "Лично провел VIP-тур для делегации из Зимбабве, что способствовало профессиональному имиджу мероприятия и его международному охвату",
          ],
        },
        {
          title: "Координатор волонтеров",
          organization: "Комитет Международного фестиваля университетского спорта",
          period: "Июль - Сентябрь 2023",
          description: [
            "Помогал иностранным спортсменам и членам делегаций с размещением, местным транспортом и ориентацией по городу",
            "Выступал в качестве культурного посредника между международными участниками и местными организаторами, обеспечивая беспрепятственное общение и комфорт во время мероприятия",
            "Помогал поддерживать репутацию фестиваля за гостеприимство и операционное совершенство в международной среде с высоким давлением",
          ],
        },
      ],
    },
    contact: {
      title: "Связаться со мной",
      description:
        "Я всегда заинтересована в обсуждении новых возможностей в бизнес-анализе, исследовании рынка или анализе данных. Не стесняйтесь обращаться!",
      email: "mariiapriakhina@gmail.com",
      linkedin: "https://www.linkedin.com/in/mariiapriakhina/",
      phone: "+33759314454",
    },
  },
}

// Custom icons
// Remove the custom GmailIcon, LinkedInIcon, and WhatsAppIcon components
// They will be replaced with Lucide icons

export default function ResumePage() {
  const [language, setLanguage] = useState<"en" | "fr" | "ru">("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const lastScrollY = useRef(0)
  const [scrollY, setScrollY] = useState(0)

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
  ]

  const t = content[language]

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Theme detection and management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
      document.documentElement.classList.toggle("dark", systemTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Header scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsHeaderVisible(currentScrollY < lastScrollY.current || currentScrollY < 10)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "researches", "volunteer", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToContact = () => {
    scrollToSection("contact")
  }

  const [aboutDescriptionPart1, aboutDescriptionPart2] = t.about.description.split("\n\n")

  // Update the mobile menu toggle function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Add a function to handle language dropdown in mobile
  const handleLanguageToggle = () => {
    if (isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-gray-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent">
              Mariia Priakhina
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === key ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2 transition-colors duration-150">
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>

              {/* Language Dropdown */}
              <DropdownMenu onOpenChange={handleLanguageToggle}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 transition-colors duration-150">
                    <Globe className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={language === lang.code ? "bg-slate-100 dark:bg-slate-800" : ""}
                    >
                      {!isMobile && <span className="mr-2">{lang.flag}</span>}
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4">
              <div className="flex flex-col space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`text-left py-2 px-4 rounded-md transition-colors ${
                      activeSection === key
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        <section id="about" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:gap-12">
              <div className="flex-shrink-0 w-64 h-64 mx-auto md:mx-0 mb-8 md:mb-0">
                <img
                  src="/profile-photo.jpg"
                  alt="Mariia Priakhina"
                  className="w-full h-full rounded-2xl object-cover border-8 border-white dark:border-slate-700 shadow-lg"
                />
              </div>
              <div className="text-center md:text-left flex-grow">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span
                    className="bg-gradient-to-r from-slate-600 via-blue-600 to-purple-600 dark:from-slate-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-x"
                    style={{
                      backgroundSize: "200% 200%",
                      animation: `gradient-shift 8s ease infinite, gradient-scroll 0.1s linear infinite`,
                      transform: `hue-rotate(${scrollY * 0.1}deg)`,
                    }}
                  >
                    Mariia Priakhina
                  </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">Business Analyst | Market Researcher</p>
                <p className="text-lg text-slate-500 dark:text-slate-400">
                  International Economics and Business Student
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 mt-8 max-w-3xl mx-auto md:mx-0">
                  {aboutDescriptionPart1}
                </p>
                {aboutDescriptionPart2 && (
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto md:mx-0">
                    {aboutDescriptionPart2}
                  </p>
                )}
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t.about.ctaButton}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-700"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
                {t.experience.title}
              </h2>
              <div className="space-y-8">
                {t.experience.jobs.map((job, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1">{job.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">{job.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-slate-600 dark:text-slate-300 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Section - Replace the entire section */}
        <section id="researches" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
                {t.researches.title}
              </h2>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {t.researches.projects.map((project, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 leading-tight flex-grow">
                              {project.title}
                            </h3>
                            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 flex-shrink-0 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                              {project.period}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                            {project.description}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section
          id="volunteer"
          className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-700"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
                {t.volunteer.title}
              </h2>
              <div className="space-y-8">
                {t.volunteer.activities.map((activity, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1">
                            {activity.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{activity.organization}</p>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                          {activity.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {activity.description.map((item, idx) => (
                          <li key={idx} className="text-slate-600 dark:text-slate-300 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                {t.contact.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">{t.contact.description}</p>
              <div className="flex flex-col items-center justify-center space-y-6">
                <a
                  href={t.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                >
                  <Mail className="w-6 h-6" />
                  <span>{t.contact.email}</span>
                </a>
                <a
                  href={`https://wa.me/${t.contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{t.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 dark:text-slate-400">© 2025 Mariia Priakhina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
