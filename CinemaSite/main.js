(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");




var routes = [
    { path: 'features', loadChildren: function () { return _features_features_module__WEBPACK_IMPORTED_MODULE_3__["FeaturesModule"]; } },
    { path: '', redirectTo: '/features', pathMatch: 'full' },
    { path: '**', redirectTo: '/features' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CinemaSite';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _core_effects_movies_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/effects/movies.effects */ "./src/app/core/effects/movies.effects.ts");










// INTERNAL MODULES


// COMPONENTS



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_core_reducers__WEBPACK_IMPORTED_MODULE_13__["reducers"], { metaReducers: _core_reducers__WEBPACK_IMPORTED_MODULE_13__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([
                    _core_effects_movies_effects__WEBPACK_IMPORTED_MODULE_14__["MoviesEffects"]
                ]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument() : [],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_11__["FeaturesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/actions/movies.actions.ts":
/*!************************************************!*\
  !*** ./src/app/core/actions/movies.actions.ts ***!
  \************************************************/
/*! exports provided: MoviesActionTypes, LoadMovies, LoadMoviesSuccess, LoadMoviesFail, AddMovie, EditMovie, DeleteMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesActionTypes", function() { return MoviesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMovies", function() { return LoadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoviesSuccess", function() { return LoadMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoviesFail", function() { return LoadMoviesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovie", function() { return EditMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovie", function() { return DeleteMovie; });
var MoviesActionTypes;
(function (MoviesActionTypes) {
    MoviesActionTypes["LoadMovies"] = "[Movie] Load Movies";
    MoviesActionTypes["LoadMovies_SUCCESS"] = "[Movie] Load Movies Success";
    MoviesActionTypes["LoadMovies_FAIL"] = "[Movie] Load Movies Fail";
    MoviesActionTypes["AddMovie"] = "[Movie] Add Movie";
    MoviesActionTypes["EditMovie"] = "[Movie] Edit Movie";
    MoviesActionTypes["DeleteMovie"] = "[Movie] Delete Movie";
})(MoviesActionTypes || (MoviesActionTypes = {}));
var LoadMovies = /** @class */ (function () {
    function LoadMovies() {
        this.type = MoviesActionTypes.LoadMovies;
    }
    return LoadMovies;
}());

var LoadMoviesSuccess = /** @class */ (function () {
    function LoadMoviesSuccess(movies) {
        this.movies = movies;
        this.type = MoviesActionTypes.LoadMovies_SUCCESS;
    }
    return LoadMoviesSuccess;
}());

var LoadMoviesFail = /** @class */ (function () {
    function LoadMoviesFail(payload) {
        this.payload = payload;
        this.type = MoviesActionTypes.LoadMovies_FAIL;
    }
    return LoadMoviesFail;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie(movie) {
        this.movie = movie;
        this.type = MoviesActionTypes.AddMovie;
    }
    return AddMovie;
}());

var EditMovie = /** @class */ (function () {
    function EditMovie(movie) {
        this.movie = movie;
        this.type = MoviesActionTypes.EditMovie;
    }
    return EditMovie;
}());

var DeleteMovie = /** @class */ (function () {
    function DeleteMovie(movieId) {
        this.movieId = movieId;
        this.type = MoviesActionTypes.DeleteMovie;
    }
    return DeleteMovie;
}());



/***/ }),

/***/ "./src/app/core/effects/movies.effects.ts":
/*!************************************************!*\
  !*** ./src/app/core/effects/movies.effects.ts ***!
  \************************************************/
/*! exports provided: MoviesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesEffects", function() { return MoviesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/movies.service */ "./src/app/shared/services/movies.service.ts");
/* harmony import */ var _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/actions/movies.actions */ "./src/app/core/actions/movies.actions.ts");








var MoviesEffects = /** @class */ (function () {
    function MoviesEffects(moviesService, actions$, store) {
        var _this = this;
        this.moviesService = moviesService;
        this.actions$ = actions$;
        this.store = store;
        this.loadMovies$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["MoviesActionTypes"].LoadMovies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
            return _this.moviesService.getMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (movies) { return new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMoviesSuccess"](movies.map(function (res) {
                if (res['imdbID'] !== undefined && res['Response'] !== 'False') {
                    var _a = res, imdbID = _a.imdbID, Title = _a.Title, Year = _a.Year, Runtime = _a.Runtime, Genre = _a.Genre, Director = _a.Director;
                    return { imdbID: imdbID, Title: Title, Year: Year, Runtime: Runtime, Genre: Genre, Director: Director };
                }
            })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMoviesFail"](err)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MoviesEffects.prototype, "loadMovies$", void 0);
    MoviesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], MoviesEffects);
    return MoviesEffects;
}());



/***/ }),

/***/ "./src/app/core/reducers/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/reducers/index.ts ***!
  \****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _movie_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.reducer */ "./src/app/core/reducers/movie.reducer.ts");


var reducers = {
    moviesState: _movie_reducer__WEBPACK_IMPORTED_MODULE_1__["moviesReducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/core/reducers/movie.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/core/reducers/movie.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, moviesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesReducer", function() { return moviesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/movies.actions */ "./src/app/core/actions/movies.actions.ts");


var initialState = {
    movies: [],
};
function moviesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesActionTypes"].LoadMovies_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movies: action.movies });
        }
        case _actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesActionTypes"].AddMovie: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movies: state.movies.concat([action.movie]) });
        }
        case _actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesActionTypes"].EditMovie: {
            var movies = state.movies;
            var newMoviesState = movies.map(function (movie) {
                if (movie.imdbID !== action.movie.imdbID) {
                    return movie;
                }
                else {
                    return action.movie;
                }
            });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movies: newMoviesState.slice() });
        }
        case _actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesActionTypes"].DeleteMovie: {
            var movies = state.movies;
            var newMoviesState = movies.filter(function (movie) { return movie.imdbID !== action.movieId; });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movies: newMoviesState.slice() });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/selectors/movies.selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/core/selectors/movies.selectors.ts ***!
  \****************************************************/
/*! exports provided: getMovieState, getMoviesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieState", function() { return getMovieState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesList", function() { return getMoviesList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getMovieState = function (state) { return state.moviesState; };
var getMoviesList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMovieState, function (state) { return state.movies; });


/***/ }),

/***/ "./src/app/features/components/movies-list/movies-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/features/components/movies-list/movies-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containers\">\n  <div class=\"lists\">\n    <div class=\"cards\" *ngFor=\"let movie of moviesList\">\n      <div class=\"movie\" *ngIf=\"movie\">\n        <app-movie-card [movie]=\"movie\">\n          <a class=\"edit\" (click)=\"editMovie(movie)\"><i class=\"fa fa-edit\"></i></a>\n          <a class=\"trash\" (click)=\"deleteMovie(movie)\"><i class=\"fa fa-trash\"></i></a>\n        </app-movie-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/components/movies-list/movies-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/features/components/movies-list/movies-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containers {\n  width: 100%;\n  height: 100%; }\n  .containers .lists {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap; }\n  .containers .lists .cards {\n      display: block;\n      width: 50%;\n      cursor: pointer; }\n  .containers .lists .cards .edit {\n        margin-right: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9DOlxcTWF6YWxfd29ya1xcSGVyb2xvIHRlc3RcXENpbmVtYVNpdGUvc3JjXFxhcHBcXGZlYXR1cmVzXFxjb21wb25lbnRzXFxtb3ZpZXMtbGlzdFxcbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQWdCZjtFQWxCRDtJQUlRLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsOEJBQTZCO0lBQzdCLGdCQUFlLEVBVWxCO0VBakJMO01BVVksZUFBYztNQUNkLFdBQVU7TUFDVixnQkFBZSxFQUlsQjtFQWhCVDtRQWNnQixxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcnN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5saXN0c3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICAgICAgLmNhcmRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAuZWRpdHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/components/movies-list/movies-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/components/movies-list/movies-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent() {
        this.editMovieHendler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteMovieHendler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MoviesListComponent.prototype.ngOnInit = function () {
    };
    MoviesListComponent.prototype.editMovie = function (movie) {
        this.editMovieHendler.emit(movie);
    };
    MoviesListComponent.prototype.deleteMovie = function (movie) {
        this.deleteMovieHendler.emit(movie);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MoviesListComponent.prototype, "moviesList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviesListComponent.prototype, "editMovieHendler", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviesListComponent.prototype, "deleteMovieHendler", void 0);
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/features/components/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/features/components/movies-list/movies-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/features/container/movies/movies.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/container/movies/movies.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containers\">\n  <div class=\"header\">\n    <p class=\"title\">Cinema Movies Site</p>\n    <a class=\"icon\" (click)=\"openDialog()\"><i class=\"fa fa-plus-circle\"></i></a>\n  </div>\n  <div *ngIf=\"moviesList\">\n    <app-movies-list [moviesList]=\"moviesList\" (editMovieHendler)=\"editMovieHendler($event)\" (deleteMovieHendler)=\"deleteMovieHendler($event)\"></app-movies-list>\n  </div>\n  <div>\n    <div class=\"dialog-continer fadeIn\" *ngIf=\"formDialogOpne || deleteDialogOpne\">\n      <div class=\"dialog\">\n        <div class=\"form\" *ngIf=\"formDialogOpne\">\n          <app-movie-form [movieObj]=\"movieObj\" [errorMessege]=\"errorMessege\" (movieHendler)=\"saveMovieHendler($event)\">\n            <h3 class=\"title\">{{isNewMovie? 'Add new movie form': 'Edit movie form'}}</h3>\n            <a id=\"close\" (click)=\"formDialogOpne = !formDialogOpne\"><i class=\"fa fa-close\"></i></a>\n            <button class=\"save btn btn-primary\" type=\"submit\">{{isNewMovie? 'Add movie': 'save movie'}}</button>\n            <button class=\"cancel btn btn-secondary\" (click)=\"formDialogOpne = !formDialogOpne\">Cancel</button>\n          </app-movie-form>\n        </div>\n        <div class=\"delete-message\" *ngIf=\"deleteDialogOpne\">\n          <h1 class=\"title\">Will delete the movie?</h1>\n          <button class=\"btn btn-primary\" (click)=\"deleteMovie()\">Ok</button>\n          <button class=\"btn btn-secondary\" (click)=\"deleteDialogOpne = !deleteDialogOpne\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/container/movies/movies.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/container/movies/movies.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containers {\n  height: 100%;\n  width: 100%; }\n  .containers .header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-content: center;\n    margin: 1rem; }\n  .containers .header .title {\n      font-family: \"Times New Roman\", Times, serif;\n      font-size: 2rem; }\n  .containers .header .icon {\n      cursor: pointer; }\n  .containers .header .icon .fa {\n        font-size: 1.5rem; }\n  .containers .dialog-continer {\n    background-color: rgba(0, 0, 0, 0.6);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9;\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.2s ease-in; }\n  .containers .dialog-continer .fadeIn {\n      opacity: 1;\n      transition: opacity 0.15s linear; }\n  .containers .dialog-continer .dialog {\n      max-width: 50%;\n      max-height: 90%;\n      position: relative;\n      background-color: white;\n      display: flex;\n      flex-direction: column;\n      align-content: center;\n      justify-content: space-between;\n      border: 1px solid black;\n      border-radius: 5px;\n      margin: 10% auto; }\n  .containers .dialog-continer .dialog .delete-message {\n        width: 40%;\n        height: 70%;\n        margin: 2rem; }\n  .containers .dialog-continer .dialog .title {\n        font-family: \"Times New Roman\", Times, serif;\n        font-size: 2rem; }\n  .containers .dialog-continer .dialog .btn {\n        margin-left: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY29udGFpbmVyL21vdmllcy9DOlxcTWF6YWxfd29ya1xcSGVyb2xvIHRlc3RcXENpbmVtYVNpdGUvc3JjXFxhcHBcXGZlYXR1cmVzXFxjb250YWluZXJcXG1vdmllc1xcbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLFlBQVcsRUFrRWQ7RUFwRUQ7SUFJUSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixzQkFBcUI7SUFDckIsYUFBWSxFQVlmO0VBcEJMO01BVVksNkNBQTRDO01BQzVDLGdCQUFlLEVBQ2xCO0VBWlQ7TUFlWSxnQkFBZSxFQUlsQjtFQW5CVDtRQWlCZ0Isa0JBQWlCLEVBQ3BCO0VBbEJiO0lBdUJRLHFDQUFvQztJQUNwQyxhQUFZO0lBQ1osY0FBYTtJQUNiLGdCQUFlO0lBQ2YsUUFBTztJQUNQLE9BQU07SUFDTixXQUFVO0lBQ1Ysb0JBQW1CO0lBQ25CLFdBQVU7SUFDVixpQ0FBZ0MsRUFtQ25DO0VBbkVMO01BbUNZLFdBQVU7TUFDVixpQ0FBZ0MsRUFDbkM7RUFyQ1Q7TUF3Q1EsZUFBYztNQUNkLGdCQUFlO01BQ2QsbUJBQWtCO01BQ25CLHdCQUF1QjtNQUN2QixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLHNCQUFxQjtNQUNyQiwrQkFBOEI7TUFDOUIsd0JBQXVCO01BQ3ZCLG1CQUFrQjtNQUNsQixpQkFBZ0IsRUFnQmpCO0VBbEVQO1FBcURVLFdBQVU7UUFDVixZQUFXO1FBQ1gsYUFBWSxFQUNiO0VBeERUO1FBMkRZLDZDQUE0QztRQUM1QyxnQkFBZSxFQUNsQjtFQTdEVDtRQWdFWSxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jb250YWluZXIvbW92aWVzL21vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC5mYXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgLmRpYWxvZy1jb250aW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgICAgICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjsgXHJcbiAgICAgIFxyXG4gICAgICAgIC5mYWRlSW57XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5kaWFsb2d7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTAlIGF1dG87XHJcblxyXG4gICAgICAgIC5kZWxldGUtbWVzc2FnZXtcclxuICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/container/movies/movies.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/container/movies/movies.component.ts ***!
  \***************************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_selectors_movies_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/selectors/movies.selectors */ "./src/app/core/selectors/movies.selectors.ts");
/* harmony import */ var _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/actions/movies.actions */ "./src/app/core/actions/movies.actions.ts");





var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(store) {
        this.store = store;
        this.isNewMovie = true;
        this.movieObj = {};
        this.formDialogOpne = false;
        this.deleteDialogOpne = false;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_4__["LoadMovies"]());
        this.subGetMoviesList = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_selectors_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMoviesList"])).subscribe(function (movies) {
            if (movies.length) {
                _this.moviesList = movies;
            }
        });
    };
    MoviesComponent.prototype.ngOnDestroy = function () {
        if (this.subGetMoviesList) {
            this.subGetMoviesList.unsubscribe();
        }
    };
    MoviesComponent.prototype.editMovieHendler = function (movie) {
        this.movieObj = Object.assign({}, movie);
        this.isNewMovie = false;
        this.formDialogOpne = true;
    };
    MoviesComponent.prototype.deleteMovieHendler = function (movie) {
        this.movieObj = Object.assign({}, movie);
        this.deleteDialogOpne = true;
    };
    MoviesComponent.prototype.deleteMovie = function () {
        this.store.dispatch(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteMovie"](this.movieObj.imdbID));
        this.deleteDialogOpne = false;
    };
    MoviesComponent.prototype.saveMovieHendler = function (movie) {
        var index = this.moviesList.find(function (item) {
            return item.Title === movie.Title;
        });
        if (!index) {
            if (this.isNewMovie) {
                this.store.dispatch(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_4__["AddMovie"](movie));
            }
            else {
                this.store.dispatch(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_4__["EditMovie"](movie));
            }
            this.formDialogOpne = false;
            this.movieObj = {};
            this.errorMessege = null;
        }
        else {
            this.errorMessege = 'Movie title is already exist';
        }
    };
    MoviesComponent.prototype.openDialog = function () {
        this.formDialogOpne = true;
        this.movieObj = {};
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/features/container/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/features/container/movies/movies.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _container_movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/movies/movies.component */ "./src/app/features/container/movies/movies.component.ts");
/* harmony import */ var _shared_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/movie-form/movie-form.component */ "./src/app/features/shared/movie-form/movie-form.component.ts");
/* harmony import */ var _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movies-list/movies-list.component */ "./src/app/features/components/movies-list/movies-list.component.ts");
/* harmony import */ var _shared_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/movie-card/movie-card.component */ "./src/app/features/shared/movie-card/movie-card.component.ts");
/* harmony import */ var _shared_services_movies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/movies.service */ "./src/app/shared/services/movies.service.ts");
/* harmony import */ var _shared_pipes_filters_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes-filters/title.pipe */ "./src/app/shared/pipes-filters/title.pipe.ts");





// CONTAINERS

// COMPONENTS





var routes = [
    { path: '', component: _container_movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"] }
];
var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _container_movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
                _shared_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_6__["MovieFormComponent"],
                _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__["MoviesListComponent"],
                _shared_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_8__["MovieCardComponent"],
                _shared_pipes_filters_title_pipe__WEBPACK_IMPORTED_MODULE_10__["TitlePipe"]
            ],
            exports: [
                _container_movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"]
            ],
            providers: [
                _shared_services_movies_service__WEBPACK_IMPORTED_MODULE_9__["MoviesService"]
            ]
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/shared/movie-card/movie-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/shared/movie-card/movie-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containers\">\n\t<div class=\"sub-container\">\n\t\t<div class=\"content\">\n\t\t\t<div class=\"top-sub_title\">\n\t\t\t\t<p class=\"sub_title\">{{movie.Title}}</p>\n\t\t\t\t<div class=\"button\">\n\t\t\t\t\t<ng-content select=\".edit\"></ng-content>\n\t\t\t\t\t<ng-content select=\".trash\"></ng-content>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h1 class=\"title\">\n\t\t\t\t{{movie.Director}}\n\t\t\t</h1>\n\t\t\t<p class=\"text\">\n\t\t\t\t{{movie.Genre}}\n\t\t\t</p>\n\t\t</div>\n\t\t<a href=\"#0\" class=\"link\">\n\t\t\t{{movie.Year}} , {{movie.Runtime}}\n\t\t</a>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/features/shared/movie-card/movie-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/shared/movie-card/movie-card.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containers {\n  height: 100%;\n  width: 100%; }\n  .containers .sub-container {\n    overflow: hidden;\n    border-radius: 8px;\n    margin: 1rem;\n    position: relative;\n    background-color: #fff;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);\n    transition: all 0.25s ease-in;\n    border-bottom: 5px solid transparent; }\n  .containers .sub-container:hover {\n      -webkit-transform: translateY(-5px);\n              transform: translateY(-5px);\n      border: none;\n      border-bottom: 5px solid #f7bb43; }\n  .containers .sub-container .content {\n      padding: 1rem;\n      padding-bottom: 0; }\n  .containers .sub-container .content .top-sub_title {\n        margin-bottom: 1rem;\n        font-size: 1.25rem;\n        font-weight: 500;\n        color: rgba(0, 0, 0, 0.3);\n        letter-spacing: 2px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between; }\n  .containers .sub-container .content .title {\n        line-height: 1.25;\n        font-family: 'Lora', serif;\n        font-size: 1.20rem;\n        margin-top: 0;\n        margin-bottom: 1rem; }\n  .containers .sub-container .content .text {\n        margin-bottom: 1rem; }\n  .containers .sub-container .link {\n      display: inline-blick;\n      font-weight: 500;\n      letter-spacing: 2px;\n      margin-left: 2rem;\n      margin-bottom: 1rem;\n      text-decoration: none;\n      outline: none;\n      color: #d8a135;\n      transition: all 0.25s ease-in;\n      text-align: center; }\n  .containers .sub-container .link:hover, .containers .sub-container .link:focus, .containers .sub-container .link:active {\n        color: #a37314; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL21vdmllLWNhcmQvQzpcXE1hemFsX3dvcmtcXEhlcm9sbyB0ZXN0XFxDaW5lbWFTaXRlL3NyY1xcYXBwXFxmZWF0dXJlc1xcc2hhcmVkXFxtb3ZpZS1jYXJkXFxtb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLFlBQVcsRUFpRVo7RUFuRUQ7SUFNSSxpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsdUJBQXNCO0lBQ3RCLDRDQUF3QztJQUN4Qyw4QkFBNkI7SUFDN0IscUNBQW9DLEVBcURyQztFQWxFSDtNQWdCTSxvQ0FBMkI7Y0FBM0IsNEJBQTJCO01BQzNCLGFBQVk7TUFDWixpQ0FBZ0MsRUFDakM7RUFuQkw7TUFxQk0sY0FBYTtNQUNiLGtCQUFpQixFQXdCbEI7RUE5Q0w7UUF5QlEsb0JBQW1CO1FBQ25CLG1CQUFrQjtRQUNsQixpQkFBZ0I7UUFDaEIsMEJBQXlCO1FBQ3pCLG9CQUFtQjtRQUNuQixjQUFhO1FBQ2Isb0JBQW1CO1FBQ25CLCtCQUE4QixFQUMvQjtFQWpDUDtRQW9DUSxrQkFBaUI7UUFDakIsMkJBQTBCO1FBQzFCLG1CQUFrQjtRQUNsQixjQUFhO1FBQ2Isb0JBQW1CLEVBQ3BCO0VBekNQO1FBNENRLG9CQUFtQixFQUNwQjtFQTdDUDtNQWlETSxzQkFBcUI7TUFDckIsaUJBQWdCO01BQ2hCLG9CQUFtQjtNQUNuQixrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLHNCQUFxQjtNQUNyQixjQUFhO01BQ2IsZUFBYztNQUNkLDhCQUE2QjtNQUM3QixtQkFBa0IsRUFNbkI7RUFoRUw7UUE4RFEsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL21vdmllLWNhcmQvbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJze1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAuc3ViLWNvbnRhaW5lcntcclxuICAgIC8vIHdpZHRoOiAyMi41cmVtO1xyXG4gICAgLy8gaGVpZ2h0OiAxMnJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmN2JiNDM7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICAudG9wLXN1Yl90aXRsZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGV7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjIwcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5re1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxpY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjZDhhMTM1O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjsgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjYTM3MzE0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/features/shared/movie-card/movie-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/shared/movie-card/movie-card.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent() {
    }
    MovieCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieCardComponent.prototype, "movie", void 0);
    MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-card',
            template: __webpack_require__(/*! ./movie-card.component.html */ "./src/app/features/shared/movie-card/movie-card.component.html"),
            styles: [__webpack_require__(/*! ./movie-card.component.scss */ "./src/app/features/shared/movie-card/movie-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieCardComponent);
    return MovieCardComponent;
}());



/***/ }),

/***/ "./src/app/features/shared/movie-form/movie-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/shared/movie-form/movie-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <ng-content select=\"h3\"></ng-content>\n    <ng-content id=\"close\" select=\"a\"></ng-content>\n  </div>\n  <div class=\"form-container\">\n    <form class=\"form\" (ngSubmit)=\"onSave()\" #movieForm=\"ngForm\">\n      <div class=\"input-box form-group\">\n        <label class=\"label\" for=\"title\">Title</label>\n        <input class=\"input form-control\" id=\"title\" name=\"title\" type=\"text\" required placeholder=\"Movie title\"\n          [ngModel]=\"movieObj.Title | title\" (ngModelChange)=\"movieObj.Title=$event\"/>\n      </div>\n      <div class=\"input-box form-group\">\n        <label class=\"label\" for=\"director\">Director</label>\n        <input class=\"input form-control\" id=\"director\" name=\"director\" type=\"text\" required placeholder=\"Movie director\"\n          [(ngModel)]=\"movieObj.Director\" />\n      </div>\n      <div class=\"input-box form-group\">\n        <label class=\"label\" for=\"genre\">Genre</label>\n        <input class=\"input form-control\" id=\"genre\" name=\"genre\" type=\"text\" placeholder=\"Movie genre\" [(ngModel)]=\"movieObj.Genre\" />\n      </div>\n      <div class=\"input-box form-group\">\n        <label class=\"label\" for=\"year\">Year</label>\n        <input class=\"input form-control\" id=\"year\" name=\"year\" type=\"number\" min=\"1900\" max=\"2099\" required\n          [(ngModel)]=\"movieObj.Year\" />\n      </div>\n      <div class=\"input-box form-group\">\n        <label class=\"label\" for=\"runtime\">Runtime</label>\n        <input class=\"input form-control\" id=\"runtime\" name=\"runtime\" type=\"text\" required [(ngModel)]=\"movieObj.Runtime\" />\n      </div>\n      <div class=\"button\">\n        <ng-content select=\".save\"></ng-content>\n        <ng-content select=\".cancel\"></ng-content>\n      </div>\n      <div *ngIf=\"errorMessege\">\n        <p>{{errorMessege}}</p>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/shared/movie-form/movie-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/shared/movie-form/movie-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%; }\n  .container .header {\n    margin: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-content: center; }\n  .container .form-container {\n    margin: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL21vdmllLWZvcm0vQzpcXE1hemFsX3dvcmtcXEhlcm9sbyB0ZXN0XFxDaW5lbWFTaXRlL3NyY1xcYXBwXFxmZWF0dXJlc1xcc2hhcmVkXFxtb3ZpZS1mb3JtXFxtb3ZpZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFXZjtFQWJEO0lBSVEsYUFBWTtJQUNaLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLHNCQUFxQixFQUN4QjtFQVRMO0lBV1EsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL21vdmllLWZvcm0vbW92aWUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/shared/movie-form/movie-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/shared/movie-form/movie-form.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieFormComponent = /** @class */ (function () {
    function MovieFormComponent() {
        this.movieObj = {};
        this.movieHendler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MovieFormComponent.prototype.ngOnInit = function () {
    };
    MovieFormComponent.prototype.onSave = function () {
        if (this.movieObj) {
            this.movieHendler.emit(this.movieObj);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieFormComponent.prototype, "movieObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MovieFormComponent.prototype, "errorMessege", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieFormComponent.prototype, "movieHendler", void 0);
    MovieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-form',
            template: __webpack_require__(/*! ./movie-form.component.html */ "./src/app/features/shared/movie-form/movie-form.component.html"),
            styles: [__webpack_require__(/*! ./movie-form.component.scss */ "./src/app/features/shared/movie-form/movie-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieFormComponent);
    return MovieFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/titles.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/titles.ts ***!
  \*****************************************/
/*! exports provided: titles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
var titles = [
    'Apocalypto',
    'I Theia Apo to Chicago',
    'O anthropos pou gyrise apo ti zesti',
    'Apo pou pane gia ti havouza',
    'O dimos apo ta Trikala',
    'O anthropos pou gyrise apo ta piata!',
    'Gefsi apo... Ellada!',
    'Granita apo melani',
    'Diestrammenoi apo tin genna tous',
    'O Kotsos exo apo to N.A.T.O.',
    'O anthropos apo to "Chernobyl"',
    'The World According to Ion B.',
    'B-Movie: The Shooting of "Farmhouse Massacre"',
    'A Day in the Death of Donny B.',
    'The Nina B. Affair',
    'Girls of the "B" Movies',
    'The Cruise of the Jasper B',
    'Brown Bag Diaries: Ridin the Blinds in B Minor',
    'Brace for Impact: The Chesley B. Sullenberger Story',
    'Attack of the Killer B-Movies'
];
// export type TITELS = typeof titles;


/***/ }),

/***/ "./src/app/shared/pipes-filters/title.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes-filters/title.pipe.ts ***!
  \****************************************************/
/*! exports provided: TitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePipe", function() { return TitlePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitlePipe = /** @class */ (function () {
    function TitlePipe() {
    }
    TitlePipe.prototype.transform = function (value) {
        if (value) {
            value = value.replace(/[^A-Za-z]/g, ' ');
            value = value.toLowerCase()
                .split(' ')
                .map(function (s) { return s.charAt(0).toUpperCase() + s.substring(1); })
                .join(' ');
        }
        return value;
    };
    TitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'title'
        })
    ], TitlePipe);
    return TitlePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/movies.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/movies.service.ts ***!
  \***************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_titles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/titles */ "./src/app/shared/models/titles.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MoviesService = /** @class */ (function () {
    // ecc6ab7047137317fa40a2777be6d5afba72d71a
    function MoviesService(store, http) {
        this.store = store;
        this.http = http;
        this.baseUrl = 'http://www.omdbapi.com/?apikey=ea22e40a&type=movie&';
    }
    MoviesService.prototype.getMovies = function () {
        var _this = this;
        var movieArray = [];
        _models_titles__WEBPACK_IMPORTED_MODULE_3__["titles"].forEach(function (title) {
            var movie = _this.http.get(_this.baseUrl + 't=' + title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.json(); }));
            movieArray = movieArray.concat([movie]);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(movieArray);
    };
    MoviesService.prototype.getMoviesList = function () {
        return this.getMovies().subscribe(function (data) {
            return data.map(function (res) {
                if (res['imdbID'] !== undefined && res['Response'] !== 'False') {
                    var _a = res, imdbID = _a.imdbID, Title = _a.Title, Year = _a.Year, Runtime = _a.Runtime, Genre = _a.Genre, Director = _a.Director;
                    return { imdbID: imdbID, Title: Title, Year: Year, Runtime: Runtime, Genre: Genre, Director: Director };
                }
            });
        });
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Mazal_work\Herolo test\CinemaSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map