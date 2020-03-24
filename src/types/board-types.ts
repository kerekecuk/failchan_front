import { RouteComponentProps } from 'react-router-dom';

export interface TThread {
  id: number;
  bumpCount: number;
  createdAt: string;
  updatedAt: string;
  posts: Array<TPost>;
}

export interface TBoard {
  name: string;
  slug: string;
}

export interface TPost {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  replies: Array<TPost>;
  references: Array<TPost>;
}

interface CreateThreadMatchParams {
  boardSlug: string;
}

interface ThreadRouteMatchParams {
  threadId: string;
  boardSlug: string;
}

export interface CreateThreadProps extends RouteComponentProps<CreateThreadMatchParams> {}
export interface ThreadRouteProps extends RouteComponentProps<ThreadRouteMatchParams> {}
