import React from 'react'
import './listing.css'
import './listing.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// Imported images 
import iconSushi from '../../../Assest/iconSushi.png'
import iconDrink from '../../../Assest/iconDrink.png'
import iconFruit from '../../../Assest/iconFruit.png'
import iconHam from '../../../Assest/iconHam.png'
import userTopSellers from '../../../Assest/userTopSellers.png'

export const Listing = () => {
  return (
    <div className='lisitingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          Se All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem custom-transition">
          <AiFillHeart className='icon' />
          <img src={iconSushi} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="singleItem custom-transition">
          <AiOutlineHeart className='icon' />
          <img src={iconDrink} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="singleItem custom-transition">
          <AiOutlineHeart className='icon' />
          <img src={iconFruit} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="singleItem custom-transition">
          <AiFillHeart className='icon' />
          <img src={iconHam} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              Se All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={userTopSellers} alt="User Image" />
              <img src={userTopSellers} alt="User Image" />
              <img src={userTopSellers} alt="User Image" />
              <img src={userTopSellers} alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>21 Sellers <span className="data">7 Days</span></small>
              </span>
            </div>

          </div>

        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              Se All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={userTopSellers} alt="User Image" />
              <img src={userTopSellers} alt="User Image" />
              <img src={userTopSellers} alt="User Image" />
              <img src={userTopSellers} alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>21 Sellers <span className="data">7 Days</span></small>
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
};

