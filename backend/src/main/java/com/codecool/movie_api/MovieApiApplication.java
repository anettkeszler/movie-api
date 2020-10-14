package com.codecool.movie_api;

import com.codecool.movie_api.repository.AboutPageRepository;
import com.codecool.movie_api.repository.MovieListRepository;
import com.codecool.movie_api.repository.RandomMovieRepository;
import com.codecool.movie_api.repository.WatchListRepository;
import com.codecool.movie_api.utilities.JsonResponseCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApiApplication {
    @Autowired
    private AboutPageRepository aboutPageRepository;

    @Autowired
    private RandomMovieRepository randomMovieRepository;

    @Autowired
    private MovieListRepository movieListRepository;

    @Autowired
    private WatchListRepository watchListRepository;

    @Autowired
    private JsonResponseCreator jsonResponseCreator;


//    @Autowired
//    public MovieApiApplication(AboutPageRepository aboutPageRepository, RandomMovieRepository randomMovieRepository, MovieListRepository movieListRepository, WatchListRepository watchListRepository) {
//        this.aboutPageRepository = aboutPageRepository;
//        this.randomMovieRepository = randomMovieRepository;
//        this.movieListRepository = movieListRepository;
//        this.watchListRepository = watchListRepository;
//    }

    public static void main(String[] args) {
        SpringApplication.run(MovieApiApplication.class, args);

    }


}
