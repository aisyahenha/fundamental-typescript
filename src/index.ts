interface Paging{
  page: number;
  rowsPerPage: number;
  totalRows: number;
  totalPage: number;
}
interface ResponEntity<T> {
  code: number;
  message: string;
  data: T;
}
class SingleResponse<T> implements ResponEntity<T> {
  code: number;
  message: string;
  data: T;
}

class PagedResponse<T> implements ResponEntity<T> {
  code: number;
  message: string;
  data: T;
  paging: Paging;
}
