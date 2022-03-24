package io.facuf.userservice.post;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/post")
public class PostResource {

    private final PostService postService;

    public PostResource(PostService postService) {
        this.postService = postService;
    }


    @PostMapping("")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        Post savedPost = postService.create(post);
        return ResponseEntity.ok().body(savedPost.getId().toString());
    }
}
