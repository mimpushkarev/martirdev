import { memo } from "react";

import { PhoneConverter } from "utils/PhoneConverter";
import ContactCard from "./ContactCard";
import { ContactsType } from "./types";

const CONTACTS: ContactsType = [
    {
        id: "0",
        title: "Телефон",
        contact: PhoneConverter("+79921558068"),
    },

    {
        id: "1",
        title: "Telegram",
        contact: "@maximmartir",
        link: "https://t.me/maximmartyr",
    },

    {
        id: "2",
        title: "VK",
        contact: "@itsdefinitelyrealme",
        link: "https://vk.com/itsdefinitelyrealme",
    },
];

const ContactCards = () => {
    return (
        <div className="flex-column">
            {CONTACTS.map((contact) => (
                <ContactCard contact={contact} key={contact.id} />
            ))}
        </div>
    );
};

export default memo(ContactCards);
