import React from "react";
import { render } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

//smoke test
it("should render NewBoxForm", () => {
	render(<NewToDoForm />);
});

//snapshot test
it("should match snapshot", () => {
	const { asFragment } = render(<NewToDoForm />);
	expect(asFragment()).toMatchSnapshot();
});
