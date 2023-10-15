import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = '';
  searchResults: any[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // Fetch total pages on component initialization without performing a search
    this.getTotalPages(this.query);
  }

  search() {
    this.currentPage = 1; // Reset current page to 1 when performing a new search
    this.newsService.searchStories(this.query, this.currentPage, this.pageSize).subscribe(results => {
      this.searchResults = results;
      this.getTotalPages(this.query); // Update total pages after search
    });
  }

  getTotalPages(query: string) {
    this.newsService.getTotalPagesForSearch(query).subscribe(totalPages => {
      this.totalPages = totalPages;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.search();
  }
}
