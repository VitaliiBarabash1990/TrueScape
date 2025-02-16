import React from "react";
import clsx from "clsx";

// export enum Status {
//   Active = 'active',
//   NotActive = 'notActive',
//   Pending = 'pending',
//   Suspended = 'suspended',
// }

import { CompanyStatus } from "@/lib/api";

export interface StatusLabelProps {
	// children: React.ReactNode;
	// status: Status;
	status: CompanyStatus;
	disabled?: boolean;
}

// export default function StatusLabel({
// 	children,
// 	status,
// 	disabled,
// }: StatusLabelProps) {
const labelByStatus = {
	[CompanyStatus.Active]: "Active",
	[CompanyStatus.NotActive]: "Not Active",
	[CompanyStatus.Pending]: "Pending",
	[CompanyStatus.Suspended]: "Suspended",
};
export default function StatusLabel({ status, disabled }: StatusLabelProps) {
	return (
		<div
			className={clsx(
				"inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium",
				// status === Status.Active && "text-green-700 bg-green-100",
				// status === Status.NotActive && "text-red-700 bg-red-100",
				// status === Status.Pending && "text-orange-700 bg-orange-100",
				// status === Status.Suspended && "text-blue-700 bg-blue-100",
				status === CompanyStatus.Active && "text-green-700 bg-green-100",
				status === CompanyStatus.NotActive && "text-red-700 bg-red-100",
				status === CompanyStatus.Pending && "text-orange-700 bg-orange-100",
				status === CompanyStatus.Suspended && "text-blue-700 bg-blue-100",
				{
					["opacity-75 cursor-not-allowed"]: disabled,
				}
			)}
		>
			<div className="w-1 h-1 mr-2 rounded-full bg-current" />
			{/* {children} */}
			{labelByStatus[status]}
		</div>
	);
}
