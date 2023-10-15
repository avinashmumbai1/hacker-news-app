// news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../api-endpoints'; // Import the API endpoints
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNewestStories(): Observable<Story[]> {
    return this.http.get<Story[]>(API_ENDPOINTS.NEWEST);
  }

  searchStories(query: string, page: number, pageSize: number): Observable<Story[]> {
    const endpoint = API_ENDPOINTS.SEARCH(query, page, pageSize);
    return this.http.get<Story[]>(endpoint);
  }

  getTotalPagesForSearch(query: string): Observable<number> {
    const endpoint = API_ENDPOINTS.GET_TOTAL_COUNT_SEARCH(query);
    return this.http.get<number>(endpoint);
  }

  getPagedStories(page: number, pageSize: number): Observable<Story[]> {
    const endpoint = API_ENDPOINTS.PAGED(page, pageSize);
    return this.http.get<Story[]>(endpoint);
  }

  getTotalPages(query?: string): Observable<number> {
    let endpoint = API_ENDPOINTS.GET_TOTAL_COUNT;
    if (query) {
      endpoint += `?query=${query}`;
    }
    return this.http.get<number>(endpoint);
  }

  getInitialStories(): Observable<Story[]> {
    const endpoint = API_ENDPOINTS.PAGED(1, 10); // This constructs the correct URL for initial stories
    return this.http.get<Story[]>(endpoint);
  }
}
