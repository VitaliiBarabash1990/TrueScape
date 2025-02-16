import Header from "@/app/components/header";
// import MagicButton from '@/app/components/magic-button';
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
	return (
		// <main>
		//   <h1 className="text-xl">Dashboard Page</h1>
		//   <MagicButton />
		// </main>
		<>
			<Header>Dashboard</Header>
		</>
	);
}
