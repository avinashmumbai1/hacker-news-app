import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { SearchComponent } from './components//search/search.component';
import { PaginationComponent } from './components//pagination/pagination.component';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    SearchComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

