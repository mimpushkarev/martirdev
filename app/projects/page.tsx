import { memo } from "react";

import ProjectsSection from "@components/sections/Projects/ProjectsSection";
import { ProjectsPageType } from "./types";

const ProjectsPage: ProjectsPageType = () => {
    return (
        <>
            <ProjectsSection />
        </>
    );
};
export default memo(ProjectsPage);
