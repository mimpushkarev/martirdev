import { memo } from "react";
import Image from "next/image";

import { ProjectCardType } from "./types";

const ProjectCard: ProjectCardType = ({ project }) => {
    return (
        <div>
            <div className="w-64 tablet:w-[20.75rem] desktop:w-[37rem] h-45 tablet:h-[15.5rem] desktop:h-[26rem]">
                <Image src={project.image} alt="Главная страница проекта" />
            </div>
            <div className="text-base font-bold">{project.title}</div>
            <div className="text-xs text-color-gray">{project.date}</div>
        </div>
    );
};

export default memo(ProjectCard);
