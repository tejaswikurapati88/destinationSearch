// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {details} = this.props
    const {name, imgUrl} = details
    return (
      <li className="list-container">
        <img src={imgUrl} alt={name} className="img-class" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
