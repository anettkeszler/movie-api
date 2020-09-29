package com.codecool.movie_api.controller;

import com.codecool.movie_api.model.generated.Movie;
import com.codecool.movie_api.service.MovieApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {

    @Autowired
    private MovieApiService movieApiService;

    @CrossOrigin
    @GetMapping("/movie")
    public Movie getMovie() {
        return movieApiService.getMovie();
    }


}
