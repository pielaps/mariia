"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Sun, Moon, Menu, X, ExternalLink } from "lucide-react"

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
        "I am a dedicated International Economics and Business student with a passion for data-driven insights and market analysis. My academic background combined with extensive volunteer experience has equipped me with strong analytical skills and a deep understanding of global economic trends.",
      ctaButton: "Contact Me",
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          title: "Business Analysis Intern",
          company: "Global Markets Ltd.",
          period: "2023 - Present",
          description: [
            "Conducted market research and competitive analysis for emerging markets",
            "Developed data visualization dashboards using Excel and Power BI",
            "Assisted in preparing quarterly business reports and presentations",
            "Collaborated with cross-functional teams on strategic planning initiatives",
          ],
        },
        {
          title: "Research Assistant",
          company: "University Economics Department",
          period: "2022 - 2023",
          description: [
            "Supported faculty research on international trade patterns",
            "Collected and analyzed economic data from various databases",
            "Prepared literature reviews and research summaries",
            "Assisted in organizing academic conferences and seminars",
          ],
        },
      ],
    },
    researches: {
      title: "Research Projects",
      projects: [
        {
          title: "Impact of Digital Trade on Emerging Economies",
          description:
            "Comprehensive analysis of how digital transformation affects trade patterns in developing countries, focusing on e-commerce growth and digital payment systems.",
          period: "2023",
        },
        {
          title: "Market Integration in Central European Countries",
          description:
            "Study examining the economic integration process and its effects on market efficiency in Central European nations post-EU accession.",
          period: "2022",
        },
        {
          title: "Consumer Behavior Analysis in Cross-Border E-commerce",
          description:
            "Research project analyzing consumer preferences and purchasing patterns in international online marketplaces.",
          period: "2022",
        },
      ],
    },
    volunteer: {
      title: "Volunteer Experience",
      activities: [
        {
          title: "Economic Education Volunteer",
          organization: "Youth Economics Initiative",
          period: "2021 - Present",
          description: [
            "Developed and delivered economics workshops for high school students",
            "Created educational materials on financial literacy and market economics",
            "Mentored students interested in pursuing economics and business studies",
            "Organized economics competitions and academic events",
          ],
        },
        {
          title: "Data Analysis Volunteer",
          organization: "Local NGO Development Center",
          period: "2020 - 2022",
          description: [
            "Analyzed survey data to support community development projects",
            "Created reports on local economic conditions and social indicators",
            "Assisted in grant application research and data collection",
            "Supported impact assessment studies for various programs",
          ],
        },
        {
          title: "Student Mentor",
          organization: "University International Student Services",
          period: "2019 - 2021",
          description: [
            "Guided international students through academic and cultural adaptation",
            "Organized orientation sessions and cultural exchange events",
            "Provided academic support and study group coordination",
            "Facilitated communication between students and university services",
          ],
        },
      ],
    },
    contact: {
      title: "Contact Me",
      description:
        "I'm always interested in discussing new opportunities in business analysis, market research, or data analysis. Feel free to reach out!",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
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
        "Je suis une étudiante dévouée en Économie Internationale et Commerce avec une passion pour les insights basés sur les données et l'analyse de marché. Mon parcours académique combiné à une vaste expérience bénévole m'a dotée de solides compétences analytiques et d'une compréhension approfondie des tendances économiques mondiales.",
      ctaButton: "Me contacter",
    },
    experience: {
      title: "Expérience professionnelle",
      jobs: [
        {
          title: "Stagiaire en Analyse d'Affaires",
          company: "Global Markets Ltd.",
          period: "2023 - Présent",
          description: [
            "Réalisation d'études de marché et d'analyses concurrentielles pour les marchés émergents",
            "Développement de tableaux de bord de visualisation de données avec Excel et Power BI",
            "Assistance dans la préparation de rapports d'affaires trimestriels et de présentations",
            "Collaboration avec des équipes transversales sur des initiatives de planification stratégique",
          ],
        },
        {
          title: "Assistant de Recherche",
          company: "Département d'Économie Universitaire",
          period: "2022 - 2023",
          description: [
            "Soutien à la recherche facultaire sur les modèles de commerce international",
            "Collecte et analyse de données économiques de diverses bases de données",
            "Préparation de revues de littérature et de résumés de recherche",
            "Assistance dans l'organisation de conférences académiques et de séminaires",
          ],
        },
      ],
    },
    researches: {
      title: "Projets de recherche",
      projects: [
        {
          title: "Impact du Commerce Numérique sur les Économies Émergentes",
          description:
            "Analyse complète de l'impact de la transformation numérique sur les modèles commerciaux dans les pays en développement, en se concentrant sur la croissance du e-commerce et les systèmes de paiement numériques.",
          period: "2023",
        },
        {
          title: "Intégration des Marchés dans les Pays d'Europe Centrale",
          description:
            "Étude examinant le processus d'intégration économique et ses effets sur l'efficacité du marché dans les nations d'Europe centrale post-adhésion à l'UE.",
          period: "2022",
        },
        {
          title: "Analyse du Comportement des Consommateurs dans le E-commerce Transfrontalier",
          description:
            "Projet de recherche analysant les préférences des consommateurs et les modèles d'achat dans les marchés en ligne internationaux.",
          period: "2022",
        },
      ],
    },
    volunteer: {
      title: "Expérience bénévole",
      activities: [
        {
          title: "Bénévole en Éducation Économique",
          organization: "Initiative Économique Jeunesse",
          period: "2021 - Présent",
          description: [
            "Développement et animation d'ateliers d'économie pour lycéens",
            "Création de matériel éducatif sur la littératie financière et l'économie de marché",
            "Mentorat d'étudiants intéressés par les études d'économie et de commerce",
            "Organisation de concours d'économie et d'événements académiques",
          ],
        },
        {
          title: "Bénévole en Analyse de Données",
          organization: "Centre de Développement ONG Local",
          period: "2020 - 2022",
          description: [
            "Analyse de données d'enquête pour soutenir les projets de développement communautaire",
            "Création de rapports sur les conditions économiques locales et les indicateurs sociaux",
            "Assistance dans la recherche de demandes de subventions et la collecte de données",
            "Soutien aux études d'évaluation d'impact pour divers programmes",
          ],
        },
        {
          title: "Mentor Étudiant",
          organization: "Services aux Étudiants Internationaux de l'Université",
          period: "2019 - 2021",
          description: [
            "Accompagnement des étudiants internationaux dans l'adaptation académique et culturelle",
            "Organisation de sessions d'orientation et d'événements d'échange culturel",
            "Fourniture de soutien académique et coordination de groupes d'étude",
            "Facilitation de la communication entre étudiants et services universitaires",
          ],
        },
      ],
    },
    contact: {
      title: "Me contacter",
      description:
        "Je suis toujours intéressée à discuter de nouvelles opportunités en analyse d'affaires, recherche de marché ou analyse de données. N'hésitez pas à me contacter !",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
    },
  },
  cs: {
    nav: {
      about: "O mně",
      experience: "Zkušenosti",
      researches: "Výzkumy",
      volunteer: "Dobrovolnictví",
      contact: "Kontakt",
    },
    about: {
      title: "O mně",
      description:
        "Jsem oddaná studentka Mezinárodní ekonomie a podnikání s vášní pro poznatky založené na datech a analýzu trhu. Mé akademické zázemí v kombinaci s rozsáhlými dobrovolnickými zkušenostmi mě vybavilo silnými analytickými dovednostmi a hlubokým porozuměním globálních ekonomických trendů.",
      ctaButton: "Kontaktujte mě",
    },
    experience: {
      title: "Pracovní zkušenosti",
      jobs: [
        {
          title: "Stážista obchodní analýzy",
          company: "Global Markets Ltd.",
          period: "2023 - současnost",
          description: [
            "Provedení průzkumu trhu a konkurenční analýzy pro rozvíjející se trhy",
            "Vývoj dashboardů pro vizualizaci dat pomocí Excel a Power BI",
            "Asistence při přípravě čtvrtletních obchodních zpráv a prezentací",
            "Spolupráce s mezifunkčními týmy na iniciativách strategického plánování",
          ],
        },
        {
          title: "Výzkumný asistent",
          company: "Univerzitní katedra ekonomie",
          period: "2022 - 2023",
          description: [
            "Podpora fakultního výzkumu vzorců mezinárodního obchodu",
            "Sběr a analýza ekonomických dat z různých databází",
            "Příprava literárních rešerší a výzkumných shrnutí",
            "Asistence při organizaci akademických konferencí a seminářů",
          ],
        },
      ],
    },
    researches: {
      title: "Výzkumné projekty",
      projects: [
        {
          title: "Dopad digitálního obchodu na rozvíjející se ekonomiky",
          description:
            "Komplexní analýza toho, jak digitální transformace ovlivňuje obchodní vzorce v rozvojových zemích, se zaměřením na růst e-commerce a systémy digitálních plateb.",
          period: "2023",
        },
        {
          title: "Tržní integrace ve středoevropských zemích",
          description:
            "Studie zkoumající proces ekonomické integrace a jeho účinky na tržní efektivitu ve středoevropských národech po vstupu do EU.",
          period: "2022",
        },
        {
          title: "Analýza chování spotřebitelů v přeshraničním e-commerce",
          description:
            "Výzkumný projekt analyzující preference spotřebitelů a nákupní vzorce na mezinárodních online tržištích.",
          period: "2022",
        },
      ],
    },
    volunteer: {
      title: "Dobrovolnické zkušenosti",
      activities: [
        {
          title: "Dobrovolník ekonomického vzdělávání",
          organization: "Iniciativa mládežnické ekonomie",
          period: "2021 - současnost",
          description: [
            "Vývoj a vedení ekonomických workshopů pro středoškolské studenty",
            "Vytváření vzdělávacích materiálů o finanční gramotnosti a tržní ekonomii",
            "Mentoring studentů zajímajících se o studium ekonomie a podnikání",
            "Organizace ekonomických soutěží a akademických akcí",
          ],
        },
        {
          title: "Dobrovolník analýzy dat",
          organization: "Místní centrum rozvoje NGO",
          period: "2020 - 2022",
          description: [
            "Analýza dat z průzkumů na podporu projektů komunitního rozvoje",
            "Vytváření zpráv o místních ekonomických podmínkách a sociálních ukazatelích",
            "Asistence při výzkumu grantových žádostí a sběru dat",
            "Podpora studií hodnocení dopadu pro různé programy",
          ],
        },
        {
          title: "Studentský mentor",
          organization: "Univerzitní služby pro mezinárodní studenty",
          period: "2019 - 2021",
          description: [
            "Vedení mezinárodních studentů při akademické a kulturní adaptaci",
            "Organizace orientačních sezení a akcí kulturní výměny",
            "Poskytování akademické podpory a koordinace studijních skupin",
            "Usnadnění komunikace mezi studenty a univerzitními službami",
          ],
        },
      ],
    },
    contact: {
      title: "Kontaktujte mě",
      description:
        "Vždy mám zájem diskutovat o nových příležitostech v obchodní analýze, průzkumu trhu nebo analýze dat. Neváhejte se ozvat!",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
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
        "Я преданная студентка международной экономики и бизнеса с страстью к аналитическим выводам на основе данных и анализу рынка. Мое академическое образование в сочетании с обширным волонтерским опытом дало мне сильные аналитические навыки и глубокое понимание глобальных экономических тенденций.",
      ctaButton: "Связаться со мной",
    },
    experience: {
      title: "Опыт работы",
      jobs: [
        {
          title: "Стажер по бизнес-анализу",
          company: "Global Markets Ltd.",
          period: "2023 - настоящее время",
          description: [
            "Проведение исследований рынка и конкурентного анализа для развивающихся рынков",
            "Разработка дашбордов визуализации данных с использованием Excel и Power BI",
            "Помощь в подготовке квартальных бизнес-отчетов и презентаций",
            "Сотрудничество с межфункциональными командами по инициативам стратегического планирования",
          ],
        },
        {
          title: "Научный ассистент",
          company: "Университетский факультет экономики",
          period: "2022 - 2023",
          description: [
            "Поддержка факультетских исследований моделей международной торговли",
            "Сбор и анализ экономических данных из различных баз данных",
            "Подготовка литературных обзоров и исследовательских резюме",
            "Помощь в организации академических конференций и семинаров",
          ],
        },
      ],
    },
    researches: {
      title: "Исследовательские проекты",
      projects: [
        {
          title: "Влияние цифровой торговли на развивающиеся экономики",
          description:
            "Комплексный анализ того, как цифровая трансформация влияет на торговые модели в развивающихся странах, с акцентом на рост электронной коммерции и системы цифровых платежей.",
          period: "2023",
        },
        {
          title: "Рыночная интеграция в странах Центральной Европы",
          description:
            "Исследование, изучающее процесс экономической интеграции и его влияние на эффективность рынка в центральноевропейских странах после вступления в ЕС.",
          period: "2022",
        },
        {
          title: "Анализ поведения потребителей в трансграничной электронной коммерции",
          description:
            "Исследовательский проект, анализирующий предпочтения потребителей и модели покупок на международных онлайн-рынках.",
          period: "2022",
        },
      ],
    },
    volunteer: {
      title: "Волонтерский опыт",
      activities: [
        {
          title: "Волонтер экономического образования",
          organization: "Инициатива молодежной экономики",
          period: "2021 - настоящее время",
          description: [
            "Разработка и проведение экономических семинаров для старшеклассников",
            "Создание образовательных материалов по финансовой грамотности и рыночной экономике",
            "Наставничество студентов, заинтересованных в изучении экономики и бизнеса",
            "Организация экономических конкурсов и академических мероприятий",
          ],
        },
        {
          title: "Волонтер анализа данных",
          organization: "Местный центр развития НПО",
          period: "2020 - 2022",
          description: [
            "Анализ данных опросов для поддержки проектов развития сообщества",
            "Создание отчетов о местных экономических условиях и социальных показателях",
            "Помощь в исследовании грантовых заявок и сборе данных",
            "Поддержка исследований оценки воздействия для различных программ",
          ],
        },
        {
          title: "Студенческий наставник",
          organization: "Университетские services для международных студентов",
          period: "2019 - 2021",
          description: [
            "Руководство международными студентами в академической и культурной адаптации",
            "Организация ориентационных сессий и мероприятий культурного обмена",
            "Предоставление академической поддержки и координация учебных групп",
            "Содействие общению между студентами и университетскими службами",
          ],
        },
      ],
    },
    contact: {
      title: "Связаться со мной",
      description:
        "Я всегда заинтересована в обсуждении новых возможностей в бизнес-анализе, исследовании рынка или анализе данных. Не стесняйтесь обращаться!",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
    },
  },
}

// Custom icons
const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.454-6.269h.91c.904 0 1.636.732 1.636 1.636z"
      fill="#EA4335"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="#0077B5"
    />
  </svg>
)

const MastodonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path
      d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
      fill="#6364FF"
    />
  </svg>
)

export default function ResumePage() {
  const [language, setLanguage] = useState<"en" | "fr" | "cs" | "ru">("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
    { code: "cs" as const, name: "Čeština", flag: "🇨🇿" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
  ]

  const t = content[language]

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
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
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
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <img
                  src="/placeholder-user.jpg"
                  alt="Mariia Priakhina"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white dark:border-slate-700 shadow-lg"
                />
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-slate-600 to-blue-600 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent">
                    Mariia Priakhina
                  </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">Business Analyst & Market Researcher</p>
                <p className="text-lg text-slate-500 dark:text-slate-400">
                  International Economics and Business Student
                </p>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                {t.about.description}
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.about.ctaButton}
              </Button>
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

        {/* Research Section */}
        <section id="researches" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
                {t.researches.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {t.researches.projects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                          {project.title}
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 flex-shrink-0">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <GmailIcon />
                  <span>{t.contact.email}</span>
                </a>
                <a
                  href={`https://${t.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`https://mastodon.social/${t.contact.mastodon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <MastodonIcon />
                  <span>Mastodon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 dark:text-slate-400">© 2024 Mariia Priakhina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
