import React from 'react'
import './sidebar.css'
import './sidebar.scss'

// Imported Images ======>
import logo from '../../Assest/logo.png'

// Imported icons =======> 
import { IoMdSpeedometer } from 'react-icons/io'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Sidebar = () => {

    return (

        <div className='sideBar grid'>

            <div className="logoDiv flex">
                <img src={logo} alt="ImageName" />
                <h2>Sondeo.</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">
                    
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdDeliveryDining className='icon' />
                            <span className='smallText'>
                                Dash board
                            </span>
                        </a>
                    </li>
                    <li className="listItem">
                        <Link to="tables" className='menuLink flex'>
                            <IoMdSpeedometer className='icon' />
                            <span className='smallText'>
                                My Tables
                            </span>
                        </Link>
                    </li>
                    <li className="listItem">
                        <Link to="/" className='menuLink flex'>
                            <MdOutlineExplore className='icon' />
                            <span className='smallText'>
                                Explore
                            </span>

                        </Link>
                    </li>

                    <li className="listItem">
                        <Link to="card" className='menuLink flex'>
                            <BsTrophy className='icon' />
                            <span className='smallText'>
                                Publicaciones
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <Link to='/chart' className='menuLink flex'>
                            <AiOutlinePieChart className='icon' />
                            <span className='smallText'>
                                Charts
                            </span>
                        </Link>
                    </li>
                    <li className="listItem">
                        <Link to='createPublications' className='menuLink flex'>
                            <BiTrendingUp className='icon' />
                            <span className='smallText'>
                                Create
                            </span>
                        </Link>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlinePermContactCalendar className='icon' />
                            <span className='smallText'>
                                Contact
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <Link to='/excel' className='menuLink flex'>
                            <BsCreditCard2Front className='icon' />
                            <span className='smallText'>
                                Excel
                            </span>

                        </Link>
                    </li>
                </ul>
            </div>

            <div className="sideBarCard">
                <BsQuestionCircle className='icon' />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>

                    <h3>Help Center</h3>
                    <p> praesentium aut nam rem laudantium?</p>
                    <button className='btn'>Go to help center</button>
                </div>
            </div>
        </div>
    )
}
