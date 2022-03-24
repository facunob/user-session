package io.facuf.userservice.user;

import io.facuf.userservice.security.Permission;
import io.facuf.userservice.security.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserResource {

    private final UserSerivce userSerivce;

    @GetMapping("/asd")
    @PreAuthorize("hasAuthority(\"" + Permission.User.DELETE + "\")")
    public ResponseEntity<String> asd() {
        return ResponseEntity.ok("asd");
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        user.setRole(Role.ROLE_USER);
        User savedUser = userSerivce.saveUser(user);
        return ResponseEntity.ok().body(savedUser);
    }

    @GetMapping("/session")
    public ResponseEntity<User> getSession() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        String username = securityContext.getAuthentication().getPrincipal().toString();

        User user = userSerivce.getUserFromUsername(username);
        return ResponseEntity.ok().body(user);
    }

}
