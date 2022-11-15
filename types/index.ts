export {};

declare global {
  interface Links {
    ref: string;
    name: string;
  }

  interface CompButtons {
    text: string;
    icon?: string;
  }

  interface CompImage {
    url: string;
    alt: string;
  }

  interface ExpContent {
    company: string;
    date: string;
    place: string;
    tech: string;
    description: string[];
  }
  interface CardContent {
    title: string;
    content: ExpContent;
    images?: CompImage[];
    buttons?: CompButtons[];
  }
}
