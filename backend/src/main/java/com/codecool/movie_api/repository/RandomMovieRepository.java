package com.codecool.movie_api.repository;

import com.codecool.movie_api.entity.RandomMovie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RandomMovieRepository extends JpaRepository<RandomMovie, Long> {
}
