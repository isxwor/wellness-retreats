export type RetreatItem = {
  id: string;
  title: string;
  description: string;
  date: number;
  location: string;
  price: number;
  type: string;
  condition: string;
  image?: string;
  tag: Array<string>;
  duration: number;
};
