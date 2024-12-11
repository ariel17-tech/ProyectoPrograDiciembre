import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const productsData = [
  { id: 1, name: 'Smartphone Samsung Galaxy S23', price: 85000, seller: 'ElectroShop' },
  { id: 2, name: 'Laptop HP Pavilion 15', price: 60000, seller: 'TechWorld' },
  { id: 3, name: 'Auriculares Bose QuietComfort 45', price: 23000, seller: 'AudioPlus' },
  { id: 4, name: 'Cámara Canon EOS 90D', price: 120000, seller: 'PhotoPro' },
  { id: 5, name: 'Reloj Apple Watch Series 8', price: 55000, seller: 'GadgetsStore' },
  { id: 6, name: 'Monitor Dell UltraSharp 27"', price: 40000, seller: 'TechZone' },
  { id: 7, name: 'Mochila North Face Recon', price: 15000, seller: 'OutdoorGear' },
  { id: 8, name: 'Zapatos Nike Air Max 270', price: 25000, seller: 'Sportify' },
  { id: 9, name: 'Teclado Logitech G Pro', price: 12000, seller: 'GamingHub' },
  { id: 10, name: 'Silla Gaming Secretlab Titan', price: 45000, seller: 'GamerZone' },
  { id: 11, name: 'Smart TV LG OLED 55"', price: 75000, seller: 'TechMart' },
  { id: 12, name: 'Cafetera Nespresso Vertuo', price: 22000, seller: 'HomeEssentials' },
  { id: 13, name: 'Secadora Bosch Serie 6', price: 30000, seller: 'HomeAppliances' },
  { id: 14, name: 'Lentes Ray-Ban Wayfarer', price: 18000, seller: 'FashionHub' },
  { id: 15, name: 'Aspiradora Dyson V11', price: 40000, seller: 'CleanTech' },
  { id: 16, name: 'Licuadora Vitamix 5200', price: 27000, seller: 'KitchenPro' },
  { id: 17, name: 'Móvil Xiaomi Redmi Note 11', price: 15000, seller: 'MobileStore' },
  { id: 18, name: 'Tablet Samsung Galaxy Tab S8', price: 42000, seller: 'TechDeals' },
  { id: 19, name: 'Juego de sábanas Queen 100% algodón', price: 9000, seller: 'HomeStyle' },
  { id: 20, name: 'AirPods Pro 2', price: 30000, seller: 'AppleStore' }
];

const images = [
  "https://images.pexels.com/photos/3616980/pexels-photo-3616980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13706809/pexels-photo-13706809.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Home = ({ isAuthenticated, onLogout, setCart }) => {
  const [cart, setLocalCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
    }, []);


  const addToCart = (product) => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para agregar productos al carrito.');
      return;
    }

    if (cart.length < 20) {
      setLocalCart((prevCart) => {
        const updatedCart = [...prevCart, product];
        setCart(updatedCart); // Actualiza el carrito en App.js
        return updatedCart;
      });
      setNotification(`Agregado al carrito: ${product.name}`);
    } else {
      setNotification(`No se pueden agregar más de 20 productos al carrito.`);
    }
    setTimeout(() => setNotification(''), 3000);
  };

  const removeFromCart = (productId) => {
    setLocalCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      setCart(updatedCart); // Actualiza el carrito en App.js
      return updatedCart;
    });
    const removedProduct = cart.find(item => item.id === productId);
    setNotification(`Eliminado del carrito: ${removedProduct.name}`);
    setTimeout(() => setNotification(''), 3000);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-left">Populares</h2>
        <div className="carousel-container position-relative" style={{ maxWidth: '90%', margin: '0 auto', overflow: 'hidden' }}>
          <div className="d-flex justify-content-center align-items-center position-relative">
            {images.map((image, index) => {
              const isCentral = index === currentIndex;
              return (
                <div
                  key={index}
                  className="carousel-image-container"
                  style={{
                    opacity: isCentral ? 1 : 0.5,
                    transform: isCentral ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.5s ease-in-out',
                    margin: '0 15px',
                    width: '100%',
                    height: '300px',
                    position: 'relative',
                    zIndex: isCentral ? 2 : 1,
                  }}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Imagen ${index + 1}`}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-dark position-absolute"
            style={{
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              zIndex: 3,
            }}
            onClick={handlePrev}
          >
            ‹
          </button>
          <button
            className="btn btn-dark position-absolute"
            style={{
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              zIndex: 3,
            }}
            onClick={handleNext}
          >
            ›
          </button>
        </div>
        <h2 className="text-left mt-4">Productos</h2>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Título</th>
              <th>Precio (₡)</th>
              <th>Vendedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>₡{product.price}</td>
                <td>{product.seller}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => addToCart(product)}>Agregar al Carrito</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {notification && (
          <div className="alert alert-info" role="alert">
            {notification}
          </div>
        )}

        <button className="btn btn-danger rounded-circle position-fixed" style={{ top: '70px', right: '20px', width: '60px', height: '60px' }} onClick={toggleCart}>
          <span className="text-white">🛒 {cart.length}</span> </button>

        {showCart && (
          <div className="cart-popup" style={{ zIndex: 9999, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
            <div className="cart-popup-content">
              <h2>Carrito de Compras</h2>
              {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <button className="btn btn-secondary" onClick={toggleCart}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;