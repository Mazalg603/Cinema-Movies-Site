import { Movie } from './../../../shared/models/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Input() movieObj: Movie = <Movie>{};
  @Input() errorMesseges: string;

  @Output() movieHendler = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    if (this.movieObj) {
      this.movieHendler.emit(this.movieObj);
    }
  }

}
