import { Flex } from "@chakra-ui/react";

function Header() {
	return (
		<>
			<Flex
				as="header"
				bg="orange.200"
				p="3"
				justifyContent="space-between"
				alignItems="center"
			>
				文字数カウント
			</Flex>
		</>
	);
}

export default Header;
