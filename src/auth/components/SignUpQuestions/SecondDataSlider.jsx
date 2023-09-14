import logo from '../../../Assest/logo.png'
import { FaUserShield } from 'react-icons/fa'
import './secondDataSlider.scss'

export const SecondDataSlider = ({ handleInputChange, formData }) => {

    const {
        municipio,
        direccion,
        barrio_vereda,
        fecha_nacimiento,
        etnia,
        regimen_afiliacion,
    } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value); // Notificar al componente principal
    };

    return (
        <div className='registerPage flex animate__animated animate__fadeIn'>
            <div className='contanier flex'>
                <div className='formDiv flex'>
                    <div className="headerDiv">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Datos generales</h1>
                    <form action="" className='form grid' onSubmit={(e) => e.preventDefault()}>
                        <div className='contenedor1'>
                            <span className='showMessage'>
                                Login Status
                            </span>
                            <h2>Geográficas</h2>
                            <div className="inputDiv">
                                <label htmlFor="municipio">Municipio:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input
                                        type="text"
                                        id='municipio'
                                        name='municipio'
                                        placeholder='Municipio'
                                        value={municipio}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="direccion">Dirección:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input
                                        type="text"
                                        id='direccion'
                                        name='direccion'
                                        placeholder='Dirección'
                                        value={direccion}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="barrio_vereda">Barrio-vereda:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input
                                        type="text"
                                        id='barrio_vereda'
                                        name='barrio_vereda'
                                        placeholder='Barrio-vereda'
                                        value={barrio_vereda}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='contenedor2'>
                            <h2>Enfoque diferencial</h2>
                            <div className="inputDiv">
                                <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input
                                        type="date"
                                        id='fecha_nacimiento'
                                        name='fecha_nacimiento'
                                        placeholder='Fecha de nacimiento'
                                        value={fecha_nacimiento}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="etnia">Etnia:</label>
                                <div className="input flex">
                                    <FaUserShield className='icon'></FaUserShield>
                                    <input
                                        type="text"
                                        id='etnia'
                                        name='etnia'
                                        placeholder='Etnia'
                                        value={etnia}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <h2>Salud</h2>
                            <div className='inputDiv'>
                                <label htmlFor="regimen_afiliacion">Tipo de régimen de afiliación</label>
                                <select
                                    id="regimen_afiliacion"
                                    name='regimen_afiliacion'
                                    value={regimen_afiliacion}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value={"Subsidiado"}>Subsidiado</option>
                                    <option value={"Contribuido"}>Contribuido</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
