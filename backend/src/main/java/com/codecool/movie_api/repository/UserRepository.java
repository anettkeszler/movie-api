package com.codecool.movie_api.repository;

import com.codecool.movie_api.model.user.MovieApiUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<MovieApiUser, Long> {
    Optional<MovieApiUser> findByUsername(String username);

}
