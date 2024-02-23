import React, { Component } from "react";
import { DeleteButton } from "./DeleteButton";
import { ModalButton } from "../ModalBox/ModalButton";

class Card extends Component {                 // Class Component
  render() {
    const { img, title, price, productid } = this.props;
    return (
      <div id={productid} className="Card">
        <img
          width="150"
          className="card-image"
          src={img}
          alt="Resim Görüntülenemiyor."
        ></img>
        <div className="card-title">{title}</div>
        <div className="card-price">{price} ₺</div>
        <hr className="hrr" />
        <div className="card-edit-del">
          <ModalButton productid={productid} />
          <DeleteButton productid={productid} content="delete" />
        </div>
      </div>
    );
  }
}

export { Card };
