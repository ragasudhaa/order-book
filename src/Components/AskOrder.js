import React from 'react';
import AbstractOrder from './AbstractOrder';

class AskOrder extends AbstractOrder {

  render() {
    return (
      <tr className="ask">        
        <td>{this.props.price}</td>
        <td>{this.props.total}</td>
        <td className="fill-ask" style={{backgroundSize: this.getPercentage() + "% 100%"}}>
          {this.props.cumulative}
        </td>
      </tr>
    );
  }
}

export default AskOrder;
