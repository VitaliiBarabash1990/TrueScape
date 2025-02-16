import React from "react";
// import Header from "@/app/components/header";
import Toolbar from "@/app/components/toolbar";
import SearchInput from "@/app/components/search-input";
import AddPromotionButton from "@/app/components/add-promotion-button";

// export interface PageProps {}
export interface PageProps {
	params: { id: string };
}
// export default function Page({}: PageProps) {
// 	return null;
export default function Page({ params }: PageProps) {
	return (
		<Toolbar action={<AddPromotionButton companyId={params.id} />}>
			<SearchInput />
		</Toolbar>
	);
}
