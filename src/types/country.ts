export interface Country {
  flags: { png: string; svg: string };
  name: string;
  population: number;
  region: string;
  languages: { [key: string]: string };
  capital: string[];
}
