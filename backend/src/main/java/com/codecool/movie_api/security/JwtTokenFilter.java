package com.codecool.movie_api.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
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
public class JwtTokenFilter extends GenericFilterBean {

    private final JwtTokenServices jwtTokenServices;

    public JwtTokenFilter(JwtTokenServices jwtTokenServices) {
        this.jwtTokenServices = jwtTokenServices;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        String token = jwtTokenServices.getTokenFromRequest((HttpServletRequest) servletRequest);
        if (token != null && jwtTokenServices.validateToken(token)) {
            Authentication auth = jwtTokenServices.parseUserFromTokenInfo(token);
            // Marks the user as authenticated.
            // If this code does not run, the request will fail for routes that are configured to need authentication
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        // process the next filter.
        filterChain.doFilter(servletRequest, servletResponse);

    }
}
