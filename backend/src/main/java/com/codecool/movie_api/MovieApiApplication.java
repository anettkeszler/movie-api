package com.codecool.movie_api;

import com.codecool.movie_api.repository.AboutPageRepository;
import com.codecool.movie_api.repository.MovieListRepository;
import com.codecool.movie_api.repository.RandomMovieRepository;
import com.codecool.movie_api.repository.WatchListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApiApplication {
    private AboutPageRepository aboutPageRepository;
    private RandomMovieRepository randomMovieRepository;
    private MovieListRepository movieListRepository;
    private WatchListRepository watchListRepository;

    @Autowired
    public MovieApiApplication(AboutPageRepository aboutPageRepository, RandomMovieRepository randomMovieRepository, MovieListRepository movieListRepository, WatchListRepository watchListRepository) {
        this.aboutPageRepository = aboutPageRepository;
        this.randomMovieRepository = randomMovieRepository;
        this.movieListRepository = movieListRepository;
        this.watchListRepository = watchListRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(MovieApiApplication.class, args);
    }

}
