"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, Moon, Sun, Globe, Mail, Linkedin, Users } from "lucide-react"

// Language content
const content = {
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      volunteer: "Volunteer",
      research: "Research",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      name: "Mariia Priakhina",
      role: "Business Analyst | Market Researcher | Data Analyst",
      bio: "International Economics and Business student with a passion for data-driven decision making and market analysis. I combine analytical thinking with business acumen to uncover insights that drive strategic growth and solve complex business challenges.",
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
    research: {
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
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Feel free to reach out for collaborations or opportunities",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      experience: "Expérience",
      volunteer: "Bénévolat",
      research: "Recherche",
      contact: "Contact",
    },
    about: {
      title: "À Propos de Moi",
      name: "Mariia Priakhina",
      role: "Analyste d'Affaires | Chercheuse de Marché | Analyste de Données",
      bio: "Étudiante en Économie Internationale et Commerce avec une passion pour la prise de décision basée sur les données et l'analyse de marché. Je combine la pensée analytique avec l'acumen commercial pour découvrir des insights qui stimulent la croissance stratégique et résolvent des défis commerciaux complexes.",
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
    research: {
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
            "Étude sur les effets des politiques commerciales sur les marchés émergents, se concentrant sur les indicateurs économiques.",
          link: "#",
        },
        {
          title: "Segmentation de Marché pour les Produits Durables",
          description:
            "Recherche sur les segments de consommateurs intéressés par les produits durables, analysant les facteurs démographiques et psychographiques.",
          link: "#",
        },
      ],
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "N'hésitez pas à me contacter pour des collaborations ou opportunités",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
    },
  },
  cs: {
    nav: {
      about: "O Mně",
      experience: "Zkušenosti",
      volunteer: "Dobrovolnictví",
      research: "Výzkum",
      contact: "Kontakt",
    },
    about: {
      title: "O Mně",
      name: "Mariia Priakhina",
      role: "Obchodní Analytička | Výzkumnice Trhu | Datová Analytička",
      bio: "Studentka Mezinárodní ekonomie a podnikání s vášní pro rozhodování založené na datech a analýzu trhu. Kombinuji analytické myšlení s obchodním důvtipem k odhalování poznatků, které řídí strategický růst a řeší složité obchodní výzvy.",
    },
    experience: {
      title: "Profesní Zkušenosti",
      jobs: [
        {
          title: "Junior Obchodní Analytička",
          company: "Global Markets Corp",
          period: "2023 - Současnost",
          tasks: [
            "Analyzovala tržní trendy a vzorce chování spotřebitelů pomocí statistických metod",
            "Vytvářela komplexní obchodní zprávy a vizualizace dat pro stakeholdery",
            "Prováděla konkurenční analýzu a výzkum trhu pro nové produkty",
            "Spolupracovala s mezifunkčními týmy na identifikaci obchodních příležitostí",
          ],
        },
        {
          title: "Stážistka Výzkumu Trhu",
          company: "Institut ekonomického výzkumu",
          period: "2022 - 2023",
          tasks: [
            "Navrhovala a prováděla průzkumy pro studie chování spotřebitelů",
            "Prováděla kvantitativní analýzu dat mezinárodního obchodu",
            "Připravovala zprávy tržní inteligence pro vládní agentury",
            "Asistovala při ekonomických prognózách a analýze trendů",
          ],
        },
        {
          title: "Asistentka Analýzy Dat",
          company: "Skupina obchodního poradenství",
          period: "2021 - 2022",
          tasks: [
            "Zpracovávala a analyzovala velké datové soubory pomocí Excel, R a Python",
            "Vytvářela interaktivní dashboardy pro klientské prezentace",
            "Podporovala senior analytiky v projektech segmentace trhu",
            "Udržovala kvalitu dat a prováděla validační kontroly",
          ],
        },
      ],
    },
    volunteer: {
      title: "Dobrovolnické Zkušenosti",
      activities: [
        {
          title: "Koordinátorka Ekonomického Vzdělávání",
          organization: "Nadace mládežnické ekonomie",
          period: "2020 - Současnost",
          description:
            "Organizovala workshopy o finanční gramotnosti a ekonomických principech pro středoškolské studenty. Vyvinula vzdělávací materiály a mentorovala více než 200 studentů.",
        },
        {
          title: "Dobrovolná Datová Analytička",
          organization: "Místní NGO pro sociální rozvoj",
          period: "2021 - 2023",
          description:
            "Analyzovala data z průzkumů k měření dopadu sociálních programů. Vytvořila zprávy, které pomohly zajistit dodatečné financování.",
        },
        {
          title: "Mentorka Mezinárodních Studentů",
          organization: "Mezinárodní kancelář univerzity",
          period: "2019 - 2022",
          description:
            "Mentorovala příchozí mezinárodní studenty, pomáhala jim přizpůsobit se akademickému a kulturnímu prostředí.",
        },
      ],
    },
    research: {
      title: "Výzkumné Projekty",
      projects: [
        {
          title: "Chování Spotřebitelů na Digitálních Trzích",
          description:
            "Komplexní analýza vzorců nákupů v e-commerce a preferencí digitálních spotřebitelů pomocí technik strojového učení.",
          link: "#",
        },
        {
          title: "Analýza Dopadu Mezinárodního Obchodu",
          description:
            "Studie o účincích obchodních politik na rozvíjející se trhy, zaměřená na ekonomické ukazatele a změny podnikatelského prostředí.",
          link: "#",
        },
        {
          title: "Segmentace Trhu pro Udržitelné Produkty",
          description:
            "Výzkum segmentů spotřebitelů zajímajících se o udržitelné produkty, analyzující demografické a psychografické faktory.",
          link: "#",
        },
      ],
    },
    contact: {
      title: "Kontaktujte Mě",
      subtitle: "Neváhejte mě kontaktovat ohledně spolupráce nebo příležitostí",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
    },
  },
  ru: {
    nav: {
      about: "Обо Мне",
      experience: "Опыт",
      volunteer: "Волонтёрство",
      research: "Исследования",
      contact: "Контакты",
    },
    about: {
      title: "Обо Мне",
      name: "Мария Приахина",
      role: "Бизнес-Аналитик | Исследователь Рынка | Аналитик Данных",
      bio: "Студентка международной экономики и бизнеса с страстью к принятию решений на основе данных и анализу рынка. Я сочетаю аналитическое мышление с деловой хваткой для выявления инсайтов, которые способствуют стратегическому росту и решают сложные бизнес-задачи.",
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
    research: {
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
      ],
    },
    contact: {
      title: "Свяжитесь со Мной",
      subtitle: "Не стесняйтесь обращаться по поводу сотрудничества или возможностей",
      email: "mariia.priakhina@email.com",
      linkedin: "linkedin.com/in/mariia-priakhina",
      mastodon: "@mariia@mastodon.social",
    },
  },
}

export default function ResumePage() {
  const [language, setLanguage] = useState<"en" | "fr" | "cs" | "ru">("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const volunteerRef = useRef<HTMLElement>(null)
  const researchRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const t = content[language]

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

    const sections = [aboutRef, experienceRef, volunteerRef, researchRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

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

  const cycleLanguage = () => {
    const languages: ("en" | "fr" | "cs" | "ru")[] = ["en", "fr", "cs", "ru"]
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex])
  }

  const getLanguageDisplay = () => {
    const displays = { en: "EN", fr: "FR", cs: "CS", ru: "RU" }
    return displays[language]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-gray-50 to-steel-50 dark:from-slate-900 dark:via-blue-gray-900/20 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/30`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
              MP
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === key
                      ? "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50"
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
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={cycleLanguage}
                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{getLanguageDisplay()}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
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
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700/30">
              <nav className="flex flex-col space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`px-3 py-2 rounded-md text-left transition-colors ${
                      activeSection === key
                        ? "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50"
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
        <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt={t.about.name}
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">{t.about.name}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{t.about.role}</p>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {t.about.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={experienceRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-800/30"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
              {t.experience.title}
            </h2>
            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/30 hover:shadow-lg transition-shadow"
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

        {/* Volunteer Section */}
        <section id="volunteer" ref={volunteerRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t.volunteer.title}</h2>
            <div className="space-y-8">
              {t.volunteer.activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/30 hover:shadow-lg transition-shadow"
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

        {/* Research Section */}
        <section
          id="research"
          ref={researchRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-800/30"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t.research.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.research.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/30 hover:shadow-lg transition-shadow group"
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">{t.contact.subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center space-x-3 px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/30 hover:shadow-lg transition-shadow group"
              >
                <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">{t.contact.email}</span>
              </a>

              <a
                href={`https://${t.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/30 hover:shadow-lg transition-shadow group"
              >
                <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">LinkedIn</span>
              </a>

              <a
                href={`https://mastodon.social/${t.contact.mastodon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/30 hover:shadow-lg transition-shadow group"
              >
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">Mastodon</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 {t.about.name}. Built with React & Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}
