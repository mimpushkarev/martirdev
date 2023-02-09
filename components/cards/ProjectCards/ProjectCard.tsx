import { memo } from "react";
import Image from "next/image";

import { ProjectCardType } from "./types";

const ProjectCard: ProjectCardType = ({ project }) => {
    return (
        <div className="w-full tablet:w-1/2 desktop:w-1/3">
            <div className="aspect-[3/2]">
                <Image src={project.image} alt="Главная страница проекта" />
            </div>
            <div className="text-base font-bold">{project.title}</div>
            <div className="text-xs text-color-gray">{project.date}</div>
        </div>
    );
};

export default memo(ProjectCard);
