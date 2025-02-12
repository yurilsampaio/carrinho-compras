import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css'

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cart-item">
            <div className="item">
                <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <div className="item-info">
                        <span className="item-price">Un. R$ {item.price.toFixed(2)}</span>
                        <span className="item-quantity">Qtd. {item.quantity}</span>
                    </div>
                </div>
                <span className="item-total">R$ {item.total.toFixed(2)}</span>
            </div>
            <Button variant="danger" onClick={onRemove}>
                <i className="bi bi-trash"></i>
            </Button>
        </div>
    );
};

export default CartItem;