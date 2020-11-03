package com.codecool.movie_api.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final JwtTokenServices jwtTokenServices;

    public SecurityConfig(JwtTokenServices jwtTokenServices) {
        this.jwtTokenServices = jwtTokenServices;
    }

    // for letting users log in
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .httpBasic().disable()
                .cors().and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests() // access rights
                .antMatchers("/register").permitAll()
                .antMatchers("/signin").permitAll()
                .antMatchers(HttpMethod.GET, "/movie").permitAll()
                .antMatchers(HttpMethod.POST, "/search").permitAll()
                .antMatchers(HttpMethod.POST, "/sidebar").permitAll()
                .antMatchers(HttpMethod.POST, "/about").permitAll()
                .antMatchers(HttpMethod.POST, "/watchlist/**").authenticated()
                .antMatchers(HttpMethod.GET, "/watchlist/**").authenticated()
                .anyRequest().denyAll();
    }



}
