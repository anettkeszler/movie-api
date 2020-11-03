package com.codecool.movie_api.repository;

import com.codecool.movie_api.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
