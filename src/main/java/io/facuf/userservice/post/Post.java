package io.facuf.userservice.post;

import io.facuf.userservice.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "post")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "body", nullable = false)
    private String body;

    @Column(name = "likes", nullable = false)
    private Integer likes = 0;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;
}
