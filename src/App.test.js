import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// smoke test
test("should render App", () => {
	render(<App />);
});

// snapshot test
test("should match snapshot", () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
