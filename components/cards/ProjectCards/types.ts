import { StaticImageData } from "next/image";
import { FC } from "react";

export type ProjectType = {
    id: string;
    title: string;
    subtitle: string;
    image: StaticImageData;
    date: string;
};

export type ProjectsType = ProjectType[];

type ProjectCardPropsType = {
    project: ProjectType;
}

export type ProjectCardType = FC<ProjectCardPropsType>
