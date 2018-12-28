import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

// CONTAINERS
import { MoviesComponent } from './container/movies/movies.component';

// COMPONENTS
import { MovieFormComponent } from './shared/movie-form/movie-form.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';

import { MoviesService } from '../shared/services/movies.service';
import { TitlePipe } from '../shared/pipes-filters/title.pipe';

const routes: Routes = [
    { path: '', component: MoviesComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MoviesComponent,
        MovieFormComponent,
        MoviesListComponent,
        MovieCardComponent,
        TitlePipe
    ],
    exports: [
        MoviesComponent
    ],
    providers: [
        MoviesService
    ]
})
export class FeaturesModule { }
