import React from 'react';
import './style.css';
import ScrollToTop from './Button.js'
class Imagedata extends React.Component {
  constructor(){
    super();
  }
  render()
  {
    var imageIndex = [];
    for (var i = 1; i <= 15; i++) {
       imageIndex.push(i);
    }
    function enlarge(i){
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img01");
      modal.style.display = "flex";
      modalImg.src = './image/'+i+'.jpg';
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
    }
    return(
      <div>
    <main>
      {imageIndex.map(index => (
        <figure id='myimg' key={index}><img onClick = {enlarge.bind(this,index)} src={"./image/"+index+".jpg"}/></figure>
      ))}
    </main>
    <ScrollToTop/>
  <div id="myModal" className="modal">
    <img className="modal-content" id="img01" /></div>
  </div>
    );
  }
}

export default Imagedata;