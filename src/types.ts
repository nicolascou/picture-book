export interface Photo {
  id: string;
  created_at: string;
  width: number;
  height: number;
  likes: number;
  description: string;
  urls: {
    full: string;
    regular: string;
    thumb: string;
  };
}

export interface UnsplashPhoto {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: any;
  current_user_collections: any[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  }
}