import { FC } from "react";

export type ContactType = {
    id: string;
    title: string;
    contact: string;
    link?: string;
    
};

export type ContactsType = ContactType[];

type ContactCardPropsType = {
    contact: ContactType;
}

export type ContactCardType = FC<ContactCardPropsType>
