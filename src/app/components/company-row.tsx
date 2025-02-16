import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// import StatusLabel, { Status } from "@/app/components/status-label";
import StatusLabel from "@/app/components/status-label";
import { Company } from "@/lib/api";
export interface CompanyRowProps {
	// id: number;
	// category: string;
	// company: string;
	// status: Status;
	// promotion: boolean;
	// country: string;
	// joinedDate: string;
	company: Company;
}
// const labelByStatus = {
// 	[Status.Active]: "Active",
// 	[Status.NotActive]: "Not Active",
// 	[Status.Pending]: "Pending",
// 	[Status.Suspended]: "Suspended",
// };
// export default function CompanyRow({
// 	id,
// 	category,
// 	company,
// 	status,
// 	promotion,
// 	country,
// 	joinedDate,
// }: CompanyRowProps) {
export default function CompanyRow({ company }: CompanyRowProps) {
	return (
		<tr className="h-14 text-center text-gray-900 bg-white">
			<td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
				{/* {category} */}
				{company.categoryTitle}
			</td>
			<td>
				{/* <a href={`/companies/${id}`}>{company}</a> */}
				<Link href={`/companies/${company.id}`}>{company.title}</Link>
			</td>
			<td>
				{/* <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel> */}
				<StatusLabel status={company.status} />
			</td>
			<td>
				<div className="inline-flex items-center gap-1">
					<Image
						width={16}
						height={16}
						// src={`/icons/${promotion ? "check" : "x-mark"}.svg`}
						src={`/icons/${company.hasPromotions ? "check" : "x-mark"}.svg`}
						alt="promotion icon"
					/>
					<span
						className={clsx(
							"text-sm font-medium",
							// promotion ? "text-green-700" : "text-red-700"
							company.hasPromotions ? "text-green-700" : "text-red-700"
						)}
					>
						{/* {promotion ? "Yes" : "No"} */}
						{company.hasPromotions ? "Yes" : "No"}
					</span>
				</div>
			</td>
			{/* <td>{country}</td> */}
			<td>{company.countryTitle}</td>
			<td className="rounded-r">
				{/* {new Date(joinedDate).toLocaleDateString("uk-UA")} */}
				{new Date(company.joinedDate).toLocaleDateString("uk-UA")}
			</td>
		</tr>
	);
}
