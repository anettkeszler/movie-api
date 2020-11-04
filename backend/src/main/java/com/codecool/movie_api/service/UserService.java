package com.codecool.movie_api.service;

import com.codecool.movie_api.model.user.MovieApiUser;
import com.codecool.movie_api.model.user.SignUpRequest;
import com.codecool.movie_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void saveNewUser(SignUpRequest registerUser) {
        MovieApiUser user = MovieApiUser.builder()
                .firstName(registerUser.getFirstName())
                .lastName(registerUser.getLastName())
                .username(registerUser.getLastName())
                .password(passwordEncoder.encode(registerUser.getPassword()))
                .roles(Arrays.asList("ROLE_USER"))
                .build();
        userRepository.save(user);
    }
}
