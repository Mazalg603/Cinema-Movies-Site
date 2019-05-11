(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/features.module": [
		"./src/app/features/features.module.ts",
		"features-features-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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



var routes = [
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _core_effects_movies_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/effects/movies.effects */ "./src/app/core/effects/movies.effects.ts");










// INTERNAL MODULES

// COMPONENTS



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_core_reducers__WEBPACK_IMPORTED_MODULE_12__["reducers"], { metaReducers: _core_reducers__WEBPACK_IMPORTED_MODULE_12__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([
                    _core_effects_movies_effects__WEBPACK_IMPORTED_MODULE_13__["MoviesEffects"]
                ]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument() : [],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
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
                    var _a = res, imdbID = _a.imdbID, Title = _a.Title, Year = _a.Year, Runtime = _a.Runtime, Genre = _a.Genre, Director = _a.Director, Plot = _a.Plot, Poster = _a.Poster;
                    // Genre = Genre.split(',');
                    return { imdbID: imdbID, Title: Title, Year: Year, Runtime: Runtime, Genre: Genre, Director: Director, Plot: Plot, Poster: Poster };
                }
            })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMoviesFail"](err)); }));
        }));
        this.loadMoviesFromBackupDB$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["MoviesActionTypes"].LoadMovies_FAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
            return _this.moviesService.getMoviesDB().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (movies) { return new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMoviesSuccess"](movies.map(function (res) {
                if (res['imdbID'] !== undefined && res['Response'] !== 'False') {
                    var _a = res, imdbID = _a.imdbID, Title = _a.Title, Year = _a.Year, Runtime = _a.Runtime, Genre = _a.Genre, Director = _a.Director, Plot = _a.Plot, Poster = _a.Poster;
                    // Genre = Genre.split(',');
                    return { imdbID: imdbID, Title: Title, Year: Year, Runtime: Runtime, Genre: Genre, Director: Director, Plot: Plot, Poster: Poster };
                }
            })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _core_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMoviesFail"](err)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MoviesEffects.prototype, "loadMovies$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MoviesEffects.prototype, "loadMoviesFromBackupDB$", void 0);
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
    'A Sea Cave Near Lisbon',
    'A Woman\'s Way',
    'Aladdin and the Wonderful Lamp',
    'Alice in Wonderland',
    'All I See Is You',
    'Ana mon amour',
    'Apocalypto',
    'Aquaman',
    'Awasarn Lok Suay',
    'Annihilation',
    'Azorian: The Raising of the K-129',
    'B-Movie: The Shooting of "Farmhouse Massacre"',
    'Ballet libella',
    'Ben Hur',
    'Bin lim mai ching',
    'Bird Box',
    'Black Mirror: Bandersnatch',
    'Black',
    'Brace for Impact: The Chesley B. Sullenberger Story',
    'Brown Bag Diaries: Ridin the Blinds in B Minor',
    'Bumblebee',
    'Casey at the Bat',
    'Chow lok yuen',
    'Chuye Dile Mon',
    'Cinderella',
    'Captain Marvel',
    'Criminal Minds',
    'Danse fleur de lotus',
    'Doctor Who',
    'Detective K: Secret of the Living Dead',
    'Echo Jew Gong Lok',
    'Ella Lola, a la Trilby',
    'Escape Room',
    'Gefsi apo... Ellada!',
    'Glass',
    'Godard Mon Amour',
    'Grandma\'s Reading Glass',
    'Green Book',
    'Hamlet',
    'Hellboy',
    'Halloween',
    'Hereditary',
    'Hated: GG Allin & the Murder Junkies',
    'How to Train Your Dragon: The Hidden World',
    'I Theia Apo to Chicago',
    'K-19: The Widowmaker',
    'K-20: The Fiend with Twenty Faces',
    'K-On! The Movie',
    'L\'aveugle',
    'Learning to Drive',
    'No Escape Room',
    'Ma Vie en Rose',
    'Macbeth',
    'Mon Mon Mon Monsters',
    'Mulholland Drive',
    'Now You See Me',
    'Mary Queen of Scots',
    'Mowgli',
    'Mission: Impossible - Fallout',
    'O anthropos pou gyrise apo ta piata!',
    'O anthropos pou gyrise apo ti zesti',
    'Robbery Under Arms',
    'Roma',
    'Secreto de confesión',
    'See No Evil',
    'Sex Drive',
    'Split',
    'Playdate',
    'Stan & Ollie',
    'The Call of the Wild',
    'The Enchanted Drawing',
    'The Exorcism of Emily Rose',
    'The Favourite',
    'The Gospel According to Philip K. Dick',
    'The Great K & A Train Robbery',
    'The House That Jack Built',
    'The Kids Are All Right',
    'The Legacy',
    'Twisted',
    'Web of Lies',
    'The Merchant of Venice',
    'The Mule',
    'The Pioneers',
    'The Reckoning',
    'The Snowman',
    'Truth or Dare',
    'The World According to Ion B.',
    'Titans',
    'Transformations',
    'Uncle Tom\'s Cabin',
    'Upside',
    'Venom',
    'Vice',
    'Výstavní párkar a lepic plakátù',
    'You',
];


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
    function MoviesService(store, http) {
        this.store = store;
        this.http = http;
        this.baseUrl = 'https://www.omdbapi.com/?apikey=ea22e40a&type=movie&';
    }
    MoviesService.prototype.getMovies = function () {
        var _this = this;
        var movieArray = [];
        _models_titles__WEBPACK_IMPORTED_MODULE_3__["titles"].forEach(function (title) {
            var movie = _this.http
                .get(_this.baseUrl + "t=" + title)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.json(); }));
            movieArray = movieArray.concat([movie]);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(movieArray);
    };
    MoviesService.prototype.getMoviesDB = function () {
        return this.http.get('./assets/db/movies_db.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.json(); }));
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

module.exports = __webpack_require__(/*! C:\Mazal\Projects\CinemaSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map