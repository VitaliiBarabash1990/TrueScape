import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getCompanies } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";
// import Header from "@/app/components/header";
// import Toolbar from "@/app/components/toolbar";
// import SearchInput from "@/app/components/search-input";
// import AddCompanyButton from "@/app/components/add-company-button";
import CompanyTable from "@/app/components/company-table";
// import CompanyRow from "@/app/components/company-row";
// import { Status } from "@/app/components/status-label";

export interface PageProps {}

// export default function Page({}: PageProps) {
export default async function Page({}: PageProps) {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["companies"],
		queryFn: () => getCompanies({ cache: "no-store" }),
		staleTime: 10 * 1000,
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		// <>
		//   <Header>Companies</Header>
		//   <main>
		//     <Toolbar action={<AddCompanyButton />}>
		//       <SearchInput />
		//     </Toolbar>
		//     <CompanyTable>
		//       <CompanyRow
		//         id={1}
		//         category={'Products'}
		//         company={'Costco'}
		//         status={Status.Pending}
		//         promotion={true}
		//         country={'USA'}
		//         joinedDate={'02.19.2023'}
		//       />
		//     </CompanyTable>
		//   </main>
		// </>

		// <CompanyTable>
		// 	<CompanyRow
		// 		id={1}
		// 		category="Products"
		// 		company="Costco"
		// 		status={Status.Pending}
		// 		promotion={true}
		// 		country="USA"
		// 		joinedDate="02.19.2023"
		// 	/>
		// </CompanyTable>

		<HydrationBoundary state={dehydratedState}>
			<CompanyTable />
		</HydrationBoundary>
	);
}
