
export interface Invitation {
  id: string;
  name: string;
  description: string;
  learningFocus: string[];
  materialsNeeded: string[];
  safetyNotes?: string;
}

export interface ContentItem {
  type: 'paragraph' | 'quote' | 'highlight' | 'list';
  text?: string; // For paragraph, quote, highlight
  items?: string[]; // For list
}

export interface Chapter {
  id: string;
  title: string;
  content: ContentItem[];
  invitations?: Invitation[];
}

export interface Part {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface Book {
  title: string;
  subtitle: string;
  introduction: ContentItem[];
  parts: Part[];
  keyElements: {
    title: string;
    elements: string[];
  };
  finalWord: {
    title: string;
    paragraphs: string[];
  };
}
