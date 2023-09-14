import logo from '../../../Assest/logo.png'
//Icons
import { FaUserShield } from 'react-icons/fa'
import './firstDataSlider.scss'

export const ThreeDataSlider = ({ handleInputChange, formData }) => {

    const {
        condicion_discapacidad,
        estrato_residencial,
        ultimo_nivel_educativo,
        dispositivo_tecnologico,
        conectividad_internet,
        password,
        password_confirmation, 
    } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
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
                        className='form grid'
                        onSubmit={(e) => e.preventDefault()}>

                        <div className='contenedor1'>
                            <span className='showMessage'>
                                Login Status
                            </span>

                            <h2>Escolaridad</h2>

                            <div className="inputDiv">
                                <label htmlFor="ultimo_nivel_educativo">Ultimo nivel educativo alcanzado:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='ultimo_nivel_educativo'
                                        name='ultimo_nivel_educativo'
                                        value={ultimo_nivel_educativo}
                                        onChange={handleChange}
                                        placeholder='Ultimo nivel educativo alcanzado'
                                    />
                                </div>
                            </div>


                            <h2>Acceso y conectividad a medios tecnologicos</h2>


                            {/* HERE: PREGUNTAR AL BACKEND */}
                            <div className='inputDiv'>
                                <label htmlFor="dispositivo_tecnologico">Si, la respuesta anterior fue afirmativa ¿cual o cuales?</label>
                                <select id="dispositivo_tecnologico" name='dispositivo_tecnologico'
                                    value={dispositivo_tecnologico}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value={"tMovil"}>T.Movil</option>
                                    <option value={"computador"}>Computador</option>
                                    <option value={"otro"}>otro</option>
                                    <option value={"no"}>No tengo</option>
                                </select>
                            </div>

                            <div className='inputDiv'>
                                <label htmlFor="conectividad_internet">¿Cuenta con conectividad a internet?:</label>
                                <select id="conectividad_internet"
                                    name='conectividad_internet'
                                    value={conectividad_internet}
                                    onChange={handleChange}>
                                    <option value="">Seleccionar</option>
                                    <option value={"si"}>Si</option>
                                    <option value={"no"}>No</option>
                                </select>
                            </div>
                        </div>



                        <div className='contenedor2'>

                            <h2>Enfoque Poblacional</h2>


                            <div className="inputDiv">
                                <label htmlFor="condicion_discapacidad">Condicion de Discapacidad:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='condicion_discapacidad'
                                        name='condicion_discapacidad'
                                        onChange={handleChange}
                                        value={condicion_discapacidad}
                                        placeholder='Condicion de Discapacidad'
                                    />
                                </div>
                            </div>

                            <h2>Socioeconomico</h2>


                            <div className="inputDiv">
                                <label htmlFor="estrato_residencial">Estrato de residencia: </label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="text" id='estrato_residencial'
                                        name='estrato_residencial'
                                        value={estrato_residencial}
                                        onChange={handleChange}
                                        placeholder='Estrato de residencia'
                                    />
                                </div>
                            </div>

                            <h2>Crea una contraseña</h2>

                            <div className="inputDiv">
                                <label htmlFor="password">Password</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="password" id='password'
                                        name='password'
                                        value={password}
                                        onChange={handleChange}
                                        placeholder='Crea una contraseña'
                                    />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="password_confirmation">Password</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input type="password" id='password_confirmation'
                                        name='password_confirmation'
                                        value={password_confirmation}
                                        onChange={handleChange}
                                        placeholder='Crea una contraseña'
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