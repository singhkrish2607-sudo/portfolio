const GITHUB_BASE = "https://github.com/singhkrish2607-sudo/";

export const projects = [
  {
    title: "Bank Management System",
    tag: "Python · MySQL",
    img: "/img/project-1.png",
    accent: "--color-violet",
    rotate: "-rotate-2",
    url: GITHUB_BASE + "Bank-management-system-using-python-",
    description:
      "A command-line banking app built with Python and MySQL. Customers can register, sign in, check balances, deposit, withdraw and transfer money, with a separate transaction table for each customer."
  },
  {
    title: "Bus Booking Data Analysis",
    tag: "MySQL",
    img: "/img/project-2.png",
    accent: "--color-coral",
    rotate: "rotate-1",
    url: GITHUB_BASE + "Bus_booking_analysis",
    description:
      "A bus booking and cancellation database with realistic data, an ER diagram and 19 business-analysis queries using joins, CTEs and aggregations to measure revenue, seat occupancy, payments and coupons."
  },
  {
    title: "RAG Chatbot",
    tag: "Python · RAG",
    img: "/img/project-3.png",
    accent: "--color-cyan",
    rotate: "-rotate-1",
    url: GITHUB_BASE + "ChatBot-using-RAG",
    description:
      "A lightweight Retrieval-Augmented Generation chatbot that answers questions from PDF documents, with a data loader, embeddings, vector store and a retrieval-plus-generation pipeline."
  },
  {
    title: "DataVision AI",
    tag: "Python · AI",
    img: "/img/project-4.png",
    accent: "--color-gold",
    rotate: "rotate-2",
    url: GITHUB_BASE + "DataVision_AI",
    description:
      "An AI-powered data analysis tool with a multi-agent architecture. It analyzes your data, generates insights and exports straight to Power BI dashboards."
  },
  {
    title: "Self-Correcting Code Agent",
    tag: "Python · AI Agent",
    img: "/img/project-5.png",
    accent: "--color-violet",
    rotate: "-rotate-2",
    url: GITHUB_BASE + "Reflective-Self-Correcting-Code-Generation-Agent",
    description:
      "An AI agent that generates working code for a problem, then uses the reflection pattern to test, examine and correct its own code until it works."
  },
  {
    title: "Zepto Sales Analysis",
    tag: "MySQL",
    img: "/img/project-6.png",
    accent: "--color-coral",
    rotate: "rotate-1",
    url: GITHUB_BASE + "Zepto-Data-Analysis-SQL-Project",
    description:
      "End-to-end analysis of Zepto sales data in MySQL: data cleaning, exploration and business insights on pricing, discounts and inventory patterns."
  }
];

export const experience = [
  {
    role: "SQL Developer and Trainer",
    company: "Cupule Technologies Pvt. Ltd.",
    period: "Sep 2024 – Present",
    accent: "--color-violet",
    rotate: "-rotate-1",
    points: [
      "Write complex SQL (multi-table joins, subqueries, CTEs, window functions) to extract, transform and report on booking, payment, revenue and cancellation data.",
      "Designed and built realistic multi-table databases (e-commerce, bus booking) with sample data, plus a library of analytical queries used for reporting and learner assessment.",
      "Audited schemas against requirement documents (SRS) and enforced accuracy through constraints, validation checks and data cleaning.",
      "Debugged incorrect query results and errors by tracing joins, filters and aggregations, reducing repeat mistakes in reporting.",
      "Trained and mentored 60-70 students in SQL through hands-on exercises, debugging sessions and graded assessments.",
      "Maintained clear documentation of database designs, ER diagrams and SQL scripts for team handover.",
      "Planned and delivered database and AI-agent projects independently, including a multi-agent customer service system built in Python."
    ]
  },
  {
    role: "Data Analyst Intern (6 months)",
    company: "Cupule Technologies Pvt. Ltd.",
    period: "Mar 2024 – Sep 2024",
    accent: "--color-coral",
    rotate: "rotate-1",
    points: [
      "Analyzed business data with SQL and Python to produce reports, insights and visualizations that supported data-driven decisions."
    ]
  }
];

export const education = {
  degree: "B.Sc. in Mathematics",
  institution: "Bundelkhand University",
  year: "2024"
};

export const skills = [
  {
    name: "MySQL",
    iconName: "Database",
    accent: "--color-violet",
    tilt: "-rotate-3"
  },
  {
    name: "PostgreSQL",
    iconName: "Database",
    accent: "--color-coral",
    tilt: "rotate-2"
  },
  {
    name: "Joins, CTEs & Window Functions",
    iconName: "Table2",
    accent: "--color-cyan",
    tilt: "-rotate-2"
  },
  {
    name: "Python",
    iconName: "CodeXml",
    accent: "--color-gold",
    tilt: "rotate-3"
  },
  {
    name: "Matplotlib & Reporting",
    iconName: "ChartColumn",
    accent: "--color-accent",
    tilt: "-rotate-2"
  },
  {
    name: "Data Quality & Cleaning",
    iconName: "ShieldCheck",
    accent: "--color-violet",
    tilt: "rotate-2"
  },
  {
    name: "RAG, LangChain & LangGraph",
    iconName: "Bot",
    accent: "--color-coral",
    tilt: "-rotate-3"
  }
];

export const aboutStats = [
  { value: "2+", label: "Years in SQL" },
  { value: "60-70", label: "Learners mentored" },
  { value: "6", label: "GitHub projects" }
];

export const aboutExtendedParagraphs = [
  "At Cupule Technologies I write complex SQL to extract, transform and report on booking, payment, revenue and cancellation data, and I audit schemas against requirement documents (SRS).",
  "I designed a normalized PostgreSQL schema for an intercity bus booking platform (SETURA), with ER diagrams, constraints, sample data and full design documentation.",
  "Before that I spent six months as a Data Analyst Intern, turning business data into reports and visualizations. I hold a B.Sc. in Mathematics from Bundelkhand University (2024) and speak Hindi and English."
];
