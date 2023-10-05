package com.medico.medical.service;

import com.medico.medical.dto.request.AuthenticationRequest;
import com.medico.medical.dto.request.RegisterRequest;
import com.medico.medical.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
