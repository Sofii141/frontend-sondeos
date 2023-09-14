import logo from '../../../Assest/logo.png'
//Icons
import { FaUserShield } from 'react-icons/fa'
import './firstDataSlider.scss'
import { useState } from 'react';

export const FirstDataSlider = ({ handleInputChange, formData }) => {

    // Destructura el formData para acceder a los campos individuales
    const {
        tipo_documento,
        numero_documento,
        nombres_completos,
        apellidos_completos,
        sexo,
        correo_electronico,
        telefono_celular,
        telefono_fijo,
    } = formData;

    const [errores, setErrores] = useState({
        tipo_documento: '',
        numero_documento: '',
        nombres_completos: '',
        apellidos_completos: '',
        sexo: '',
        correo_electronico: '',
        telefono_celular: '',
        telefono_fijo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value); // Notificar al componente principal
        validarCampo(name, value);
    };

    const validarCampo = (nombreCampo, valorCampo) => {
        const erroresActualizados = { ...errores };

        switch (nombreCampo) {
            case 'tipo_documento':
                if (!validarCampo) {
                    erroresActualizados.tipo_documento = 'El tipo de documento es obligatorio';
                }
        }
    }


    return (
        <div className='registerPage flex animate__animated animate__fadeIn'>
            <div className='contanier flex'>

                <div className='formDiv flex'>

                    <div className="headerDiv">
                        <img src={logo} alt="" />
                    </div>

                    <h1>Datos generales</h1>

                    <form action=""
                        className='form grid '
                        onSubmit={(e) => e.preventDefault()}>

                        <div className='contenedor1'>
                            <span className='showMessage'>
                                Login Status
                            </span>

                            <h2>Identificacion</h2>

                            <div className='inputDiv'>
                                <label htmlFor="tipo_documento">Tipo de Documento:</label>
                                <select id="tipo_documento"
                                    name='tipo_documento'
                                    value={tipo_documento}
                                    onChange={handleChange}>
                                    <option value="">Seleccionar</option>
                                    <option value={"cedulaCiudadania"}>Cédula de Ciudadanía</option>
                                    <option value={"tarjetaIdentidad"}>Tarjeta de Identidad</option>
                                    <option value={"cedulaExtranjeria"}>Cédula de Extranjería</option>
                                </select>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="numero_documento">Numero de documento:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='numero_documento'
                                        value={numero_documento}
                                        onChange={handleChange}
                                        name='numero_documento'
                                        placeholder='Numero de documento' />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="nombres_completos">Nombres Completos</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='nombres_completos' name='nombres_completos'
                                        placeholder='Nombres Completos'
                                        value={nombres_completos}
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="apellidos_completos">Apellidos</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='apellidos_completos'
                                        name='apellidos_completos'
                                        placeholder='Apellidos'
                                        value={apellidos_completos}
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className='inputDiv'>
                                <label htmlFor="sexo">Sexo:</label>
                                <select id="sexo" name='sexo'
                                    value={sexo}
                                    onChange={handleChange}>
                                    <option value="">Seleccionar</option>
                                    <option value={"hombre"}>Hombre</option>
                                    <option value={"mujer"}>Mujer</option>
                                    <option value={"intersexual"}>Intersexual</option>
                                    <option value={"indefinido"}>Indefinido</option>
                                    <option value={"prefieroNoDecir"}>Prefiero no decir</option>
                                </select>
                            </div>
                        </div>

                        <div className='contenedor2'>

                            <h2>Contacto</h2>

                            <div className="inputDiv">
                                <label htmlFor="telefono_celular">Telefono Celular</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='telefono_celular'
                                        name='telefono_celular'
                                        placeholder='Telefono Celular'
                                        value={telefono_celular}
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="telefono_fijo">Telefono fijo</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='telefono_fijo' name='telefono_fijo'
                                        placeholder='Telefono Fijo'
                                        value={telefono_fijo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="correo_electronico">Correo Electronico</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='correo_electronico'
                                        name='correo_electronico' placeholder='Correo Electronico'
                                        value={correo_electronico}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>

    );
};
