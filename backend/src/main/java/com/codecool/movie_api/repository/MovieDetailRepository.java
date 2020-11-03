package com.codecool.movie_api.repository;

import com.codecool.movie_api.model.entity.MovieDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieDetailRepository extends JpaRepository<MovieDetail, Long> {
}
