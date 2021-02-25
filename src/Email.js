import React from 'react';
import './style.css';
class Email extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:''
  };
}
  check_email = (content)=>{
    let check = false;
    let tail=-1;
    for(var x = 0;x<content.length;x++){

        if(content[x]==='@'){
            tail=x;
        }
    }
    if((content.includes(".edu",tail)||content.includes(".com",tail))&&tail!==-1){
        check = true;
    }
    if(check){
      alert("This email is valid");
    }else{
      alert("This email is not valid");
    }
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.check_email(this.state.email);
  }
  myChangeHandler = (event) => {
    this.setState({email:event.target.value});
  }
  render()
  {
    return (
      <div>
        <form onSubmit={this.mySubmitHandler} id ="form1">
            <label htmlFor="fname">Email:</label>
            <input type="text" id=
            "email" onChange={this.myChangeHandler}/>
            <input type="submit" id ="submit" value="Submit" name="submit"/>
        </form>
      </div>
    );
  }
}

export default Email;