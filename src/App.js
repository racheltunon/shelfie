import React, { Component } from 'react';
import Dashboard from './components/Dasboard'
import Form from './components/Form'
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Inventory'
    }
    this.changeView = this.changeView.bind(this);
  }
  changeView(newView) {
    this.setState({ view: newView });
  }
  

  render() {
    console.log(this.state.view)
    return(
      <div>
        <nav className="nav">
          <h1>SHELFIE</h1>
            <div className="navB">
              <button className={this.state.view === "Inventory" ? "current" : ""}
                onClick={() => this.setState({ view: "Inventory" })}>dashboard</button>
              <button className={this.state.view === "Inventory" ? "current" : ""}
                onClick={() => this.setState({ view: "Form" })}>add inventory</button>
            </div>
        </nav>
        {this.state.view === "Inventory" ? (
          <Dashboard 
          />
        ) : (
          <Form changeView={this.changeView} />
        )}
          
      </div>
    )
  }
}
