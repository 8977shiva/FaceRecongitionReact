import React from "react";

const ImageForm = ({onInputChange,onButtonClick}) => {
  return (
    <div>
      <p className="f3 center">
        {"This face Detection  app lets to detect face in your picture"}{" "}
      </p>
      <div className="center">
        <div className="pa4 br3  shadow-1 center">
          <input
            className="f4 pa2 w-70 "
            type="text"
            onChange={onInputChange}
          />
          <button className="w-30 grow f4 link ph3 bgbutton  " onClick={onButtonClick} >Dectect</button>
        </div>
      </div>
    </div>
  );
};
export default ImageForm;
