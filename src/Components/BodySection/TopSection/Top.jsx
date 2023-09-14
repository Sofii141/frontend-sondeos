// Imported Icons
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'

//Imported images
import user from '../../../Assest/user.png'
//Styles
import './top.css'
import './top.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Top = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        {/* <div className='title'>
          <h1>Welcome to Sondeo</h1>
          <p>Hello Sofi, Welcome back!</p>
        </div> */}

        <div className='searchBar flex'>
          <BiSearchAlt className='icon '></BiSearchAlt>
          <input type='text'
            placeholder='Search Dashboard'>
          </input>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon' />
          <MdOutlineNotificationsNone className='icon' />

          <div className="adminImage">
            <img src={user} alt="Admin Image"
              onClick={openModal} />
          </div>


          {isOpen && (
            <div className="modal animate__animated animate__fadeIn">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>

                <div className='linkCont'>
                  <Link to='auth/register'>Signup</Link>
                  <Link to='/auth/login'>Login</Link>
                  <Link to='auth/login' >Logout</Link>
                </div>

              </div>
            </div>
          )
          }
        </div >
      </div >
    </div >
  );
};
