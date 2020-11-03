package com.codecool.movie_api.repository;

import com.codecool.movie_api.model.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
