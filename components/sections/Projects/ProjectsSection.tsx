import { memo } from "react";

import ProjectCards from "@components/cards/ProjectCards";
import Section from "@components/layout/Section";

const SECTION_TITLE = {
    title: "Проекты",
};

const ProjectSection = () => {
    return (
        <div className="flex">
            <Section
                title={SECTION_TITLE.title}
                children={<ProjectCards />}
            ></Section>
        </div>
    );
};

export default memo(ProjectSection);
