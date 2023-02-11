import { memo } from "react";

import projectPic from "@public/projects/ecopragmat.png";
import Box from "@components/layout/Box";

import CalledTable from "../Called/CalledTable";
import { WorkersType } from "../types";

const WORKERS: WorkersType = [
    {
        id: "0",
        name: "Артём Яковлев",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Президент Казахстана",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "19:50",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Виктор Кокшаров",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "19:40",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Надежда Бабкина",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "19:30",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Евгений Страшинин",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: true,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Илья Обабков",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: true,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Максим Пушкарев",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: true,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Юлия Бурдукова",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Сквозь баб",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: false,
        phone: "+799999999",
    },
];

const SubTable = () => {
    return (
        <div>
            <p className="m-5 font-bold">Недоступные клиенты</p>
            {WORKERS.map((worker) =>
                worker.isCalled === false &&
                worker.active_period.time < "17:00" ? (
                    <CalledTable worker={worker} key={worker.id} />
                ) : (
                    ""
                )
            )}
            <p className="m-5 font-bold">Будущие клиенты</p>
            {WORKERS.map((worker) =>
                worker.isCalled === false &&
                worker.active_period.time > "17:00" ? (
                    <CalledTable worker={worker} key={worker.id} />
                ) : (
                    ""
                )
            )}
            <p className="m-5 font-bold">Обзвоненные клиенты</p>
            {WORKERS.map((worker) =>
                worker.isCalled === true ? (
                    <CalledTable worker={worker} key={worker.id} />
                ) : (
                    ""
                )
            )}
        </div>
    );
};

export default memo(SubTable);
