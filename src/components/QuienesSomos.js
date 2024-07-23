import React from 'react';

const QuienesSomos = () => {
  return (
    <section id="section-quienes-somos" className="section-quienes-somos">
      <br />
      <h1><b>Quienes Somos:</b></h1>
      <div className="relative">
      <img src="https://raw.githubusercontent.com/sandra041992/Imagenes/main/Imagenes/Somos5.jpg" alt="Imagen de inicio" className="imagen" />
    </div>
    <h3><b>Nuestra Historia:</b></h3>
      <p>En Xina-Shop, nos apasiona la moda y creemos que cada mujer merece sentirse única y especial. Desde nuestros comienzos, nos hemos dedicado a ofrecer una selección exclusiva de prendas de alta calidad que combinan elegancia y comodidad. Nuestra misión es empoderar a las mujeres a través de la moda, proporcionando estilos que se adaptan a cada personalidad y ocasión. En Xina-Shop, no solo vendemos ropa; creamos experiencias de estilo y confianza. Únete a nuestra comunidad y descubre la belleza de ser auténtica.

</p>
      <br />
      <br />  
      
      <div className="horario">
        <h2>Horarios - Xina Shop</h2>
        <table>
          <tr>
            <th>Día</th>
            <th>Horario</th>
          </tr>
          <tr>
            <td>Lunes - Viernes</td>
            <td>9:00 - 18:00</td>
          </tr>
          <tr>
            <td>Sábado</td>
            <td>10:00 - 14:00</td>
          </tr>
          <tr>
            <td>Domingo</td>
            <td>Cerrado</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default QuienesSomos;