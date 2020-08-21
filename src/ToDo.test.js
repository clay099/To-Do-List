import React from "react";
import { render } from "@testing-library/react";
import ToDo from "./ToDo";

//smoke test
it("should render NewBoxForm", () => {
	render(<ToDo />);
});

//snapshot test
it("should match snapshot", () => {
	const { asFragment } = render(<ToDo />);
	expect(asFragment()).toMatchSnapshot();
});
