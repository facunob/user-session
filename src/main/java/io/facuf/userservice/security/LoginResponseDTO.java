package io.facuf.userservice.security;

import java.io.Serializable;
import java.util.List;

public class LoginResponseDTO implements Serializable {

    private String accessToken;
    private List<String> roles;

    public LoginResponseDTO(String accessToken, List<String> roles) {
        this.accessToken = accessToken;
        this.roles = roles;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
