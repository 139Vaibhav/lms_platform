import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div id="highlighted_area">
        <div id="Frame_1">
          <div id="highlighted_area_copy_44_1"></div>
          <div id="highlighted_area_copy_44_2"></div>
          <div id="highlighted_area_copy_44_3"></div>
          <div id="highlighted_area_copy_44_4"></div>
        </div>
        
        <div id="user_copy_18">
        <img id="user_copy_18_path" src={require("./Dashboard/user_copy_18.png")}></img>
          <img id="mask" src={require("./Dashboard/Mask.png")}></img>
        </div>
        
      </div>
    </div>
  );
}

export default App;
