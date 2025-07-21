"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown, Globe, ChevronLeft, ChevronRight } from "lucide-react"

// Official Brand Icons Components
const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.711-1.613 1.598-1.636a1.636 1.636 0 0 1 .674.132L12 9.993l9.728-6.04a1.636 1.636 0 0 1 .674-.132c.887.023 1.598.749 1.598 1.636z"
      fill="#EA4335"
    />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="#0A66C2"
    />
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488"
      fill="#25D366"
    />
  </svg>
)

// Language content
const content = {
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      researches: "Researches",
      volunteer: "Volunteer",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      name: "Mariia Priakhina",
      role: "Business Analyst | Market Researcher",
      bio: "Hello!! I am a double-degree student at Ural Federal University and KEDGE Business School in France. I am passionate about data analysis and market research. I look forward to building my career in these fields. I am not afraid of numbers and difficult challenges. I have experience using Python (pandas, numpy) for data analysis, Excel and Google Sheets for reporting, and Python or Tableau for visualization.\n\nI bring beauty, brains, and talent to everything I do.",
      ctaButton: "Contact Me",
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Junior Business Analyst",
          company: "Global Markets Corp",
          period: "2023 - Present",
          tasks: [
            "Analyzed market trends and consumer behavior patterns using statistical methods",
            "Created comprehensive business reports and data visualizations for stakeholders",
            "Conducted competitive analysis and market research for new product launches",
            "Collaborated with cross-functional teams to identify business opportunities",
          ],
        },
        {
          title: "Market Research Intern",
          company: "Economic Research Institute",
          period: "2022 - 2023",
          tasks: [
            "Designed and conducted surveys for consumer behavior studies",
            "Performed quantitative analysis on international trade data",
            "Prepared market intelligence reports for government agencies",
            "Assisted in economic forecasting models and trend analysis",
          ],
        },
        {
          title: "Data Analysis Assistant",
          company: "Business Consulting Group",
          period: "2021 - 2022",
          tasks: [
            "Processed and analyzed large datasets using Excel, R, and Python",
            "Created interactive dashboards for client presentations",
            "Supported senior analysts in market segmentation projects",
            "Maintained data quality and performed validation checks",
          ],
        },
      ],
    },
    researches: {
      title: "Research Projects",
      projects: [
        {
          title: "Consumer Behavior in Digital Markets",
          description:
            "Comprehensive analysis of e-commerce purchasing patterns and digital consumer preferences using machine learning techniques.",
          link: "#",
        },
        {
          title: "International Trade Impact Analysis",
          description:
            "Study on the effects of trade policies on emerging markets, focusing on economic indicators and business environment changes.",
          link: "#",
        },
        {
          title: "Market Segmentation for Sustainable Products",
          description:
            "Research on consumer segments interested in sustainable products, analyzing demographic and psychographic factors.",
          link: "#",
        },
        {
          title: "Financial Technology Adoption Patterns",
          description:
            "Analysis of fintech adoption rates across different demographics and geographic regions, examining barriers and drivers.",
          link: "#",
        },
        {
          title: "Social Media Marketing Effectiveness",
          description:
            "Comprehensive study on ROI measurement and effectiveness of social media marketing campaigns across various industries.",
          link: "#",
        },
      ],
    },
    volunteer: {
      title: "Volunteer Experience",
      activities: [
        {
          title: "Economic Education Coordinator",
          organization: "Youth Economics Foundation",
          period: "2020 - Present",
          description:
            "Organized workshops on financial literacy and economic principles for high school students. Developed educational materials and mentored over 200 students in understanding market economics.",
        },
        {
          title: "Data Analyst Volunteer",
          organization: "Local NGO for Social Development",
          period: "2021 - 2023",
          description:
            "Analyzed survey data to measure the impact of social programs. Created reports that helped secure additional funding and improve program effectiveness.",
        },
        {
          title: "International Student Mentor",
          organization: "University International Office",
          period: "2019 - 2022",
          description:
            "Mentored incoming international students, helping them adapt to academic and cultural environments. Organized cultural exchange events and academic support sessions.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Feel free to reach out for collaborations or opportunities",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      whatsapp: "+33759314454",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      experience: "Expérience",
      researches: "Recherches",
      volunteer: "Bénévolat",
      contact: "Contact",
    },
    about: {
      title: "À Propos de Moi",
      name: "Mariia Priakhina",
      role: "Analyste d'Affaires | Chercheuse de Marché",
      bio: "Salut!! Je suis étudiante en double diplôme à l'Université Fédérale de l'Oural et à KEDGE Business School en France. Je suis passionnée par l'analyse de données et la recherche de marché. J'ai hâte de construire ma carrière dans ces domaines. Je n'ai pas peur des chiffres et des défis difficiles. J'ai de l'expérience avec Python (pandas, numpy) pour l'analyse de données, Excel et Google Sheets pour les rapports, et Python ou Tableau pour la visualisation.\n\nJ'apporte beauté, intelligence et talent à tout ce que je fais.",
      ctaButton: "Contactez-Moi",
    },
    experience: {
      title: "Expérience Professionnelle",
      jobs: [
        {
          title: "Analyste d'Affaires Junior",
          company: "Global Markets Corp",
          period: "2023 - Présent",
          tasks: [
            "Analysé les tendances du marché et les modèles de comportement des consommateurs",
            "Créé des rapports d'affaires complets et des visualisations de données",
            "Effectué des analyses concurrentielles et des recherches de marché",
            "Collaboré avec des équipes transversales pour identifier les opportunités",
          ],
        },
        {
          title: "Stagiaire en Recherche de Marché",
          company: "Institut de Recherche Économique",
          period: "2022 - 2023",
          tasks: [
            "Conçu et mené des enquêtes sur le comportement des consommateurs",
            "Effectué des analyses quantitatives sur les données de commerce international",
            "Préparé des rapports d'intelligence de marché pour les agences gouvernementales",
            "Assisté dans les modèles de prévision économique et l'analyse des tendances",
          ],
        },
        {
          title: "Assistant d'Analyse de Données",
          company: "Groupe de Conseil en Affaires",
          period: "2021 - 2022",
          tasks: [
            "Traité et analysé de grands ensembles de données avec Excel, R et Python",
            "Créé des tableaux de bord interactifs pour les présentations clients",
            "Soutenu les analystes seniors dans les projets de segmentation de marché",
            "Maintenu la qualité des données et effectué des vérifications de validation",
          ],
        },
      ],
    },
    researches: {
      title: "Projets de Recherche",
      projects: [
        {
          title: "Comportement des Consommateurs dans les Marchés Numériques",
          description:
            "Analyse complète des modèles d'achat e-commerce et des préférences des consommateurs numériques utilisant des techniques d'apprentissage automatique.",
          link: "#",
        },
        {
          title: "Analyse d'Impact du Commerce International",
          description:
            "Étude sur les effets des politiques commerciales sur les marchés émergents, se concentrant sur les indicateurs économiques et les changements d'environnement commercial.",
          link: "#",
        },
        {
          title: "Segmentation de Marché pour les Produits Durables",
          description:
            "Recherche sur les segments de consommateurs intéressés par les produits durables, analysant les facteurs démographiques et psychographiques.",
          link: "#",
        },
        {
          title: "Modèles d'Adoption de la Technologie Financière",
          description:
            "Analyse des taux d'adoption fintech à travers différentes démographies et régions géographiques, examinant les barrières et les moteurs.",
          link: "#",
        },
        {
          title: "Efficacité du Marketing des Médias Sociaux",
          description:
            "Étude complète sur la mesure du ROI et l'efficacité des campagnes de marketing des médias sociaux dans diverses industries.",
          link: "#",
        },
      ],
    },
    volunteer: {
      title: "Expérience Bénévole",
      activities: [
        {
          title: "Coordinatrice d'Éducation Économique",
          organization: "Fondation d'Économie pour la Jeunesse",
          period: "2020 - Présent",
          description:
            "Organisé des ateliers sur la littératie financière et les principes économiques pour les lycéens. Développé du matériel éducatif et mentoré plus de 200 étudiants.",
        },
        {
          title: "Analyste de Données Bénévole",
          organization: "ONG Locale pour le Développement Social",
          period: "2021 - 2023",
          description:
            "Analysé les données d'enquête pour mesurer l'impact des programmes sociaux. Créé des rapports qui ont aidé à sécuriser des financements supplémentaires.",
        },
        {
          title: "Mentore d'Étudiants Internationaux",
          organization: "Bureau International de l'Université",
          period: "2019 - 2022",
          description:
            "Mentoré les étudiants internationaux entrants, les aidant à s'adapter aux environnements académiques et culturels.",
        },
      ],
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "N'hésitez pas à me contacter pour des collaborations ou opportunités",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      whatsapp: "+33759314454",
    },
  },
  ru: {
    nav: {
      about: "Обо Мне",
      experience: "Опыт",
      researches: "Исследования",
      volunteer: "Волонтёрство",
      contact: "Контакты",
    },
    about: {
      title: "Обо Мне",
      name: "Мария Приахина",
      role: "Бизнес-Аналитик | Исследователь Рынка",
      bio: "Привет!! Я студентка двойного диплома в Уральском федеральном университете и KEDGE Business School во Франции. Я увлечена анализом данных и исследованием рынка. С нетерпением жду построения карьеры в этих областях. Я не боюсь цифр и сложных задач. У меня есть опыт использования Python (pandas, numpy) для анализа данных, Excel и Google Sheets для отчетности, и Python или Tableau для визуализации.\n\nЯ привношу красоту, ум и талант во все, что делаю.",
      ctaButton: "Свяжитесь со Мной",
    },
    experience: {
      title: "Профессиональный Опыт",
      jobs: [
        {
          title: "Младший Бизнес-Аналитик",
          company: "Global Markets Corp",
          period: "2023 - Настоящее время",
          tasks: [
            "Анализировала рыночные тренды и модели поведения потребителей статистическими методами",
            "Создавала комплексные бизнес-отчёты и визуализации данных для заинтересованных сторон",
            "Проводила конкурентный анализ и исследования рынка для новых продуктов",
            "Сотрудничала с межфункциональными командами для выявления бизнес-возможностей",
          ],
        },
        {
          title: "Стажёр-Исследователь Рынка",
          company: "Институт экономических исследований",
          period: "2022 - 2023",
          tasks: [
            "Разрабатывала и проводила опросы для изучения поведения потребителей",
            "Выполняла количественный анализ данных международной торговли",
            "Готовила отчёты рыночной разведки для государственных агентств",
            "Помогала в создании экономических прогнозных моделей и анализе трендов",
          ],
        },
        {
          title: "Ассистент по Анализу Данных",
          company: "Группа бизнес-консалтинга",
          period: "2021 - 2022",
          tasks: [
            "Обрабатывала и анализировала большие наборы данных с помощью Excel, R и Python",
            "Создавала интерактивные дашборды для клиентских презентаций",
            "Поддерживала старших аналитиков в проектах сегментации рынка",
            "Поддерживала качество данных и выполняла проверки валидации",
          ],
        },
      ],
    },
    researches: {
      title: "Исследовательские Проекты",
      projects: [
        {
          title: "Поведение Потребителей на Цифровых Рынках",
          description:
            "Комплексный анализ моделей покупок в электронной коммерции и предпочтений цифровых потребителей с использованием техник машинного обучения.",
          link: "#",
        },
        {
          title: "Анализ Влияния Международной Торговли",
          description:
            "Исследование влияния торговой политики на развивающиеся рынки, сосредоточенное на экономических показателях и изменениях бизнес-среды.",
          link: "#",
        },
        {
          title: "Сегментация Рынка Устойчивых Продуктов",
          description:
            "Исследование сегментов потребителей, заинтересованных в устойчивых продуктах, анализ демографических и психографических факторов.",
          link: "#",
        },
        {
          title: "Модели Принятия Финансовых Технологий",
          description:
            "Анализ показателей принятия финтех-решений в различных демографических группах и географических регионах, изучение барьеров и драйверов.",
          link: "#",
        },
        {
          title: "Эффективность Маркетинга в Социальных Сетях",
          description:
            "Комплексное исследование измерения ROI и эффективности маркетинговых кампаний в социальных сетях в различных отраслях.",
          link: "#",
        },
      ],
    },
    volunteer: {
      title: "Волонтёрский Опыт",
      activities: [
        {
          title: "Координатор Экономического Образования",
          organization: "Фонд молодёжной экономики",
          period: "2020 - Настоящее время",
          description:
            "Организовывала семинары по финансовой грамотности и экономическим принципам для старшеклассников. Разработала образовательные материалы и наставляла более 200 студентов.",
        },
        {
          title: "Волонтёр-Аналитик Данных",
          organization: "Местная НКО социального развития",
          period: "2021 - 2023",
          description:
            "Анализировала данные опросов для измерения воздействия социальных программ. Создала отчёты, которые помогли получить дополнительное финансирование.",
        },
        {
          title: "Наставник Международных Студентов",
          organization: "Международный офис университета",
          period: "2019 - 2022",
          description:
            "Наставляла прибывающих международных студентов, помогая им адаптироваться к академической и культурной среде.",
        },
      ],
    },
    contact: {
      title: "Свяжитесь со Мной",
      subtitle: "Не стесняйтесь обращаться по поводу сотрудничества или возможностей",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      whatsapp: "+33759314454",
    },
  },
}

export default function ResumePage() {
  const [language, setLanguage] = useState<"en" | "fr" | "ru">("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const researchesRef = useRef<HTMLElement>(null)
  const volunteerRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const t = content[language]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Theme initialization and management
  useEffect(() => {
    const root = document.documentElement

    // Check if user has a stored preference
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null

    if (storedTheme) {
      // Use stored preference
      setTheme(storedTheme)
      if (storedTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } else {
      // Detect system preference on first load
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const initialTheme = systemPrefersDark ? "dark" : "light"
      setTheme(initialTheme)

      if (initialTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }, [])

  // Header scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" },
    )

    const sections = [aboutRef, experienceRef, researchesRef, volunteerRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isLanguageDropdownOpen])

  // Add this useEffect after the other useEffect hooks
  useEffect(() => {
    console.log("Language changed to:", language)
  }, [language])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    // Store preference in localStorage
    localStorage.setItem("theme", newTheme)

    // Apply theme
    const root = document.documentElement
    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }

  const selectLanguage = (langCode: "en" | "fr" | "ru") => {
    console.log("Changing language to:", langCode) // Debug log
    setLanguage(langCode)
    setIsLanguageDropdownOpen(false)

    // Force a small delay to ensure state update
    setTimeout(() => {
      console.log("Current language state:", langCode) // Debug log
    }, 100)
  }

  const handleLanguageToggle = () => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
    // Toggle language dropdown
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const handleLogoClick = () => {
    scrollToSection("about")
  }

  // Carousel functions
  const nextSlide = () => {
    const maxSlide = t.researches.projects.length - (isMobile ? 1 : 2)
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxSlide = t.researches.projects.length - (isMobile ? 1 : 2)
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  // Auto-scroll for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isMobile, t.researches.projects.length])

  return (
    <div
      key={language}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-blue-gray-900/30 dark:to-slate-900 transition-colors duration-300"
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="font-bold text-xl bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent hover:from-slate-700 hover:to-blue-700 transition-all duration-200"
            >
              MP
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === key
                      ? "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/70"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              >
                {theme === "light" ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={handleLanguageToggle}
                  className="flex items-center space-x-1 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <ChevronDown className="w-3 h-3" />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code as "en" | "fr" | "ru")}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center space-x-3 ${
                          language === lang.code
                            ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {!isMobile && <span>{lang.flag}</span>}
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <div className="w-5 h-5 relative">
                    <div className="absolute inset-0 w-5 h-0.5 bg-current transform rotate-45 translate-y-2"></div>
                    <div className="absolute inset-0 w-5 h-0.5 bg-current transform -rotate-45 translate-y-2"></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 relative">
                    <div className="absolute top-1 w-5 h-0.5 bg-current"></div>
                    <div className="absolute top-2 w-5 h-0.5 bg-current"></div>
                    <div className="absolute top-3 w-5 h-0.5 bg-current"></div>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700/50">
              <nav className="flex flex-col space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`px-3 py-2 rounded-md text-left transition-colors ${
                      activeSection === key
                        ? "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/70"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-900/50 dark:to-blue-gray-900/50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-slate-400 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt={t.about.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-300% bg-gradient-to-r">
                    {t.about.name}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{t.about.role}</p>
                <div className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
                  {t.about.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white font-medium rounded-lg hover:from-slate-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {t.about.ctaButton}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={experienceRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100/80 to-gray-100/80 dark:from-slate-800/80 dark:to-blue-gray-800/80"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
              {t.experience.title}
            </h2>
            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section with Carousel */}
        <section
          id="researches"
          ref={researchesRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-900/50 dark:to-blue-gray-900/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
              {t.researches.title}
            </h2>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows - Desktop Only */}
              {!isMobile && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white dark:hover:bg-slate-800"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white dark:hover:bg-slate-800"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </button>
                </>
              )}

              {/* Carousel */}
              <div ref={carouselRef} className="overflow-hidden mx-8 md:mx-12">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * (isMobile ? 85 : 50)}%)`,
                  }}
                >
                  {t.researches.projects.map((project, index) => (
                    <div key={index} className={`flex-shrink-0 px-3 ${isMobile ? "w-4/5" : "w-1/2"}`}>
                      <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow group h-full">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium transition-colors"
                        >
                          Read More
                          <ChevronUp className="w-4 h-4 ml-1 rotate-45" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator - Desktop Only */}
              {!isMobile && (
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: t.researches.projects.length - 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? "bg-slate-600 dark:bg-slate-300" : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section
          id="volunteer"
          ref={volunteerRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100/80 to-gray-100/80 dark:from-slate-800/80 dark:to-blue-gray-800/80"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t.volunteer.title}</h2>
            <div className="space-y-8">
              {t.volunteer.activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{activity.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">{activity.organization}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">{activity.period}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-900/50 dark:to-blue-gray-900/50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">{t.contact.subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow group"
              >
                <GmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">{t.contact.email}</span>
              </a>

              <a
                href={`https://${t.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow group"
              >
                <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">LinkedIn</span>
              </a>

              <a
                href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow group"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-900/50 dark:to-blue-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2025 {t.about.name}. Built with React & Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}
