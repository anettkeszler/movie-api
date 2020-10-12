package com.codecool.movie_api.repository;

import com.codecool.movie_api.entity.MovieList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieListRepository extends JpaRepository<MovieList, Long> {

}
