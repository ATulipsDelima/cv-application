import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component{
  
  render(){
    return(
      <div> 
        <PersonalInfo/>

      </div>
      
    )
  }
}

class PersonalInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      first: '',
      last: '',
      title: '',
      photo: '',
      address: '',
      phone: '',
      email:'',
      description:'',

      info: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name] : value,
    })
    

    console.log(this.state.first);
    console.log(this.state.info);
  }

  render(){
    const { first, last, title, address, phone, description } = this.state
    return(
      <div>
        <form>
        <input type="text" id="first-name" placeholder='First Name' name="first" onChange={this.handleChange}/>
        <input type="text" id="last-name" placeholder='Last Name' name="last" onChange={this.handleChange}/>
        <input type="text" id="title" placeholder='Title' name="title" onChange={this.handleChange}/>
        <input type="text" id="photo" placeholder='Photo' name="photo" onChange={this.handleChange}/>
        <input type="text" id="address" placeholder='Address' name="address" onChange={this.handleChange}/>
        <input type="text" id="phone" placeholder='Phone' name="phone" onChange={this.handleChange}/>
        <input type="text" id="email" placeholder='Email' name="email" onChange={this.handleChange}/>
        <input type="text" id="description" placeholder='descrption' name="description" onChange={this.handleChange}/>
        <button id="add">Add</button>
        <button id="delete">Delete</button>
      </form>
      <Overview first={first} last={last} title={title} address={address} phone={phone} description={description} />
      </div>
      
    )
  }
}

export default App;
