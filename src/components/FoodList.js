import React from "react"
import moment from "moment"

const FoodList = ({ foods, deleteFood }) => {
  if (!foods.length) {
    return (
      <section>
        <div className="container text-center">
          <p>No More Expired Food!</p>
        </div>
      </section>
    )
  }
  const foodItem = foods.map(({ id, name, expiration }) => (
    <li key={id} style={{ padding: "10px 0", display: "flex" }}>
      {name} -
      <span style={{ color: "gray", marginLeft: "8px" }}>
        {moment(expiration, "YYYYMMDD").fromNow()}
      </span>
      <button style={{ marginLeft: "auto" }} onClick={() => deleteFood(id)}>
        delete
      </button>
    </li>
  ))
  return (
    <section style={{ marginTop: "40px" }}>
      <div className="container">
        <ul style={{ listStyle: "none", padding: 0 }}>{foodItem}</ul>
      </div>
    </section>
  )
}

export default FoodList
