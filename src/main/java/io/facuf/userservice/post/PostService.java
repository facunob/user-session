package io.facuf.userservice.post;

import io.facuf.userservice.user.User;
import io.facuf.userservice.user.UserRepository;
import io.facuf.userservice.user.UserSerivce;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final UserSerivce userSerivce;

    public PostService(PostRepository postRepository, UserSerivce userSerivce) {
        this.postRepository = postRepository;
        this.userSerivce = userSerivce;
    }

    public Post create(Post post) {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        String username = securityContext.getAuthentication().getPrincipal().toString();

        User user = userSerivce.getUserFromUsername(username);
        post.setUser(user);
        return postRepository.save(post);
    }

}
