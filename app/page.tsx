"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown, Globe } from "lucide-react"

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

const MastodonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
      fill="#6364FF"
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
      role: "Business Analyst | Market Researcher | Data Analyst",
      bio: "International Economics and Business student with a passion for data-driven decision making and market analysis. I combine analytical thinking with business acumen to uncover insights that drive strategic growth and solve complex business challenges.",
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
      mastodon: "@mariia@mastodon.social",
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
      role: "Analyste d'Affaires | Chercheuse de Marché | Analyste de Données",
      bio: "Étudiante en Économie Internationale et Commerce avec une passion pour la prise de décision basée sur les données et l'analyse de marché. Je combine la pensée analytique avec l'acumen commercial pour découvrir des insights qui stimulent la croissance stratégique et résolvent des défis commerciaux complexes.",
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
      mastodon: "@mariia@mastodon.social",
    },
  },
  cs: {
    nav: {
      about: "O Mně",
      experience: "Zkušenosti",
      researches: "Výzkumy",
      volunteer: "Dobrovolnictví",
      contact: "Kontakt",
    },
    about: {
      title: "O Mně",
      name: "Mariia Priakhina",
      role: "Obchodní Analytička | Výzkumnice Trhu | Datová Analytička",
      bio: "Studentka Mezinárodní ekonomie a podnikání s vášní pro rozhodování založené na datech a analýzu trhu. Kombinuji analytické myšlení s obchodním důvtipem k odhalování poznatků, které řídí strategický růst a řeší složité obchodní výzvy.",
      ctaButton: "Kontaktujte Mě",
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
    researches: {
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
      researches: "Исследования",
      volunteer: "Волонтёрство",
      contact: "Контакты",
    },
    about: {
      title: "Обо Мне",
      name: "Мария Приахина",
      role: "Бизнес-Аналитик | Исследователь Рынка | Аналитик Данных",
      bio: "Студентка международной экономики и бизнеса с страстью к принятию решений на основе данных и анализу рынка. Я сочетаю аналитическое мышление с деловой хваткой для выявления инсайтов, которые способствуют стратегическому росту и решают сложные бизнес-задачи.",
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
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const researchesRef = useRef<HTMLElement>(null)
  const volunteerRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const t = content[language]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "cs", name: "Čeština", flag: "🇨🇿" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

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

  const selectLanguage = (langCode: "en" | "fr" | "cs" | "ru") => {
    setLanguage(langCode)
    setIsLanguageDropdownOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-blue-gray-900/30 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50`}
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
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
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
                        onClick={() => selectLanguage(lang.code as "en" | "fr" | "cs" | "ru")}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center space-x-3 ${
                          language === lang.code
                            ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <span>{lang.flag}</span>
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-slate-700 bg-clip-text text-transparent">
                  {t.about.name}
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{t.about.role}</p>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {t.about.bio}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white font-medium rounded-lg hover:from-slate-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t.about.ctaButton}
              </button>
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

        {/* Research Section */}
        <section
          id="researches"
          ref={researchesRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-blue-gray-900/50 dark:to-slate-900/80"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
              {t.researches.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.researches.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow group"
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

        {/* Volunteer Section */}
        <section
          id="volunteer"
          ref={volunteerRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100/80 to-blue-100/80 dark:from-slate-800/80 dark:to-blue-gray-800/80"
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
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-blue-gray-900/50 dark:to-slate-900/80"
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
                href={`https://mastodon.social/${t.contact.mastodon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow group"
              >
                <MastodonIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300">Mastodon</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700/50 bg-gradient-to-br from-slate-100/80 to-gray-100/80 dark:from-slate-800/80 dark:to-blue-gray-800/80">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 {t.about.name}. Built with React & Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}
