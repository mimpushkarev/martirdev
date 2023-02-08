import { memo } from "react";

import Container from "../Container";

interface Props {
    title: string;
    children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
    return (
        <div className="py-8 tablet:py-12 desktop:py-20">
            <Container title={title} children={children} />
        </div>
    );
};

export default memo(Section);
