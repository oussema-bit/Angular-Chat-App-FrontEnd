export interface Post {
  post_id: number;
  createdBy: string;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: Date;
  comments: Comment[];
}
