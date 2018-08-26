import React, { Component } from "react"
import uuid from "uuid"

class AddFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      name: "",
      expiration: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.addFood = this.addFood.bind(this)
  }
  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  addFood(e) {
    const { name, expiration } = this.state
    e.preventDefault()
    if (!name && !expiration) {
      alert("Please fill out form")
    } else {
      this.props.addFood({ id: uuid(), name, expiration })
      this.setState({
        name: "",
        expiration: "",
        isOpen: false
      })
    }
  }
  render() {
    const { isOpen, name, expiration } = this.state
    return (
      <section>
        <div className="container">
          <button
            style={{ marginTop: "15px" }}
            onClick={() => this.setState({ isOpen: true })}
          >
            Add More
          </button>
          {isOpen && (
            <div className="modal">
              <div className="container">
                <button
                  className="close-modal"
                  onClick={() => this.setState({ isOpen: false })}
                >
                  close
                </button>
                <form onSubmit={this.addFood}>
                  <label htmlFor="name">
                    <p>Name</p>
                    <input
                      id="name"
                      autoFocus="true"
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      value={name}
                    />
                  </label>
                  <label htmlFor="expiration">
                    <p>Expiration</p>
                    <input
                      id="expiration"
                      type="date"
                      name="expiration"
                      onChange={this.handleChange}
                      value={expiration}
                    />
                  </label>
                  <button type="submit">Add</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default AddFood
