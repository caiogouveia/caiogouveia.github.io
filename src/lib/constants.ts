export const SITE_TITLE = "";
export const SITE_DESCRIPTION = "";
export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

  export interface ICurriculoItem {
    titulo: string;
    descricao: string;
    periodo?: {
      inicio: Date;
      fim: Date;
    };
  }

export const curriculo: ICurriculoItem[] = [
  {
    titulo: "Meio do Meio Propaganda",
    descricao: "Desenvolvedor Web, utilizando Flash, PHP, MySQL.",
    periodo:{
      inicio: new Date("2007-01-01"),
      fim: new Date("2007-07-01")
    }
  },
  {
    titulo: "FW2 Propaganda",
    descricao: "Desenvolvedor Web, utilizando Flash, PHP, MySQL.",
  },
  {
    titulo: "Inter Color Distribuidora",
    descricao:
      "Desenvolvedor Web, utilizando PHP, MySQL, Microsoft Sql Server <br>Desenvolvimento de peças para Marketing interno e externo. (Catálogos, Revistas, Panfletos, E-mail Marketing)",
  },
  {
    titulo: "Dev Freelancer",
    descricao:
      "Desenvolvedor Web, utilizando PHP/CakePHP, Ruby on Rails, MySQL, PostgreSQL, AWS Deploy das aplicações foram feitas usando OpsWorks na AWS de forma escalonável."
  },
  {
    titulo: "Quattromani Propaganda",
    descricao:
      "Desenvolvedor Web, utilizando PHP/CakePHP, Laravel, Html, MySQL, Css/Sass, Javascript, React.js.<br/> E também trabalhando com análises de estatísticas para ajudar o pessoal de planejamento com estratégias para clientes.",
  },
  {
    titulo: "TPF - Transportadora Porto Ferreira",
    descricao:
      "Desenvolvedor Web frontend e backend, utilizando PHP/Laravel, Html, PostgreSQL , Css, Tailwind, Javascript, React.js, Next.js, React Native",
  },
  {
    titulo: "Conhecimentos",
    descricao:
      "Linux, Git, Teste unitários, Laravel, React, React Native, Flutter (desenvolvimento móvel), Figma (design e prototipação), Photoshop, Illustrator, InDesign.",
  },
];
