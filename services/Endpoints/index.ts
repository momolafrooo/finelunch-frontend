import RoleApi from "./role";

export interface Paginated<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}

export interface PaginationQuery {
  limit: number;
  page: number;
  search: string;
  sort: string;
}

export { RoleApi };
