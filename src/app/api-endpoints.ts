export const API_BASE_URL = 'https://localhost:7022/api/News';

export const API_ENDPOINTS = {
  NEWEST: `${API_BASE_URL}/newest`,
  SEARCH: (query: string, page: number, pageSize: number) => `${API_BASE_URL}/search?query=${query}&page=${page}&pageSize=${pageSize}`,
  PAGED: (page: number, pageSize: number) => `${API_BASE_URL}/paged?page=${page}&pageSize=${pageSize}`,
  GET_STORY_BY_ID: (id: number) => `${API_BASE_URL}/${id}`,
  GET_TOTAL_COUNT: `${API_BASE_URL}/totalcount`,
  GET_TOTAL_COUNT_SEARCH: (query: string) => `${API_BASE_URL}/search/totalcount?query=${query}`
};
