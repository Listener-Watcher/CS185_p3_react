import React from 'react';
import Tab from './Tab.js'
class TabList extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
    return(
        this.props.tabs.map((tab)=>
            <Tab out={tab} activetab = {this.props.activetab} ctab ={this.props.ctab}/>
        )
    );
  }
}

export default TabList;