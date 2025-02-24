import { Category } from './Category';

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  category: Category;
  description?: string;
  hls_path: string;
  views: number;
  likes: number;
}