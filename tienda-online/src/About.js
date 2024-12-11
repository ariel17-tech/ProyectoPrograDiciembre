import React from 'react';
import './About.css'; 
import aboutImage from './imgs/about.png'; 

const About = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Sobre nosotros</h2>
      <div className="row">
        <div className="col-md-8">
          <p>
            ¡Bienvenido a nuestra tienda virtual en San José, Costa Rica! Nos enorgullece ser tu destino de confianza para todas tus necesidades de compras y ventas en línea. Nuestra misión es ofrecerte una experiencia de compra excepcional, con una amplia variedad de productos de alta calidad a precios inmejorables.
            <br /><br />
            En nuestra tienda, encontrarás una selección cuidadosamente curada de artículos que van desde tecnología y electrónica hasta moda, hogar y jardín, y mucho más. Nos esforzamos por mantenernos al día con las últimas tendencias y novedades del mercado para asegurarnos de que siempre encuentres lo que buscas. Además de ofrecer productos de calidad, también nos comprometemos a brindarte un servicio al cliente excepcional. Nuestro equipo está siempre disponible para ayudarte con cualquier consulta o necesidad que puedas tener, asegurándonos de que tu experiencia de compra sea lo más fluida y agradable posible.
            <br /><br />
            Entendemos la importancia de la conveniencia y la accesibilidad, por lo que hemos diseñado nuestra plataforma para que sea fácil de navegar y utilizar. Ya sea que estés comprando desde tu computadora, tableta o teléfono móvil, puedes estar seguro de que tu experiencia será rápida y sin complicaciones.
            <br /><br />
            Nos enorgullece ofrecer precios competitivos para que puedas obtener el mejor valor por tu dinero. Creemos que todos merecen acceso a productos de calidad sin tener que gastar una fortuna, y trabajamos arduamente para hacer esto posible. Además, si tienes productos que deseas vender, nuestra plataforma también te ofrece la oportunidad de hacerlo de manera sencilla y eficiente. Nos encargamos de todo el proceso, desde la publicación de tus productos hasta la gestión de las ventas, para que puedas concentrarte en lo que realmente importa.
            <br /><br />
            Gracias por elegirnos como tu tienda virtual de confianza. Estamos emocionados de ser parte de tu viaje de compras y ventas en línea, y esperamos poder servirte durante muchos años más. ¡Feliz compra!
          </p>
        </div>
        <div className="col-md-4">
          <img 
            src={aboutImage}
            alt="Descripción de la imagen"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;