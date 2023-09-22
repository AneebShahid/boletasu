/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
	reactStrictMode: true,
	output: "export",
	trailingSlash: true,

	compiler: {
		styledComponents: true,
	},
	images: {
		loader: "imgix",
		path: "",
	},
};
