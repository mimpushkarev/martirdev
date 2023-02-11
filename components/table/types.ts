import { FC } from "react";

export type WorkerType = {
    id: string;
    name: string;
    active_period: {
        from: string;
        to: string;
        time: string;
    }
    isCalled: boolean;
    phone: string;
};

export type WorkersType = WorkerType[];

type WorkerTablePropsType = {
    worker: WorkerType;
}

export type WorkerTableType = FC<WorkerTablePropsType>
