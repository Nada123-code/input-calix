import * as React from "react";
import "./InputComponent.scss";
import PropTypes from 'prop-types';

import Icon from "../assets/icons/icon.png";
import ErrorIcon from "../assets/icons/ErrorIcon.png";
export default function InputComponent(props) {
  const [value, setValue] = React.useState("");
  const format_text = (e) => {
    setValue(e.target.value);
  };

  const addPrefix = () => {
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
       data-testid="input"
        onBlur={addPrefix}
        placeholder={props.placeholder}
        type={props.type}
        id="calix-input"
        value={value}
        onChange={format_text}
      
      />
       <div>
        <small className="hint">{props.hint}</small>
       </div>
     
     
        {value.length === 0 ? (
          <div  className="centered-elementError">
            <img src={ErrorIcon} alt="" width="10px" height="10px" />
            <h5>{props.error_message}</h5>
          </div>
        ) : (
          null
        )}
      
      
    </React.Fragment>
  );
}

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error_message: PropTypes.string.isRequired
  
};
