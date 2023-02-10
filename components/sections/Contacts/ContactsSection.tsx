import { memo } from "react";

import ContactCards from "@components/cards/ContactsCard/ContactCards";
import Section from "@components/layout/Section";

const SECTION_TITLE = {
    title: "Контакты",
};

const ContactsSection = () => {
    return (
        <div className="flex">
            <Section title={SECTION_TITLE.title}>
                <ContactCards />
            </Section>
        </div>
    );
};

export default memo(ContactsSection);
