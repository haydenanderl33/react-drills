import React, {Component} from 'react';
import ToDo from "./ToDo";

export default class List extends Component {
  render() {
    let list = this.props.tasks.map((e, i) => {
      return <ToDo task={e} />;
    });
    
    return <div>{list}</div>;
  }
}