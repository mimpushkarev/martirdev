import { memo } from "react";

import projectPic from "@public/projects/ecopragmat.png";
import Box from "@components/layout/Box";

import ProjectCard from "./ProjectCard";
import { ProjectsType } from "./types";


const PROJECTS: ProjectsType = [
    {
        id: "0",
        title: "Экопрагмат",
        subtitle: "Проект для ООО Экопрагмат",
        image: projectPic,
        date: "26.01.2023",
    },

    {
        id: "1",
        title: "Экопрагмат",
        subtitle: "Проект для ООО Экопрагмат",
        image: projectPic,
        date: "26.01.2023",
    },

    {
        id: "2",
        title: "Экопрагмат",
        subtitle: "Проект для ООО Экопрагмат",
        image: projectPic,
        date: "26.01.2023",
    },
];

const ProjectCards = () => {
    return (
        <Box gap={{phone: 3, tablet: 2, desktop: 4}} wrap>
            {PROJECTS.map((project) => (
                <ProjectCard project={project} key={project.id} />
            ))}
        </Box>
    );
};

export default memo(ProjectCards);
