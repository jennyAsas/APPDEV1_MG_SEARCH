import { Component } from '@angular/core';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBar, SearchResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  results: any[] = [];

  onResultsUpdate(filtered: any[]) {
    this.results = filtered;
  }
}
