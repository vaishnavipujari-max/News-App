
export interface NewsArticle {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  views: number;
}

export interface NewsResponse {
  posts: NewsArticle[];
  total: number;
  skip: number;
  limit: number;
}
