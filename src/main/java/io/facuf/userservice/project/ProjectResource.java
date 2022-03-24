package io.facuf.userservice.project;

import io.facuf.userservice.project.userProject.ProjectParticipantsDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/project")
public class ProjectResource {

    private final ProjectService projectService;


    public ProjectResource(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Project>> findAllProjectsByLoggedUser() {
        List<Project> projects = projectService.findAllProjectByUser();
        return ResponseEntity.ok().body(projects);
    }

    @PostMapping("/create")
    public ResponseEntity<Project> createProject(@RequestBody String projectName) {
        Project project = projectService.createProject(projectName);
        return ResponseEntity.ok().body(project);
    }

    @PostMapping("/add-participants")
    public ResponseEntity<String> addParticipants(@RequestBody ProjectParticipantsDTO participantsToAdd) {
        projectService.addParticipants(participantsToAdd);
        return ResponseEntity.ok().body("Participants were added correctly.");
    }

}
