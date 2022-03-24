package io.facuf.userservice.project.userProject;

import io.facuf.userservice.project.Project;

import java.io.Serializable;
import java.util.List;

public class ProjectParticipantsDTO implements Serializable {
    private Project project;
    private List<Long> participantsId;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public List<Long> getParticipantsId() {
        return participantsId;
    }

    public void setParticipantsId(List<Long> participantsId) {
        this.participantsId = participantsId;
    }
}
