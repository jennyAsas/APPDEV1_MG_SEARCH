import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBar implements OnInit {
  query: string = '';

  books = [
    {
      title: 'Project Gutenberg',
      description: 'A huge collection of free eBooks including many classics in the public domain.',
      link: 'https://www.gutenberg.org/',
    },
    {
      title: 'Open Library',
      description:
        'An open, editable library catalog, building towards a web page for every book ever published.',
      link: 'https://openlibrary.org/',
    },
    {
      title: 'Internet Archive',
      description: 'Millions of free books, movies, software, music, websites, and more.',
      link: 'https://archive.org/',
    },
    {
      title: 'ManyBooks',
      description: 'Thousands of free fiction and non-fiction eBooks in multiple genres.',
      link: 'https://manybooks.net/',
    },
    {
      title: 'Google Books',
      description:
        'Search the world’s most comprehensive index of full-text books, including free titles.',
      link: 'https://books.google.com/',
    },
    {
      title: 'BookBoon',
      description: 'Free textbooks for students, written by professors from top universities.',
      link: 'https://bookboon.com/',
    },
    {
      title: 'Free Computer Books',
      description:
        'Large collection of free IT and computer science books, textbooks, and lecture notes.',
      link: 'https://freecomputerbooks.com/',
    },
    {
      title: 'PDF Drive',
      description: 'A free search engine for millions of eBooks in PDF format across all genres.',
      link: 'https://www.pdfdrive.com/',
    },
    {
      title: 'Library Genesis',
      description: 'A well-known digital library with free access to academic and scholarly books.',
      link: 'https://libgen.is/',
    },
    {
      title: 'DigiLibraries',
      description:
        'Free eBooks for download in PDF, ePub, and Kindle formats, covering multiple subjects.',
      link: 'https://www.digilibraries.com/',
    },
    {
      title: 'ResearchGate',
      description: 'Access millions of research papers and academic publications for free.',
      link: 'https://www.researchgate.net/',
    },
    {
      title: 'Directory of Open Access Books (DOAB)',
      description:
        'A discovery service for academic, peer-reviewed books published under Open Access.',
      link: 'https://www.doabooks.org/',
    },
  ];
  @Output() resultsEvent = new EventEmitter<any[]>();

  ngOnInit() {
    // ✅ Show all books by default when component loads
    this.resultsEvent.emit(this.books);
  }

  updateResults() {
    const query = this.query.toLowerCase();
    const filtered = this.books.filter(
      (b) => b.title.toLowerCase().includes(query), // ✅ title-only search
    );
    this.resultsEvent.emit(filtered);
  }
}
