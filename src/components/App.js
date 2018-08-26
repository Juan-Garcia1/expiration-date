import React, { Fragment, Component } from "react"
import Header from "./Header"
import FoodList from "./FoodList"
import uuid from "uuid"
import AddFood from "./AddFood"
import "../styles/styles.scss"
class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: [
        {
          id: uuid(),
          name: "milk",
          expiration: "20180829"
        },
        {
          id: uuid(),
          name: "bread",
          expiration: "20180830"
        }
      ]
    }
    this.addFood = this.addFood.bind(this)
    this.deleteFood = this.deleteFood.bind(this)
  }
  addFood(food) {
    const foods = [...this.state.foods, food]
    this.setState({
      foods
    })
  }
  deleteFood(id) {
    const foods = this.state.foods.filter(food => food.id != id)
    this.setState({
      foods
    })
  }
  render() {
    const { foods } = this.state
    return (
      <Fragment>
        <Header />
        <AddFood addFood={this.addFood} />
        <FoodList foods={foods} deleteFood={this.deleteFood} />
      </Fragment>
    )
  }
}

export default App
