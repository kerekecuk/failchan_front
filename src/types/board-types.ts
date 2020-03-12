export interface Thread {
  id: number;
  bumpCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Board {
  name: string;
  slug: string;
}
