import React, { useState } from "react";
import PropTypes from "prop-types";

let words = 0;
let characters = 0;

export default function Textform(props) {
  // listening event to change lowercase text to uppercase text

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    const Uptext = text.toUpperCase();
    setText(Uptext);
  };

  // listening event to change text to Lowercase text

  const handleLoClick = () => {
    console.log("lowercase was clicked");
    const Lotext = text.toLowerCase();
    setText(Lotext);
  };

  // changing the content of textarea

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    words = text.split(" ").length - 1;
    characters = text.length;
  };

  //  to make textarea clear when entering text first time

  const handleOnClick = (event) => {
    if (text === "Enter your text here") {
      setText(" ");
    }
  };

  // clearing the textarea

  const handleOnClear = (event) => {
    setText(" ");

    words = 0;
    characters = 0;
  };

  //  copy text to clipboard

  const handleOnCopy = (event) => {
    const copiedText = document.getElementById("exampleFormControlTextarea1");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
  };

  // remove extra spaces from sentense

  const handleextraSpaces = (event) => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // using useState hook to change text state

  const [text, setText] = useState("Enter your text here");
  return (
    <>
      <h3> {props.name}</h3>
      <div className="mb-3">
        {/* elements textarea and buttons  */}

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          onClick={handleOnClick}
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleOnClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleOnCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleextraSpaces}>
        Remove Extra Spaces
      </button>

      {/* text summary  */}

      <div className="container my-2">
        <h3>Your text summary:</h3>
        <p>
          Your text has {words} words and {characters} characters.
        </p>
      </div>
      <div className="container my-6">
        <p>Your text needs {(words * 0.5) / 60} minutes of time to read .</p>
      </div>
      <div>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

// defining proptype and default props

Textform.propTypes = {
  name: PropTypes.string.isRequired,
};

Textform.defaultProps = {
  name: "Textarea",
};
