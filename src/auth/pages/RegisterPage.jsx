import './loginPage.scss'
import { Link } from 'react-router-dom'
//Assets
import SliderFuture from '../../Assest/SliderFuture.png'
import logo from '../../Assest/logo.png'

//Icons

import { BsFillShieldFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaUserShield } from 'react-icons/fa'


export const RegisterPage = () => {
  return (
    <div className='registerPage flex animate__animated animate__fadeIn'>
      <div className='contanier flex'>

        <div className='videoDiv'>
          <img src={SliderFuture} alt="Login image" />

          <div className="textDiv">
            <h2 className='title'>"Everyone's opinion matters. Join our surveys!"</h2>
            <p>Use our website</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>have an account?</span>

            <Link to='/auth/login'>
              <button className='btn'>
                Login
              </button>
            </Link>

          </div>
        </div>

        <div className='formDiv flex'>
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h3>Let us know you !</h3>
          </div>

          <form action=""
            className='form grid'>
            <span className='showMessage'>
              Register Status will go here
            </span>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'></MdMarkEmailRead>
                <input type="text" id='email' placeholder='Enter Email' />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'></FaUserShield>
                <input type="text" id='username' placeholder='Enter Username' />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="Password">Password</label>
              <div className="input flex">
                <BsFillShieldFill className='icon'></BsFillShieldFill>
                <input type="password" id='Password' placeholder='Enter Password' />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Register </span>
              <AiOutlineSwapRight className='icon'></AiOutlineSwapRight>
            </button>

            <span className='forgotPassword'>
              Forgot your password? <a href="#">Click Here</a>
            </span>
          </form>
        </div>

      </div>
    </div>
  )
}
