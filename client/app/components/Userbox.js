import React from "react";
import Selector from "./Selector";
import io from "socket.io-client";
import './Userbox.css';

/*
* interface for the user to set username and open chats
*/
class Userbox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  /*
  * provides functionality for showing typed text in input element
  */
  handleChange(e) {
    this.setState({username: e.target.value});
  }

  /*
  * changes username when user presses 'Enter' key
  */
  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.changeName(e.target.value);
    }
  }

  render() {
    return (
      <div class="box">
        Name: <input type="text" placeholder="username" value={this.state.username}
          onChange={this.handleChange} onKeyPress={this.handleKeyPress} className="user"/>
        <div class="mytxt">Start a Conversation: &emsp;
          <Selector username={this.state.username} users={this.props.users} soc={this.props.soc}/></div>
      </div>
    );
  }
}

export default Userbox;
