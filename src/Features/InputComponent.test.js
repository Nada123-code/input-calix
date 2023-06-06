import { render, screen, cleanup,fireEvent } from "@testing-library/react";
import InputComponent from './InputComponent'
describe("Input Component", () => {
    render(<InputComponent label="prenom" error_message="remplir le champ" hint="votre prenom" />);
    const input = screen.getByTestId("input");
 
    // Test 1
    test("input rendering", () => {
        expect(input).toBeInTheDocument();

    })
 
    // Test 2
    test("input blur", () => {
        fireEvent.focusOut(input)
        expect(input.innerHTML.startsWith("calix-")).toBeTruthy
    })
})