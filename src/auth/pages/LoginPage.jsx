import { Link } from 'react-router-dom'
import './loginPage.scss'
//Assets
import SliderFuture from '../../Assest/SliderFuture.png'
import logo from '../../Assest/logo.png'

//Icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

export const LoginPage = () => {
  return (
    <div className='loginPage flex  animate__animated animate__fadeIn'>
      <div className='contanier flex'>

        <div className='videoDiv'>
          <img src={SliderFuture} alt="Login image" />

          <div className="textDiv">
            <h2 className='title'>"Everyone's opinion matters. Join our surveys!"</h2>
            <p>Use our website</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>Don't have an account?</span>

            <Link to='/auth/register'>
              <button className='btn'>
                Sign Up
              </button>
            </Link>

          </div>
        </div>

        <div className='formDiv flex'>
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h3>Welcome Back!</h3>
          </div>

          <form action=""
            className='form grid'>
            <span className='showMessage'>
              Login Status will go here
            </span>

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
              <span>Login </span>
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
