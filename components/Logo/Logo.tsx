import { memo } from "react";

const LOGO_TEXT = {
    title: "MARTIR",
    index: "dev",
};
const Logo = () => {
    return (
        <h1 className="text-[4rem] desktop:text-9xl font-extrabold">
            {LOGO_TEXT.title}
            <span className="text-[2rem] desktop:text-[4rem] text-color-red">
                {LOGO_TEXT.index}
            </span>
        </h1>
    );
};

export default memo(Logo);
