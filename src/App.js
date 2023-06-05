import * as React from "react";
import "./App.css";
import InputComponent from "./Features/InputComponent";
import r2wc from "@r2wc/react-to-web-component";

function App() {
 

 
  const WebInputComponent = r2wc(InputComponent)
  return (
    <>
    <InputComponent
      label="Nom"
      errorMessage="Veuillez entrez votre Nom"
      type={"text"}
    />
  
    </>
  );
}

export default App;
