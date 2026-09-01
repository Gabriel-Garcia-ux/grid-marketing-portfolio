export type PortfolioItem = {
  id: string;
  title: string;
  client?: string;
  category?: string;
  year?: string;
  poster: string;
  video?: string;
  captions?: string;
  alt: string;
  thumbnailAspectRatio?: string;
  videoAspectRatio?: string;
};

export type SiteContent = {
  brandName: string;
  authorName: string;
  authorAge: number;
  yearsExperience: number;
  bioHeadline: string;
  socials: {
    instagram: {
      handle: string;
      url: string;
    };
    linkedinUrl: string; // "REPLACE_WITH_LINKEDIN_URL"
  };
  hero: {
    badge: string;
    subtitle: string;
    servicesList: string[];
    tagline: string;
  };
  about: {
    badge: string;
    title: string;
    paragraphs: {
      attention: string;
      interest: string;
      differentiator: string;
      desire: string;
      proof: string;
      closing: string;
    };
  };
  services: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
  }>;
  tools: {
    editing: string[];
    design: string[];
    creativeCodingAndAI: string[];
  };
  experience: Array<{
    company: string;
    isCurrent?: boolean;
    description: string;
  }>;
  education: string[];
  processSteps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
};
