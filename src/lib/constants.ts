import { ICurriculoItem } from "@/interfaces/curriculo";

export const SITE_TITLE = "";
export const SITE_DESCRIPTION = "";
export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

export const formacao:ICurriculoItem[] = [
  {
    titulo: "Escola Superior de Tecnologia e Educação - Asser",
    descricao: "Sistemas de Informação"
  },
  {
    titulo:"Fatece - Faculdade de Tecnologia, Ciências e Educação",
    descricao: "Pós-graduação Lato Sensu, Marketing Digital"
  }
];

export const conhecimentos: ICurriculoItem[] = [
  {
    titulo: "",
    descricao:
    "Linux, Git, Teste unitários, Sentry, Laravel, React, React Native, Flutter (desenvolvimento móvel), Figma (design e prototipação), Photoshop, Illustrator, InDesign.",
  },
];

export const curriculo: ICurriculoItem[] = [

  {
    titulo: "Meio do Meio Propaganda",
    descricao: "Desenvolvedor Web, utilizando Flash, PHP, MySQL.",
    periodo: {
      inicio: "Fev. 2003",
      fim: "Set. 2006",
    },
  },
  {
    titulo: "FW2 Propaganda",
    descricao: "Desenvolvedor Web, utilizando Flash, PHP, MySQL.",
    periodo: {
      inicio: "Fev. 2006",
      fim: "Set. 2006",
    },
  },
  {
    titulo: "Inter Color Distribuidora",
    descricao:
    "Desenvolvedor Web, utilizando PHP, MySQL, Microsoft Sql Server <br>Desenvolvimento de peças para Marketing interno e externo. (Catálogos, Revistas, Panfletos, E-mail Marketing)",
    periodo: {
      inicio: "Mai. 2007",
      fim: "Fev. 2012",
    },
  },
  {
    titulo: "Dev Freelancer",
    descricao:
    "Desenvolvedor Web, utilizando PHP/CakePHP, Ruby on Rails, MySQL, PostgreSQL, AWS Deploy das aplicações foram feitas usando OpsWorks na AWS de forma escalonável.",
    periodo:{
      inicio: "Mar. 2012",
      fim: "Jan. 2016"
    }
  },
  {
    titulo: "Quattromani Propaganda",
    descricao:
    "Desenvolvedor Web, utilizando PHP/CakePHP, Laravel, Html, MySQL, Css/Sass, Javascript, React.js.<br/> E também trabalhando com análises de estatísticas para ajudar o pessoal de planejamento com estratégias para clientes.",
    periodo:{
      inicio: "Fev. 2016",
      fim: "2020"
    }
  },
  {
    titulo: "TPF - Transportadora Porto Ferreira",
    descricao:
    "Desenvolvedor Web frontend e backend, utilizando PHP/Laravel, Html, PostgreSQL , Css, Tailwind, Javascript, React.js, Next.js, React Native",
    periodo:{
      inicio: "Dez. 2022",
      fim: "Até o momento"
    }
  },
];

export const curriculoSort = curriculo.reverse();
