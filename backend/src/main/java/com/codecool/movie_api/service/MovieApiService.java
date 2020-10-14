package com.codecool.movie_api.service;

import com.codecool.movie_api.model.generated.Movie;
import com.codecool.movie_api.model.generated.MovieAbout;
import com.codecool.movie_api.utilities.JsonResponseCreator;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Service
public class MovieApiService {

    JsonResponseCreator jsonResponseCreator = new JsonResponseCreator();

    public Movie getMovie() {
        RestTemplate template = new RestTemplate();
        ResponseEntity<Movie> movieResponseEntity = template.exchange("http://www.omdbapi.com/?apikey=8a2bf193&s=batman", HttpMethod.GET, null, Movie.class);
        return movieResponseEntity.getBody();
    }

    public Movie getSearchResult(String input) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<Movie> movieResponseEntity = template.exchange("http://www.omdbapi.com/?apikey=8a2bf193&s=" + input , HttpMethod.GET, null, Movie.class);
        return movieResponseEntity.getBody();
    }

    public Movie getSidebarMovie(String input) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<Movie> movieResponseEntity = template.exchange("http://www.omdbapi.com/?apikey=8a2bf193&s=" + input , HttpMethod.GET, null, Movie.class);
        return movieResponseEntity.getBody();
    }

    public MovieAbout getMovieData(String id) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<MovieAbout> movieResponseEntity = template.exchange("http://www.omdbapi.com/?i=" + id + "&apikey=8a2bf193", HttpMethod.GET, null, MovieAbout.class);
        return movieResponseEntity.getBody();
    }


}
