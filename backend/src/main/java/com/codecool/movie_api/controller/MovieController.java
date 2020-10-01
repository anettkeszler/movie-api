package com.codecool.movie_api.controller;

import com.codecool.movie_api.model.generated.Movie;
import com.codecool.movie_api.service.MovieApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {

    @Autowired
    private MovieApiService movieApiService;

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
}
