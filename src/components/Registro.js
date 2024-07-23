import React, { useState, useEffect } from 'react';

const Registro = () => {
  // Estado para manejar el nombre del usuario
  const [nombre, setNombre] = useState('');
  // Estado para manejar el correo electrónico del usuario
  const [email, setEmail] = useState('');
  // Estado para manejar el término de búsqueda
  const [busqueda, setBusqueda] = useState('');
  // Estado para almacenar los usuarios registrados
  const [usuarios, setUsuarios] = useState([]);
  // Estado para almacenar los resultados de la búsqueda
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  // Cargar usuarios desde localStorage cuando el componente se monta
  useEffect(() => {
    // Leer los usuarios guardados en localStorage y convertirlos de vuelta a un objeto JavaScript
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Actualizar el estado con los usuarios cargados
    setUsuarios(usuariosGuardados);
  }, []);

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Crear un nuevo usuario con el nombre y correo proporcionados
    const nuevoUsuario = { nombre, email };
    // Añadir el nuevo usuario al array de usuarios
    const usuariosActuales = [...usuarios, nuevoUsuario];

    // Guardar los usuarios actualizados en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosActuales));

    // Actualizar el estado con los usuarios actuales
    setUsuarios(usuariosActuales);

    // Limpiar el formulario
    alert(`Gracias ${nombre} por registrarte con el correo ${email}!`);
    setNombre('');
    setEmail('');
  };

  // Función para buscar usuarios que coincidan con el término de búsqueda
  const buscarUsuario = () => {
    // Filtrar usuarios que contengan el término de búsqueda en su nombre (sin distinguir entre mayúsculas y minúsculas)
    const resultados = usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    return resultados;
  };

  // Manejar el cambio en el campo de búsqueda
  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value); // Actualizar el estado con el nuevo valor del campo de búsqueda
  };

  // Manejar el clic en el botón de búsqueda
  const handleBuscar = () => {
    // Obtener los resultados de la búsqueda
    const resultados = buscarUsuario();
    // Actualizar el estado con los resultados de la búsqueda
    setResultadosBusqueda(resultados);
  };

  return (
    <section id="section-registro" className="section-registro">
      <br />
      <h2><b>Regístrate aquí</b></h2>
      <p>¡Regístrate para recibir información de nuestras promociones y descuentos!</p>
      <div className="relative">
        <img src="https://raw.githubusercontent.com/sandra041992/Imagenes/main/Imagenes/CONTACTOS.jpg" alt="Imagen de inicio" className="imagen" />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
        <span id="error-nombre" style={{ color: 'red', display: 'none' }}>
          El nombre no puede contener números.
        </span>
        <br />
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <br />
        <button type="submit" className="btn">ENVIAR</button>
      </form>
      <br />
      <br />

      <div>
        <h3>Buscar Usuario</h3>
        <input 
          type="text" 
          value={busqueda} 
          onChange={handleBusquedaChange} 
          placeholder="Buscar por nombre" 
        />
        <button onClick={handleBuscar}>Buscar</button>
        <div>
          {resultadosBusqueda.length > 0 ? (
            <ul>
              {/* Mostrar la lista de usuarios que coinciden con la búsqueda */}
              {resultadosBusqueda.map((usuario, index) => (
                <li key={index}>{usuario.nombre} - {usuario.email}</li>
              ))}
            </ul>
          ) : (
            <p>Aun no tenemos resultados.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registro;