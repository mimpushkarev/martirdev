import { memo } from "react";

import { WorkerTableType } from "../types";

const CalledTable: WorkerTableType = ({ worker }) => {
    return (
        <div>
            <table className="table-fixed w-1/2 text-center">
                <tbody>
                    <tr>
                        <td>{worker.name}</td>
                        <td>{worker.phone}</td>
                        <td>{worker.active_period.time}</td>
                        <td>{`${worker.isCalled}`}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default memo(CalledTable);
