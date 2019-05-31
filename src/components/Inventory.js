import React from "react";
import axios from "axios";

function Inventory(props) {
  return (
    <article className="newInventory">
      <img
        src={props.inventory.image}
        alt={props.inventory.name}
     
         
       
      />
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h3>{props.inventory.name}</h3>
        {/* <button
          onClick={() => {
            axios.delete("/api/dashboard" + props.inventory.name).then(response => {
              props.updateInventory(response.data);
            });
          }}
        >
          Delete
        </button> */}
      </section>
    </article>
  );
}

export default Inventory;
