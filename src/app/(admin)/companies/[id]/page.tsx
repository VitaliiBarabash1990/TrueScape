"use client";

import React, { useEffect } from "react";
// import Header from "@/app/components/header";
import { notFound } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Company, getCompany, getPromotions } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import CompanyInfo from "@/app/components/company-info";
import CompanyPromotions from "@/app/components/company-promotions";

export interface PageProps {
	// params: { id: string[] };
	params: { id: string };
}
// export default function Page({ params }: PageProps) {

export default async function Page({ params }: PageProps) {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["companies", params.id],
		queryFn: () => getCompany(params.id, { cache: "no-store" }),
		staleTime: 10 * 1000,
	});
	await queryClient.prefetchQuery({
		queryKey: ["promotions", params.id],
		queryFn: () =>
			getPromotions({ companyId: params.id }, { cache: "no-store" }),
		staleTime: 10 * 1000,
	});
	const company = queryClient.getQueryData(["companies", params.id]) as Company;
	if (!company) {
		notFound();
	}
	const dehydratedState = dehydrate(queryClient);

	useEffect(() => {
		const id = Number.parseInt(params.id);
		if (Number.isNaN(id)) {
			notFound();
		}
	}, [params.id]);

	return (
		// <>
		//   <Header>Company ({String(params.id)})</Header>
		//   <Header>Company ({params.id})</Header>
		//   <p>{new Date().toTimeString()}</p>
		// </>

		// <div className="py-6 px-10">
		// 	<p>{`Information about company (${params.id})`}</p>
		// </div>

		<HydrationBoundary state={dehydratedState}>
			<div className="py-6 px-10 grid grid-cols-12 gap-5">
				<div className="col-span-3">
					<CompanyInfo companyId={params.id} />
				</div>
				<div className="col-span-9">
					<CompanyPromotions companyId={params.id} />
				</div>
			</div>
		</HydrationBoundary>
	);
}
