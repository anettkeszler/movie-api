package com.codecool.movie_api.repository;

import com.codecool.movie_api.entity.WatchList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchListRepository extends JpaRepository<WatchList, Long> {
}
