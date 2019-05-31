import React, { Component } from "react";
import axios from "axios";
import Inventory from "./Inventory.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: [],
      loading: true,
      error: ""
    };
    this.updateInventory = this.updateInventory.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/dashboard")
      .then(response => {
        this.setState({ dashboard: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: "An error occurred" });
      });
  }

  updateInventory(newInventory) {
    this.setState({ dashboard: newInventory });
    // alert("lol nope");
  }

  render() {
    const { dashboard } = this.state;
    return (
      <section>
        {this.state.loading ? <p>Loading...</p> : null}
        {this.state.error}
        {dashboard.map((inventory, index) => (
          <Inventory key={index} items={inventory} updateInventory={this.updateInventory} />
        ))}
      </section>
    );
  }
}

export default Dashboard;
