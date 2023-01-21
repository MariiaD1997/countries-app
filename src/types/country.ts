export interface Country {
  flags: { png: string; svg: string };
  name: { official: string };
  population: number;
  region: string;
  languages: { [key: string]: string };
  capital: string[];
  isFav: boolean;
}
