import React from 'react';
import './style.css';
class Tab extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
    const addclass= () =>{
        if(this.props.out.id === this.props.activetab){
            return ('navbar_active');
        }
        else{
            return ('navbar');
        }
    };

    return (
        <div className = {addclass()} onClick = {this.props.ctab.bind(this,this.props.out.id)}>{this.props.out.title}</div>
        );
  }
}

export default Tab;