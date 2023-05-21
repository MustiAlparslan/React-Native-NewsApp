export type DATA = {
  urlToImage: string;
  title: string;
  publishedAt: string;
  description: string;
  content: string;
  author: string;
  url: string;
};

export enum CategoryType {
  BITCOIN = "bitcoin",
  ECONOMY = "economy",
  WORD = "word",
  SPORTS = "sports",
  TECHNOLOGY = "technology",
  SCIENCE = "science",
  HEALTHY = "healthy",
  POLITICS = "politics",
  MEDIA = "media",
  MAGAZINE = "magazine",
  EDUCATION = "education",
  CAR = "car",
}
export const categories: CategoryType[] = [
  CategoryType.BITCOIN,
  CategoryType.ECONOMY,
  CategoryType.WORD,
  CategoryType.SPORTS,
  CategoryType.TECHNOLOGY,
  CategoryType.SCIENCE,
  CategoryType.HEALTHY,
  CategoryType.POLITICS,
  CategoryType.MEDIA,
  CategoryType.MAGAZINE,
  CategoryType.EDUCATION,
  CategoryType.CAR,
];
