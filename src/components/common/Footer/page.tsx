import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function Footer() {
	const linksData = [
		[
			{
				label: "About",
				href: "",
			},
			{
				label: "Services",
				href: "",
			},
			{
				label: "Our profile",
				href: "",
			},
			{
				label: "Blogs",
				href: "",
			},
			{
				label: "Benefits",
				href: "",
			},
		],
		[
			{
				label: "About",
				href: "",
			},
			{
				label: "Services",
				href: "",
			},
			{
				label: "Our profile",
				href: "",
			},
			{
				label: "Blogs",
				href: "",
			},
			{
				label: "Benefits",
				href: "",
			},
		],
		[
			{
				label: "Fanpage",
				href: "",
			},
			{
				label: "Instagram",
				href: "",
			},
			{
				label: "Twitter",
				href: "",
			},
		],
		[
			{
				label: "Contact",
				href: "",
			},
			{
				label: "VillageAgriculture.com",
				href: "",
			},
			{
				label: "Food, Beverage & FMCG",
				href: "",
			},
		],
	];

	return (
		<Fragment>
			{/* begin:: main footer */}
			<div className="px-20">
				<div className="w-full min-h-[300px] flex mb-10">
					<div className="w-[50%] flex flex-col justify-between">
						{/* begin:: logo */}
						<Image
							src="/assets/image/footer_logo.png"
							alt="logo of VillageAgriculture"
							width={536}
							height={76}
						/>
						{/* end:: logo */}

						{/* begin:: quote */}
						<p className="text-6xl text-[#545454] font-medium">
							Reach out with <br />
							Villageagriculture
						</p>
						{/* end:: quote */}
					</div>
					<div className="w-[50%] flex flex-col justify-between">
						{/* begin:: links */}
						<div className="w-full flex justify-between">
							{linksData.map((linkGroup, index) => {
								return (
									<div key={index}>
										{linkGroup.map((linkObject, idx) => (
											<div key={idx}>
												<Link
													className="font-normal text-lg text-[#121212]"
													href={linkObject.href}
												>
													{linkObject.label}
												</Link>
											</div>
										))}
									</div>
								);
							})}
						</div>
						{/* end:: links */}

						{/* begin:: social & lang */}
						<div className="w-full flex justify-between">
							<div className="flex gap-5 items-center">
								<Image
									src={"/assets/image/footer_socical_1.png"}
									alt="social_media_1"
									width={40}
									height={40}
								/>
								<Image
									src={"/assets/image/footer_socical_2.png"}
									alt="social_media_1"
									width={40}
									height={40}
								/>
								<Image
									src={"/assets/image/footer_socical_3.png"}
									alt="social_media_1"
									width={40}
									height={40}
								/>
								<Image
									src={"/assets/image/footer_socical_4.png"}
									alt="social_media_1"
									width={40}
									height={40}
								/>
							</div>

							<div className="p-2 w-48 bg-[#333] rounded-lg flex justify-between items-center">
								<p className="text-white font-semibold text-lg">English</p>
								<Image
									src={"/assets/image/footer_lang.png"}
									alt="lang"
									width={24}
									height={24}
								/>
							</div>
						</div>
						{/* end:: social & lang */}
					</div>
				</div>
			</div>
			{/* end:: main footer */}

			{/*begin:: copyright */}
			<div className="px-20 bg-[#333] py-10 flex justify-between">
				<p className="font-normal text-white text-base inline-block">
					© Copyright 2024 villageagriculture. All Right Reserved
				</p>
				<div className="font-normal text-white text-sm inline-block uppercase">
					<p className="inline-block pr-32">Terms of use</p>
					<p className="inline-block">Privacy policy</p>
				</div>
			</div>
			{/*end:: copyright */}
		</Fragment>
	);
}
