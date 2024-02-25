import { type MetadataRoute } from "next";

const Sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: "/",
		},
	];
};

export default Sitemap;
