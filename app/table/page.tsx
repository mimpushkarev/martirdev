import { memo } from "react";

import TableSection from "@components/sections/Table/TableSection";
import { TablePageType } from "./types";

const ProjectsPage: TablePageType = () => {
    return (
        <>
            <TableSection />
        </>
    );
};
export default memo(ProjectsPage);
