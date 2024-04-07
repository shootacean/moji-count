import { Button, Center, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Grid
				templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
				gridTemplateRows={"50px auto 50px"}
				gridTemplateColumns={"150px 1fr"}
				h="100vh"
				gap="1"
				color="blackAlpha.700"
				fontWeight="bold"
			>
				<GridItem pl="2" bg="orange.300" area={"header"}>
					Header
				</GridItem>
				<GridItem pl="2" bg="pink.300" area={"nav"}>
					Nav
				</GridItem>
				<GridItem pl="2" bg="green.300" area={"main"}>
					<Center height="full">
						<Button
							colorScheme="blue"
							onClick={() => setCount((count) => count + 1)}
						>
							count is {count}
						</Button>
					</Center>
				</GridItem>
				<GridItem pl="2" bg="blue.300" area={"footer"}>
					Footer
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
