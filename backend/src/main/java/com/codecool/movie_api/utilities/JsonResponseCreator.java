package com.codecool.movie_api.utilities;

import com.codecool.movie_api.model.generated.Movie;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class JsonResponseCreator {

    public Movie getWatchListMovies(JSONObject movie) {
        String title = movie.getString("title");
        String id = movie.getString("imdbID");


        System.out.println(title);
        ;

        return null;
    }

}
