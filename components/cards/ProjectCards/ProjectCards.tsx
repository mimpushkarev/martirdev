import { memo } from "react";

import ProjectCard from "./ProjectCard";
import { ProjectsType } from "./types";

import projectPic from "@public/projects/ecoexp.png";

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
        <div className="flex flex-1 flex-col gap-y-6 mt-8 tablet:flex-row tablet:flex-wrap tablet:gap-4 desktop:mt-12 desktop:gap-8">
            {PROJECTS.map((project) => (
                <ProjectCard project={project} key={project.id} />
            ))}
        </div>
    );
};

export default memo(ProjectCards);
