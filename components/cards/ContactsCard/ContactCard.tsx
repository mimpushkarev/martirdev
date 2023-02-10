import { memo } from "react";
import Link from "next/link";

const ContactCard = ({ contact }) => {
    return (
        <div className="flex flex-row flex-wrap gap-x-6 tablet:gap-x-4 mb-6 tablet:mb-4">
            <div className="text-xl min-w-full tablet:min-w-[12.5rem]">
                {contact.title}
            </div>
            <div className="text-2xl font-bold">
                {contact.link ? (
                    <Link
                        href={contact.link}
                        className="text-color-red underline"
                        target={"_blank"}
                    >
                        {contact.contact}
                    </Link>
                ) : (
                    contact.contact
                )}
            </div>
        </div>
    );
};

export default memo(ContactCard);
