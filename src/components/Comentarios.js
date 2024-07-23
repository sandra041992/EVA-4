// Aqui estoy importando React y los hooks useState y useEffect.
import React, { useState, useEffect } from 'react';

// Define el componente Comentarios.
// Declara los estados comments para almacenar los comentarios, newComment para el nuevo comentario, editingId para el ID del comentario que se está editando, y editedComment para almacenar los datos del comentario editado.
const Comentarios = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: '', rating: '', content: '' });
  const [editingId, setEditingId] = useState(null);
  const [editedComment, setEditedComment] = useState({ id: null, author: '', rating: '', content: '' });

  // Recuperar comentarios desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Guardar comentarios en localStorage
  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };
  

  // Define la función addComment para agregar un nuevo comentario. Primero, verifica que todos los campos del nuevo comentario estén completos. Si falta algún campo, muestra una alerta y detiene la ejecución.
  const addComment = () => {
    if (!newComment.author || !newComment.rating || !newComment.content) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Obtiene la fecha actual en formato local y el ID del nuevo comentario.
    const currentDate = new Date().toLocaleString();
    const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
    
    // Crea un nuevo arreglo de comentarios que incluye el nuevo comentario y actualiza el estado comments con el nuevo arreglo.
    const updatedComments = [
      ...comments,
      { id: newId, author: newComment.author, rating: parseInt(newComment.rating), content: newComment.content, date: currentDate }
    ];


    // Guarda los comentarios actualizados en localStorage.
    setComments(updatedComments);
    saveCommentsToLocalStorage(updatedComments);

    // Limpia el formulario de nuevo comentario.
    setNewComment({ author: '', rating: '', content: '' });
  };

  
  // Define la función editComment para iniciar la edición de un comentario. Establece editingId al ID del comentario que se está editando y llena editedComment con los datos del comentario.
  const editComment = (comment) => {
    setEditingId(comment.id);
    setEditedComment({ id: comment.id, author: comment.author, rating: comment.rating, content: comment.content });
  };


  // Define la función updateComment para actualizar un comentario editado. Primero, crea un nuevo arreglo de comentarios con el comentario editado y los comentarios restantes. Luego, actualiza el estado comments con el nuevo arreglo, guarda los comentarios actualizados en localStorage y cancela la edición.
  const updateComment = () => {
    const updatedComments = comments.map(comment => comment.id === editedComment.id ? editedComment : comment);
    
    // Guarda los comentarios actualizados en localStorage.
    setComments(updatedComments);
    saveCommentsToLocalStorage(updatedComments);
    cancelEdit();
  };


  // Define la función deleteComment para eliminar un comentario. Muestra un mensaje de confirmación para confirmar la eliminación. Si el usuario confirma, crea un nuevo arreglo de comentarios que excluye el comentario a eliminar, actualiza el estado comments con el nuevo arreglo, guarda los comentarios actualizados en localStorage y cancela la edición.
  const deleteComment = (id) => {
    const shouldDelete = window.confirm('¿Estás seguro de eliminar este comentario?');
    if (shouldDelete) {
      const updatedComments = comments.filter(comment => comment.id !== id);
      
      // Guarda los comentarios actualizados en localStorage.
      setComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments);
      cancelEdit();
    }
  };
  

  // Define la función cancelEdit para cancelar la edición de un comentario. Restablece editingId a null y editedComment a un objeto vacío.
  const cancelEdit = () => {
    setEditingId(null);
    setEditedComment({ id: null, author: '', rating: '', content: '' });
  };
  

  // Define la función downloadComments para descargar los comentarios en formato JSON. Convierte el arreglo de comentarios en una cadena JSON, crea un enlace de descarga con los datos JSON y lo simula haciendo clic en él.
  const downloadComments = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(comments));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "comments.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  

  // Renderiza el componente Comentarios. Muestra los comentarios existentes, el formulario para agregar un nuevo comentario y el botón para descargar los comentarios. Si hay comentarios, muestra cada comentario con la opción de editar o eliminar. Si se está editando un comentario, muestra un formulario de edición con los datos del comentario.
  return (
    <section id="section-comentarios" className="section-comentarios">
      <br />
      <h2><b>Comentarios de nuestros clientes</b></h2>
      <div id="comments">
        <h1>¡ Comenta con nosotros !</h1>
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="info">
                <span>{comment.author}</span> - <span>{comment.date}</span>
                <div className="rating">
                  {[...Array(comment.rating)].map((_, index) => (
                    <span key={index} className="fa fa-star"></span>
                  ))}
                </div>
              </div>
              <p>{comment.content}</p>
              <button onClick={() => editComment(comment)}>Editar</button>
              <br />
              <br />
              <button onClick={() => deleteComment(comment.id)}>Eliminar</button>

              {comment.id === editingId && (
                <div className="edit-form">
                  <h3>Editar Comentario</h3>
                  <label htmlFor="edit-author">Autor:</label>
                  <input type="text" id="edit-author" value={editedComment.author} onChange={e => setEditedComment({ ...editedComment, author: e.target.value })} required />
                  <br />
                  <label htmlFor="edit-rating">Valoración:</label>
                  <select id="edit-rating" value={editedComment.rating} onChange={e => setEditedComment({ ...editedComment, rating: e.target.value })} required>
                    <option disabled value="">Selecciona una valoración</option>
                    {[...Array(5)].map((_, index) => (
                      <option key={index} value={index + 1}>{index + 1} estrella(s)</option>
                    ))}
                  </select>
                  <br />
                  <br />
                  <label htmlFor="edit-content">Comentario:</label>
                  <textarea id="edit-content" value={editedComment.content} onChange={e => setEditedComment({ ...editedComment, content: e.target.value })} required></textarea>
                  <br />
                  <br />
                  <button onClick={updateComment}>Actualizar</button>
                  <br />
                  <br />
                  <button onClick={cancelEdit}>Cancelar</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No hay comentarios aún.</p>
        )}

        
        <div className="new-comment">
          <h2>Agregar un Comentario</h2>
          <label htmlFor="new-author">Ingresa tu nombre:</label>
          <input type="text" id="new-author" value={newComment.author} onChange={e => setNewComment({ ...newComment, author: e.target.value })} required />
          <br />
          <br />
          <label htmlFor="new-rating">Valoración:</label>
          <select id="new-rating" value={newComment.rating} onChange={e => setNewComment({ ...newComment, rating: e.target.value })} required>
            <option disabled value="">Danos una calificación</option>
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1} estrella(s)</option>
            ))}
          </select>
          <br />
          <br />
          <label htmlFor="new-content">Comentario:</label>
          <textarea id="new-content" value={newComment.content} onChange={e => setNewComment({ ...newComment, content: e.target.value })} required></textarea>
          <br />
          <br />
          <button onClick={addComment}>Enviar Comentario</button>
          <button onClick={downloadComments}>Descargar Comentarios</button>
        </div>
      </div>
    </section>
  );
};

export default Comentarios;