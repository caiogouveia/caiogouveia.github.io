import React from 'react';
import { Intro } from "@/app/components/intro";
import Cv from "@/app/components/cv";
import { MoreStories } from "@/app/components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  // const morePosts = getAllPosts();
  return (
    <main
      style={{




        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0 20px",
      }}
    >
      <CartaApresentacao />
      {/* <Intro /> */}
      {/* <Cv /> */}
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </main>
  );
}

function CartaApresentacao() {
  return (
    <div className="fuck-tailwind">
      <Intro />
      <div>
        Sou desenvolvedor com mais de 14 anos de experiência, <br/>
        atualmente na TPF - <ExLink link={'https://tpf.com.br'}>Transportadora Porto Ferreira</ExLink>. Tenho expertise em, <strong>MVC</strong> com <strong>Laravel</strong> e <strong>Ruby on Rails</strong>, no front
        <strong>React.js/React Native</strong>, jQuery(in old days), e um pouco de Flutter,
        design de interface do usuário (Figma) e também um pouco de nuvem AWS e Azure.
        <br />
        <br />
        Já atuei como freelancer e em empresas como <ExLink link={'https://www.quattromani.com.br'}>Quattromani Propaganda</ExLink>,
        {' '}<ExLink link={'https://www.intercolorbrasil.com.br'}>Inter Color Distribuidora</ExLink>
        e <ExLink link={'https://www.fw2propaganda.com.br'}>FW2 Propaganda</ExLink>, desenvolvendo {' '}
        <strong>Websites, APIs</strong> e <strong>Aplicações Web</strong> e <strong>Aplicações móveis</strong>.
        <br/>


        Minha formação em <strong>Sistemas de Informação</strong> e <strong>pós-graduação</strong> em <strong> Marketing Digital</strong>{' '}
        me proporcionam uma visão ampla e aprofundada da tecnologia e do desenvolvimento digital.
        <br />
        <br />
        Gostaria de conversar sobre como posso contribuir para a sua equipe?
        Entre em contato!
        <br />
        <br />
        Atenciosamente,Caio Gouveia
        <div style={{ display: "flex", paddingTop: "10px" }}>
          <ExLink link="https://www.linkedin.com/in/caiogouveia/">
            LinkedIn
          </ExLink>
          -
          <ExLink local link="/curriculo">
            Currículo
          </ExLink>
          -
            Portifólio ?? (em breve)
        </div>
      </div>
    </div>
  );
}

export interface ExLinkProps
{
  children: React.ReactNode
  local?: boolean
  link: string
}
function ExLink(props: ExLinkProps){
  const target = props.local ? "": "_blank"
  return(
    <span style={{
      // border: "1px solid red",
      display: "inline-flex",
      flexDirection: "row",
      width:"auto",
      height: "23px",
      paddingRight: "4px",
      paddingLeft: "4px",
    }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        >
          <a href={props.link} target={target}>
            {props.children}
          </a>
          {!props.local && (
          <a href={props.link} style={{height: "20px",overflow: "hidden"}} target={target}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <g id="Interface / External_Link">
              <path id="Vector"
              d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"/>
            </g>
          </svg>
          </a>
          )}
        </div>
      </span>
  );
}
