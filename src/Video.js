import React from 'react';
import './style.css';
class Videodata extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
    var videoIndex = [];
    for (var i = 1; i <= 8; i++) {
       videoIndex.push(i);
    }
    function enlarge(i){
      var modal = document.getElementById("myv");
      var modalV = document.getElementById("v01");
      modal.style.display = "flex";
      modalV.querySelector("source").src="./video/"+{i}+'.mp4';
      modalV.load();
  window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }
    return(
    <div>
      <div className='video-container'>
        {videoIndex.map(index=> (
          <div className="video-item" key={index}><video onClick = {enlarge.bind(this,index)} controls><source src={"./video/"+index+".mp4"} type="video/mp4"/></video></div>
          ))}
      </div>
      <div id="myv" className="modal">
        <video controls className="modal-content" id="v01"><source src="./video/1.mp4" type="video/mp4"/></video>
      </div>
    </div>
    );
  }
}

export default Videodata;