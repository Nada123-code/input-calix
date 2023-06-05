import * as React from "react";
import "./InputComponent.css";
import Icon from "./assets/icons/icon.png";
import ErrorIcon from "./assets/icons/ErrorIcon.png";
import {calix} from "calix_input"
export default function InputComponent(props) {
  const [value, setValue] = React.useState("");
  const format_text = (e) => {
    setValue(e.target.value);
  };

  const addPrefix = () => {
    console.log(value)
    if (!value.startsWith("calix-") && value.length > 0) {
      setValue("calix-" + value);
    }
  };

  return (
    <React.Fragment>
      <div className="centered-element">
        <label>{props.label}*</label>
        <img src={Icon} alt="" width="15px" height="15px" />
        <br />
      </div>
      <input
        onBlur={addPrefix}
        placeholder={props.placeholder}
        type={props.type}
        id="calix-input"
        value={value}
        onChange={format_text}
      
      />
      <div className="centered-elementError">
        {value.length === 0 ? (
          <>
            <img src={ErrorIcon} alt="" width="15px" height="15px" />
            <p>{props.error_message}</p>
          </>
        ) : (
          null
        )}
      </div>


     
      
    </React.Fragment>
  );
}
