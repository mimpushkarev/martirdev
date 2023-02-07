import { memo } from "react";

import Logo from "@components/Logo";

const MainSection = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Logo />
        </div>
    );
};

export default memo(MainSection);
