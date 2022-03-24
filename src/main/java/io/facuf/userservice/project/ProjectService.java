package io.facuf.userservice.project;

import io.facuf.userservice.project.userProject.ProjectParticipantsDTO;
import io.facuf.userservice.project.userProject.UserProject;
import io.facuf.userservice.project.userProject.UserProjectService;
import io.facuf.userservice.user.User;
import io.facuf.userservice.user.UserSerivce;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserSerivce userSerivce;
    private final UserProjectService userProjectService;

    public ProjectService(ProjectRepository projectRepository, UserSerivce userSerivce, UserProjectService userProjectService) {
        this.projectRepository = projectRepository;
        this.userSerivce = userSerivce;
        this.userProjectService = userProjectService;
    }

    @Transactional(readOnly = true)
    public List<Project> findAllProjectByUser() {
        User user = userSerivce.getLoggedUser();
        return projectRepository.findAllByUserProjectsUserId(user.getId());
    }

    @Transactional
    public Project createProject(String projectName) {
        User user = userSerivce.getLoggedUser();
        Project project = new Project();
        project.setName(projectName);
        project.setOwner(user);
        return projectRepository.save(project);
    }

    public void addParticipants(ProjectParticipantsDTO participantsToAdd) {
        List<User> users = userSerivce.getAllUSersById(participantsToAdd.getParticipantsId());
        List<UserProject> userProjects = users.stream().map(user -> {
            UserProject userProject = new UserProject();
            userProject.setProject(participantsToAdd.getProject());
            userProject.setUser(user);
            return userProject;
        }).collect(Collectors.toList());

        userProjectService.saveAll(userProjects);
    }


}
