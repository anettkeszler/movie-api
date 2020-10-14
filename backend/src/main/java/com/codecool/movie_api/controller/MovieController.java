package com.codecool.movie_api.controller;

import com.codecool.movie_api.entity.WatchList;
import com.codecool.movie_api.model.generated.Movie;
import com.codecool.movie_api.model.generated.MovieAbout;
import com.codecool.movie_api.repository.WatchListRepository;
import com.codecool.movie_api.service.MovieApiService;
import com.codecool.movie_api.utilities.JsonResponseCreator;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class MovieController {

    @Autowired
    private MovieApiService movieApiService;

    @Autowired
    private JsonResponseCreator jsonResponseCreator;

    @Autowired
    private WatchListRepository watchListRepository;

    @CrossOrigin
    @GetMapping("/movie")
    public Movie getMovie() {
        return movieApiService.getMovie();
    }

    @CrossOrigin
    @PostMapping("/search")
    public Object getSearchResult(@RequestBody String input) {
        return movieApiService.getSearchResult(input);
    }

    @CrossOrigin
    @PostMapping("/sidebar")
    public Object getSidebarMovie(@RequestBody String input) {
        return movieApiService.getSidebarMovie(input);
    }

    @CrossOrigin
    @PostMapping("/about")
    public Object getMovieData(@RequestBody String id) {
        return movieApiService.getMovieData(id);
    }

    @CrossOrigin
    @PostMapping("/watchlist")
    public void getMovieWatchList(@RequestBody WatchList about) {
        System.out.println("Controller: " + about);
        watchListRepository.save(about);
    }

}
