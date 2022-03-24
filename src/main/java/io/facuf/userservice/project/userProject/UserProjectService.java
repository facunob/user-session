package io.facuf.userservice.project.userProject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserProjectService {

    private final UserProjectRepository userProjectRepository;

    public UserProjectService(UserProjectRepository userProjectRepository) {
        this.userProjectRepository = userProjectRepository;
    }

    public List<UserProject> saveAll(List<UserProject> userProjectList) {
        return userProjectRepository.saveAll(userProjectList);
    }
}
