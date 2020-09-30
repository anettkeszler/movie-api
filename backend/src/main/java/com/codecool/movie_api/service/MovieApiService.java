package com.codecool.movie_api.service;

import com.codecool.movie_api.model.generated.Movie;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MovieApiService {

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


}
