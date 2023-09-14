import logo from '../../Assest/logo.png'

//Icons
import { FaUserShield } from 'react-icons/fa'
import { AiOutlineSwapRight } from 'react-icons/ai'

export const CardSlider = () => {
    return (
        <div className='loginPage flex  animate__animated animate__fadeIn'>
            <div className='contanier flex'>

                <div className='formDiv flex'>


                    <div className="headerDiv">
                        <img src={logo} alt="" />
                    </div>

                    <h2>Datos generales</h2>

                    <form action=""
                        className='form grid'>
                        <span className='showMessage'>
                            Login Status will go here
                        </span>

                        <div className="inputDiv">
                            <label htmlFor="username">Nombres Completos</label>
                            <div className="input flex">
                                <FaUserShield className='icon'></FaUserShield>
                                <input type="text" id='username' placeholder='Enter Username' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Apellidos Completos</label>
                            <div className="input flex">
                                <FaUserShield className='icon'></FaUserShield>
                                <input type="text" id='username' placeholder='Enter Username' />
                            </div>
                        </div>


                        <div className="inputDiv">
                            <label htmlFor="username">Correo Electronico</label>
                            <div className="input flex">
                                <FaUserShield className='icon'></FaUserShield>
                                <input type="text" id='username' placeholder='Enter Username' />
                            </div>
                        </div>





                        <button type='submit' className='btn flex'>
                            <span>Next </span>
                            <AiOutlineSwapRight className='icon'></AiOutlineSwapRight>
                        </button>

                    </form>
                </div>

            </div>
        </div>

    )
}
