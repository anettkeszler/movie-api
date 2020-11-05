package com.codecool.movie_api.controller;

import com.codecool.movie_api.model.user.MovieApiUser;
import com.codecool.movie_api.model.user.SignUpRequest;
import com.codecool.movie_api.model.user.UserCredentials;
import com.codecool.movie_api.security.JwtTokenServices;
import com.codecool.movie_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class AuthController {

    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private final JwtTokenServices jwtTokenServices;

    @Autowired
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignUpRequest registerUser) {
        System.out.println(registerUser);
        userService.saveNewUser(registerUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(registerUser.getUserName());
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserCredentials userCredentials, HttpServletResponse response) {
        try {
            String username = userCredentials.getUsername();
            String password = userCredentials.getPassword();

            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

            List<String> roles = auth.getAuthorities()
                    .stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());

            String token = jwtTokenServices.createToken(username, roles);

            ResponseCookie cookie = addTokenToCookie(token);

            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("roles", roles);
            model.put("token", token);

            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Wrong username or password");
        }
    }

    private ResponseCookie addTokenToCookie(String token) {
        return ResponseCookie
                .from("token", token)
                .maxAge(Duration.ofHours(24))
                .path("/")
                .httpOnly(true) // XSS
                .secure(false)
                .build();
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        ResponseCookie cookie = ResponseCookie
                .from("token", "")
                .maxAge(0)
                .path("/")
                .httpOnly(true)
                .secure(false)
                .build();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body("");

    }



}
