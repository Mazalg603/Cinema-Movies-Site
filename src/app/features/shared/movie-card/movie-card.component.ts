import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../../shared/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  public errorHandler(event) {
    event.target.src = 'assets/img/movies/not-found.jpg';
  }

}
