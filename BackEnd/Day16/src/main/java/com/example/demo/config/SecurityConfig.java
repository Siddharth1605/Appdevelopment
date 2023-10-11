package com.example.demo.config;


import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.constant.Api;

import lombok.RequiredArgsConstructor;
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	  private final AuthenticationProvider authenticationProvider;
      private final JwtAuthenticationFilter jwtAuthenticationFilter;
      @Bean
      public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
              httpSecurity
                              .cors(corsConfirguarationSource -> corsConfirguarationSource.configurationSource(
                                              corsConfigurationSource()))
                              .csrf(csrf -> csrf.disable())
                              .authorizeHttpRequests(authorize -> authorize
                                              .requestMatchers(Api.AUTH + "/**").permitAll()
                                              .anyRequest().authenticated())
                              .sessionManagement(session -> session
                                              .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                              .authenticationProvider(authenticationProvider)
                              .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
              return httpSecurity.build();
      }

	  @Bean
      public CorsConfigurationSource corsConfigurationSource() {
              CorsConfiguration configuration = new CorsConfiguration();
              configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
              configuration.setAllowCredentials(true);
              configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
              configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
              UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
              source.registerCorsConfiguration("/**", configuration);
              return source;
      }
}
