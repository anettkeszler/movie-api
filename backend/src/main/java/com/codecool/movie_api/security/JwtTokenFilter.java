package com.codecool.movie_api.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class JwtTokenFilter extends OncePerRequestFilter {

    private final JwtTokenServices jwtTokenServices;

    public static final String TOKEN = "token";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Optional<Cookie> jwtToken =
                Arrays.stream(Optional.ofNullable(request.getCookies()).orElse(new Cookie[]{}))
                        .filter(cookie -> cookie.getName().equals(TOKEN))
                        .findFirst();
        if (jwtToken.isPresent()) {
            UsernamePasswordAuthenticationToken userToken = jwtTokenServices.validateTokenAndExtractUserSpringToken(jwtToken.get().getValue());

            SecurityContextHolder.getContext().setAuthentication(userToken);

        }
        filterChain.doFilter(request, response);
    }
}
