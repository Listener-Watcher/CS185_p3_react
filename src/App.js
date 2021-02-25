import React from 'react';
import './style.css';
import TabList from './TabList.js'
import Body from './Body.js'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Tab_Id : 1
    }
    this.changetab = (id) =>{
      this.setState({
          Tab_Id :id
        })
    }
  }
  render() {
    const tabs = [{
      id:1,
      title:'Home'
    },
    {
      id:2,
      title:'Images'
    },
    {
      id:3,
      title:'Videos'
    },
    {
      id:4,
      title:'Table'
    },
    {
      id:5,
      title:'Email'
    }]
    return  (
      <div>
        <h1 className="nav">Welcome to My website</h1>
        <div className='nav'> 
          <TabList tabs = {tabs} activetab = {this.state.Tab_Id} ctab ={this.changetab}/>
        </div>
        <div>
          <Body activetab={this.state.Tab_Id}/>
        </div>

      </div>
    );
  }
}

export default App;
