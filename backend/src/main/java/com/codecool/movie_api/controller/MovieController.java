package com.codecool.movie_api.controller;

import com.codecool.movie_api.entity.WatchList;
import com.codecool.movie_api.entity.Movie;

import com.codecool.movie_api.model.generated.GeneratedMovie;
import com.codecool.movie_api.repository.MovieRepository;
import com.codecool.movie_api.repository.WatchListRepository;
import com.codecool.movie_api.service.MovieApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;


@RestController
public class MovieController {

    @Autowired
    private MovieApiService movieApiService;

    @Autowired
    private WatchListRepository watchListRepository;

    @Autowired
    private MovieRepository movieRepository;


    @CrossOrigin
    @GetMapping("/movie")
    public GeneratedMovie getMovie() {
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
    @PostMapping("/watchlist/{id}")
    public void getMovieWatchList(@RequestBody Movie detail, @PathVariable("id") String id) {
        System.out.println("Controller: " + detail);
        System.out.println(id);
        Optional<WatchList> watchListId = watchListRepository.findById(Long.parseLong(id));
        movieRepository.save(detail);

        if(watchListId.isPresent()) {
            watchListId.get().getMovies().add(detail.getImdbId());
            watchListRepository.save(watchListId.get());
        }

    }

    @CrossOrigin
    @PostMapping("/watchlist/add")

    public void addToWatchList() {

        watchListRepository.save(WatchList.builder().name("thriller").build());

    }

    @CrossOrigin
    @GetMapping("/watchlist/get")
    public List<WatchList> getWatchListDataFromDb() {
        return watchListRepository.findAll();
    }

    @CrossOrigin
    @PostMapping("/delete")
    public void geIdToDeleteFromWatchList(@RequestBody String id) {
        StringBuffer sb = new StringBuffer(id);
        sb.deleteCharAt(sb.length()-1);
        System.out.println(sb);
        long s = Long.parseLong(sb.toString());
        watchListRepository.deleteById(s);
    }

    @CrossOrigin
    @GetMapping("/get/watchlist/{id}")
    public WatchList getWatchListById(@PathVariable("id") String id) {
        return watchListRepository.findById(Long.parseLong(id)).get();
    }


}
