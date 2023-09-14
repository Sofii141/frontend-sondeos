import './publicaciones.scss'
import user from '../../../../Assest/user.png'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FiMessageCircle } from 'react-icons/fi'

const mostrarAlerta = () => {
    Swal.fire({
        title: '¿Estás seguro de tu respuesta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            // Lógica a ejecutar cuando el usuario hace clic en "Aceptar"
            Swal.fire('¡Éxito!', 'Tu respuesta ha sido enviada correctamente.', 'success');
        }
    });
};

export const Publicaciones = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        setIsOpen(true);
    };

    const handleClick = (e) => {
        e.preventDefault(); // Evita la recarga de la página
        // Realiza aquí las acciones que deseas al hacer clic en el botón
        console.log('Botón clickeado');
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (

        <div className='body'>
            <div class="card">
                <div class="card-header">
                    <img src={user} alt="Usuario" />
                    <h2>Tema</h2>
                </div>

                <div class="card-form">
                    <form onSubmit={handleClick}>
                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name" placeholder="Tu nombre" />
                        </div>
                        <div class="form-group">
                            <label for="comment">Comentario:</label>
                            <textarea id="comment" name="comment" placeholder="Tu comentario"></textarea>
                        </div>
                        <button onClick={openModal}>Publicar</button>

                        {isOpen && (
                            mostrarAlerta()
                        )
                        }
                    </form>
                </div>

                <div class="card-footer">
                    <div className='commentsHandle'>
                        <div class="likes">{0} Respuestas</div>

                        <FiMessageCircle className='icon'></FiMessageCircle>

                    </div>


                    <div class="caption">
                        <strong>Nombre de Publicacion:</strong> Descripción de la publicación.
                    </div>
                    <div class="comments">
                        <div class="comment">
                            <strong>Comentario 1:</strong> si
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};
