import React, { useState } from "react";
import { Modal, Button, Form, FormGroup } from 'react-bootstrap';

function AddItemModal({ show, handleClose, addItem }) {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState(0);

    const clearItemValues = () => {
        setItemName('');
        setItemQuantity(1);
        setItemPrice(0);
    }

    const handleSubmit = () => {
        addItem(itemName, itemQuantity, itemPrice);
        clearItemValues();
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formItemName">
                        <Form.Label>Item</Form.Label>
                        <Form.Control
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Nome do Item"
                        />
                    </Form.Group>
                    <FormGroup controlId="formItemQuantitty">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control
                            type="number"
                            value={itemQuantity}
                            onChange={(e) => setItemQuantity(parseInt(e.target.value))}
                            min='1'
                        />
                    </FormGroup>
                    <FormGroup controlId="formItemPrice">
                        <Form.Label>Valor Unitário</Form.Label>
                        <Form.Control
                            type="number"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(parseFloat(e.target.value))}
                            step='0.01'
                        />
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleSubmit}>
                    Adicionar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemModal;