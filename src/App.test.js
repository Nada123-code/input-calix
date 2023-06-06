import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import InputComponent from './Features/InputComponent';

describe("Input Component", () => {
  render(<InputComponent type ="text" label="prenom" error_message="remplir le champ" hint="votre prenom" />);
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