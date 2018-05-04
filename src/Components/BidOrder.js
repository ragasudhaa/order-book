import React from 'react';
import AbstractOrder from './AbstractOrder';

class BidOrder extends AbstractOrder {

  render() {
    return (
      <tr className="bid">
        <td>{this.props.price}</td>
        <td>{this.props.total}</td>
        <td className="fill-bid" style={{backgroundSize: this.getPercentage() + "% 100%"}}>
          {this.props.cumulative}
        </td>
      </tr>
    );
  }
}

export default BidOrder;
