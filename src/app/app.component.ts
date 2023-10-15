import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { Story } from './models/story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchQuery: string = '';
  news: Story[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1; 

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadInitialStories();
    this.loadNewsData();
  }

  loadNewsData(): void {
    if (this.searchQuery.trim() !== '') {
      this.newsService.searchStories(this.searchQuery, this.currentPage, this.pageSize)
        .subscribe(response => {
          this.news = response;
          this.newsService.getTotalPagesForSearch(this.searchQuery).subscribe(totalPages => {
            this.totalPages = totalPages;
          });
        });
    } else {
      this.newsService.getPagedStories(this.currentPage, this.pageSize)
        .subscribe(response => {
          this.news = response;
          this.newsService.getTotalPages().subscribe(totalPages => {
            this.totalPages = totalPages;
          });
        });
    }
  }

  loadInitialStories(): void {
    this.newsService.getInitialStories().subscribe(
      stories => {
        this.news = stories;
        this.newsService.getTotalPages().subscribe(totalPages => {
          this.totalPages = totalPages;
        });
      },
      error => {
        console.error('Error fetching initial stories:', error);
      }
    );
  }

  onSearch(): void {
    this.loadNewsData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadNewsData();
  }
}
