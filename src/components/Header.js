import React from "react";
import syncImage from "./../img/synchronicity.jpg";
function Header(){
  return (
    <React.Fragment>
      <h1>Synchronicity Logger</h1>
      <img src={syncImage} alt="Display of mystical energy"/>
    </React.Fragment>
    
  );
}

export default Header;