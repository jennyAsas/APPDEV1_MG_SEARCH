import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css',
})
export class SearchResults {
  @Input() results: any[] = [];
}
