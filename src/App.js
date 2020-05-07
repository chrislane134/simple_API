import React, {Component} from 'react';
import Contacts from './components/contacts';  //import from contacts.js
import './App.css';


class App extends Component {


  state = { //object that holds data pending to be rendered. where we sote output from API call
    contacts: []
  }
  

  componentDidMount() {  //use componentDidMount method 
      fetch('http://jsonplaceholder.typicode.com/users') //will make a GET request to the endpoint 
     
    .then(res => res.json()) //parses the output to JSON
    .then((data) => {
      this.setState({contacts: data}) //sets the value of our state to the output from the APIC and catch will console.log any errors.
    })
    .catch(console.log)
  }

  render() {
    return(
        <Contacts contacts ={this.state.contacts} /> //pass our component Contacts along withe the contacts state to be rendered.
    );
  }
}


export default App;
