package org.herts.example.jwthttp;

public class JwtVerifier {
    public JwtVerifier() {}

    public boolean verifyToken(String token) {
        // temporary
        return token.equals("verified");
    }
}
