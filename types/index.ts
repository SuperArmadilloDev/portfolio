export {};

declare global {
  interface Links {
    ref: string;
    name: string;
  }

  interface CompButtons {
    text: string;
    icon?: string;
    hasIcon: boolean;
  }

  interface CompImage {
    url: string;
    alt: string;
  }

  interface CardContent {
    title: string;
    image?: string;
    content: string;
    hasImage: boolean;
    hasButton: boolean;
    buttons?: CompButtons[];
  }
}
