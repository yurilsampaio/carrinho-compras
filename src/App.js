import './styles.css'
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Button, Table } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddItemModal from "./components/AddItemModal/AddItemModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('carrinho-compras-items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('carrinho-compras-items', JSON.stringify(items));
  };

  const handleAddItem = (name, quantity, price) => {
    const newItems = [...items, {name, quantity, price, total: quantity * price}]
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  const handleClearCart = () => {
    if (window.confirm('Você deseja finalizar a compra e limpar o carrinho?')) {
      setItems([]);
      localStorage.removeItem('carrinho-compras-items');
    }
  };

  const totalPrice = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="App">
      <Header />
      <main className='main-content'>
        <div className='d-flex justify-content-center my-4'>
          <Button variant='success' onClick={() => setShowModal(true)}>Adicionar Item</Button> 
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Vlr. UN</th>
              <th>Qtd.</th>
              <th>Vlr. Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>R$ {item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>R$ {item.total.toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemoveItem(index)}>
                    <i className='bi bi-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {items.length > 0 && (
          <div className='fixed-bottom'>
            <div className='d-flex justify-content-center my-2'>
                <p>Total: R$ {totalPrice.toFixed(2)}</p>
            </div>
            <div className='d-flex justify-content-center'>
              <Button variant='success' onClick={handleClearCart}>Finalizar Compra</Button>
            </div>
          </div>
        )}
      </main>
      <AddItemModal show={showModal} handleClose={() => setShowModal(false)} addItem={handleAddItem} />
    </div>
  );
}

export default App;
