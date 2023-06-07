import "@styles/globals.css";

export const metadata = {
	title: "Arbido",
	description:
		"Web Development | Software Development | App Development | Digital Marketing Agency",
};

const RootLayout = ({ children }) => (
	<html lang="en">
		<body>
			<main>{children}</main>
		</body>
	</html>
);

export default RootLayout;
