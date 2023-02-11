import { memo } from "react";

import Section from "@components/layout/Section";

import SubTable from "@components/table/SubTable/SubTable";

const SECTION_TITLE = {
    title: "Таблица",
};

const TableSection = () => {
    return (
        <div className="flex">
            <Section title={SECTION_TITLE.title}>
                <SubTable />
            </Section>
        </div>
    );
};

export default memo(TableSection);
