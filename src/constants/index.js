import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    dotnet,
    sql,
    WebAPI,
    Calculator,
    AtmApp,
    grouptag,
    supabase,
    svelte,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: ".Net",
      icon: backend,
    },
    {
      title: "SQL",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Supabase",
      icon: supabase,
    },
    {
      name: "Svelte",
      icon: svelte,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    /*{
      name: "MongoDB",
      icon: mongodb,
    },*/
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    /*{
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },*/
    {
      name: "dotnet",
      icon: dotnet,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "GroupTag",
      icon: grouptag,
      iconBg: "#383E56",
      date: "2023 - 2024",
      points: [
        "Utilised technology: Svelte, Javascript, Tailwind CSS, HTML, Git, Supabase database server.",
        "Responsibilities: Design high quality layouts for front-end web app, develop interactive and functional web app, develop database and routing for back-end server in the web app",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "WebAPI",
      description:
        "Full stack. Data inventory sorting consist of Employees and their Departments, build from Microsoft SQL server as the database. Modify and add from .NetCore and Postman API. Web is created for display with use of React Js",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: ".Net",
          color: "green-text-gradient",
        },
        {
          name: "SQL database",
          color: "pink-text-gradient",
        },
      ],
      image: WebAPI,
      source_code_link: "https://github.com/elbertwilliam/WebAPI",
    },
    {
      name: "Calculator App",
      description:
        "Functional Calculator App developed with React Js and designed with gradient light color using tailwind css",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Calculator,
      source_code_link: "https://github.com/elbertwilliam/CalculatorApp",
    },
    {
      name: "Atm App",
      description:
        "Atm simulator by inserting accounts number and pin to access. The data user is stored in lists function. The functionality is similar to Atm where the user can withdraw, check balance, and deposit money. this project uses C# language and .net.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: ".net",
          color: "green-text-gradient",
        },
        {
          name: "Vscode",
          color: "pink-text-gradient",
        },
      ],
      image: AtmApp,
      source_code_link: "https://github.com/elbertwilliam/AtmApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };