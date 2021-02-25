import React from 'react';
import './style.css';
class Textdata extends React.Component {
  constructor(){
    super();
  }
  render()
  {
      return(
    <div>
    <div id='textbox'>
    <img src={"./image/1.jpg"} className='alignleft' />
    <h2 className='alignright'>About me</h2>
    <p className='alignright'>For the fields of computer science, I am especially interested in quantum computing, machine learning and cryptography. I am also a huge fan of physics.I am a strong Go player and enjoy playing Go more than 15 years and currently the chairman of UCSB Go Club. Apart from boarding game, I love all kinds of music except rock music.</p>
    <div style={{clear: "both"}}></div>
    </div>
</div>
    );
  }
}

export default Textdata;