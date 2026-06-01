export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Author {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author_id: string;
  category_id: string;
  tags: string[];
  image: string;
  video_url: string | null;
  published_at: string | null;
  read_time: number;
  featured: boolean;
  popular: boolean;
  status: "draft" | "published";
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  created_at: string;
  updated_at: string;
}

export interface ArticleWithRelations extends Article {
  author: Author;
  category: Category;
}