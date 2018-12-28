import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './../../../shared/models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() moviesList: Movie[];
  @Output() editMovieHendler = new EventEmitter<Movie>();
  @Output() deleteMovieHendler = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  public editMovie(movie) {
    this.editMovieHendler.emit(movie);
  }

  public deleteMovie(movie) {
    this.deleteMovieHendler.emit(movie);
  }
}
