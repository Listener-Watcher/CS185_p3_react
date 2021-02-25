import React from 'react';
import Textdata from './Text.js'
import Imagedata from './Image.js'
import Videodata from './Video.js'
import Tabledata from './Table.js'
import Email from './Email.js'
class Body extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
    var displaycontent = ()=>{
        var activetab = this.props.activetab;
        if(activetab===1){
            return <Textdata/>
        }else if(activetab===2){
            return <Imagedata/>
        }else if(activetab===3){
            return <Videodata/>
        }else if(activetab===4){
            return <Tabledata/>
        }else{
            return <Email/>
        }
    }
    return(displaycontent());
  }
}

export default Body;