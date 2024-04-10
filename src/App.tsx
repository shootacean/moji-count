import { Center, Grid, GridItem, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import { count } from "./lib/count";

function App() {
	const [input, setInput] = useState<string>("");

	return (
		<>
			<Grid
				templateAreas={`"header header"
                        "main main"
                        "footer footer"`}
				gridTemplateRows={"50px auto 50px"}
				gridTemplateColumns={"150px 1fr"}
				h="100vh"
				gap="1"
				color="blackAlpha.700"
				fontWeight="bold"
			>
				{/* TODO : Header */}
				<GridItem area={"header"}>
					<Header />
				</GridItem>
				<GridItem p="8" area={"main"}>
					<Center height="full">
						<Textarea
							value={input}
							placeholder="type here"
							onChange={(e) => setInput(e.target.value)}
						/>
					</Center>
					<Text>count: {count(input)}</Text>
				</GridItem>
				{/* TODO : Footer */}
				<GridItem pl="2" bg="white" area={"footer"}>
					文字数カウント
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
