import { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  brandName: "GRID MARKETING",
  authorName: "Gabriel Garcia",
  authorAge: 29,
  yearsExperience: 3,
  bioHeadline: "Edição que prende. Design que posiciona. Estratégia que transforma atenção em valor.",
  socials: {
    instagram: {
      handle: "@gridmarketingoficial",
      url: "https://www.instagram.com/gridmarketingoficial/?hl=pt-br",
    },
    linkedinUrl: "https://linkedin.com",
  },
  hero: {
    badge: "PORTFÓLIO CRIATIVO",
    subtitle: "Editor de vídeo, designer gráfico e estrategista com 3 anos de experiência.",
    servicesList: [
      "EDIÇÃO DE VÍDEOS",
      "CRIAÇÃO DE SITES",
      "CRIAÇÃO DE IMAGENS",
      "GROWTH MARKETING",
    ],
    tagline: "ROLE PARA CONHECER O TRABALHO ↓",
  },
  about: {
    badge: "SOBRE MIM",
    title: "EU NÃO EDITO APENAS CENAS. EU CONSTRUO PERCEPÇÃO.",
    paragraphs: {
      attention:
        "eed onde tudo disputa os primeiros segundos de atenção, uma imagem bonita não basta. O conteúdo precisa criar interesse, conduzir o olhar e deixar uma impressão.",
      interest:
        "Meu nome é Gabriel Garcia, tenho 29 anos e trabalho há 3 anos com edição de vídeos e criação visual. Sou formado em Design Gráfico e Marketing Digital, atuo na Wow Digital e também construí experiência na Zenit Marketing, na Graphic Lab e em diferentes projetos como freelancer.",
      differentiator:
        "eu processo combina direção de arte, narrativa, ritmo, sound design e visão de marketing. Trabalho com Adobe Photoshop, Adobe Premiere Pro, DaVinci Resolve, Adobe Illustrator, CapCut e Canva, além de ferramentas de IA e creative coding como Google Flow, Higgsfield, ChatGPT, Gemini, Claude, Google Antigravity e Remotion.",

      desire:
        "Essa combinação me permite criar vídeos, imagens e experiências digitais com identidade, acabamento cinematográfico e uma percepção visual premium. Não se trata de adicionar efeitos por adicionar, mas de fazer cada escolha comunicar melhor, valorizar a mensagem e elevar a forma como o público percebe a marca.",
      proof:
        "Além da formação acadêmica, continuo ampliando meu repertório por meio de cursos, certificações e novos processos de criação. Os certificados e detalhes da minha trajetória profissional podem ser conferidos no LinkedIn.",
      closing:
        "Explore os projetos abaixo e veja como uma boa ideia ganha força quando edição, design e estratégia trabalham juntos.",
    },
  },
  services: [
    {
      id: "video-editing",
      number: "01",
      title: "EDIÇÃO DE VÍDEOS",
      description:
        "Narrativa, ritmo, cortes, tratamento visual, sound design, motion e acabamento cinematográfico para conteúdos que precisam conquistar e manter atenção.",
    },
    {
      id: "website-creation",
      number: "02",
      title: "CRIAÇÃO DE SITES",
      description:
        "Experiências digitais autorais, responsivas e rápidas, construídas para apresentar a marca com clareza, personalidade e direção estratégica.",
    },
    {
      id: "image-creation",
      number: "03",
      title: "CRIAÇÃO DE IMAGENS",
      description:
        "Key visuals, composições, campanhas, peças para redes sociais e imagens com direção de arte, integrando design tradicional e inteligência artificial.",
    },
    {
      id: "growth-marketing",
      number: "04",
      title: "GROWTH MARKETING",
      description:
        "Criativos e estruturas digitais pensados para testar mensagens, compreender respostas do público e transformar aprendizado em decisões melhores.",
    },
  ],
  tools: {
    editing: ["Adobe Premiere Pro", "DaVinci Resolve", "CapCut"],
    design: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    creativeCodingAndAI: [
      "Google Flow",
      "Higgsfield",
      "ChatGPT",
      "Gemini",
      "Claude",
      "Google Antigravity",
      "Remotion",
    ],
  },
  experience: [
    {
      company: "WOW DIGITAL",
      isCurrent: true,
      description:
        "Atuação atual em ambiente de agência, conectando edição, criação de conteúdo, design e marketing para diferentes projetos e segmentos.",
    },
    {
      company: "ZENIT MARKETING",
      description:
        "Experiência em rotina de agência, criação visual, produção de conteúdo e adaptação de entregas para diferentes objetivos de comunicação.",
    },
    {
      company: "GRAPHIC LAB",
      description:
        "Experiência em design e produção visual, ampliando o repertório técnico e a capacidade de transformar referências em soluções aplicáveis.",
    },
    {
      company: "PROJETOS FREELANCER",
      description:
        "Trabalhos para diferentes clientes e contextos, desenvolvendo autonomia, relacionamento, interpretação de briefing e capacidade de adaptação.",
    },
  ],
  education: [
    "Design Gráfico",
    "Marketing Digital",
    "Cursos e certificações complementares",
    "Certificados disponíveis no LinkedIn",
  ],
  processSteps: [
    {
      number: "01",
      title: "ENTENDER",
      description:
        "Objetivo, público, plataforma, mensagem e contexto da marca.",
    },
    {
      number: "02",
      title: "DIRECIONAR",
      description:
        "Conceito, referências, estrutura visual, narrativa e linguagem.",
    },
    {
      number: "03",
      title: "CRIAR",
      description:
        "Edição, design, imagem, som, motion, inteligência artificial e acabamento.",
    },
    {
      number: "04",
      title: "REFINAR",
      description:
        "Revisão, consistência, ajustes finais e preparação da entrega.",
    },
  ],
  contact: {
    title:
      "SEU PRÓXIMO VÍDEO PODE SER APENAS MAIS UM CONTEÚDO — OU A PEÇA QUE MUDA A PERCEPÇÃO DA SUA MARCA.",
    subtitle:
      "Quando estratégia, design e edição trabalham juntos, o resultado não chama atenção apenas por alguns segundos. Ele constrói presença, identidade e valor.",
    cta: "VAMOS CRIAR ESSA DIFERENÇA.",
  },
};
