package com.codecool.movie_api.service;

import com.codecool.movie_api.model.generated.GeneratedMovie;
import com.codecool.movie_api.model.generated.MovieAbout;
import com.codecool.movie_api.repository.WatchListRepository;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MovieApiService {

//    JsonResponseCreator jsonResponseCreator = new JsonResponseCreator();


    public WatchListRepository watchListRepository;

    public GeneratedMovie getMovie() {
        RestTemplate template = new RestTemplate();
        ResponseEntity<GeneratedMovie> movieResponseEntity = template.exchange("http://www.omdbapi.com/?apikey=8a2bf193&s=batman", HttpMethod.GET, null, GeneratedMovie.class);
        return movieResponseEntity.getBody();
    }

    public GeneratedMovie getSearchResult(String input) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<GeneratedMovie> movieResponseEntity = template.exchange("http://www.omdbapi.com/?apikey=8a2bf193&s=" + input , HttpMethod.GET, null, GeneratedMovie.class);
        return movieResponseEntity.getBody();
    }

    public GeneratedMovie getSidebarMovie(String input) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<GeneratedMovie> movieResponseEntity = template.exchange("http://www.omdbapi.com/?apikey=8a2bf193&s=" + input , HttpMethod.GET, null, GeneratedMovie.class);
        return movieResponseEntity.getBody();
    }

    public MovieAbout getMovieData(String id) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<MovieAbout> movieResponseEntity = template.exchange("http://www.omdbapi.com/?i=" + id + "&apikey=8a2bf193", HttpMethod.GET, null, MovieAbout.class);
        return movieResponseEntity.getBody();
    }

}
