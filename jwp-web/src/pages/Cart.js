import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import './Cart.css';

const Cart = ({ cart, setCart }) => {  
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    const doc = new jsPDF();
    
    doc.autoTable({
      head: [['Product Name', 'Price', 'Quantity', 'Total']],
      body: cart.map(item => [
        item.name,
        `Rp. ${item.price.toLocaleString()}`,
        item.quantity,
        `Rp. ${(item.price * item.quantity).toLocaleString()}`
      ]),
    });


    doc.text(`Total Price: Rp. ${totalPrice.toLocaleString()}`, 10, doc.previousAutoTable.finalY + 10);
    doc.save('cart.pdf');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>Rp. {item.price.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>Rp. {(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <button className="remove-button" onClick={() => handleRemoveItem(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: Rp. {totalPrice.toLocaleString()}</h3>
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
