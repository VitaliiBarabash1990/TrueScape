import React from "react";

import SummaryTable from "@/app/components/summary-table";
import SummaryTableHeader from "@/app/components/summary-table-header";
import SummaryTableCell from "@/app/components/summary-table-cell";
import DashboardCard from "@/app/components/dashboard-card";
// import { getSummaryPromotions } from "@/lib/api";
import { getPromotions } from "@/lib/api";

export interface PageProps {}
export default async function Page({}: PageProps) {
	// const data = await getSummaryPromotions();
	const data = await getPromotions();

	return (
		<DashboardCard label="Promotions">
			<SummaryTable
				headers={
					<>
						<SummaryTableHeader>Company</SummaryTableHeader>
						<SummaryTableHeader>Name</SummaryTableHeader>
						<SummaryTableHeader align="center">%</SummaryTableHeader>
					</>
				}
			>
				{/* {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
					<tr key={promotionId}> */}
				{data.map(({ id, title, companyTitle, discount }) => (
					<tr key={id}>
						<SummaryTableCell>{companyTitle}</SummaryTableCell>
						{/* <SummaryTableCell>{promotionName}</SummaryTableCell> */}
						<SummaryTableCell>{title}</SummaryTableCell>
						<SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
					</tr>
				))}
			</SummaryTable>
		</DashboardCard>
	);
}
