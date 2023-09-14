// Imported Icons
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import './CardComponent.scss'
//Imported images
import iconPizza from '../../../../Assest/userTopSellers.png'
import { SliderTopSection } from './Slider/SliderTopSection'

export const CardComponent = () => {
    return (
        <div className='mainContent'>
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius.</p>

                    <div className='buttons flex'>
                        <button className='btn'>Explore More</button>
                        <button className='btn transparent'>Top Sellers</button>
                    </div>

                    {/* Slider */}
                    <div className="videoDiv">
                        <SliderTopSection />
                    </div>

                </div>

                <div className="leftCard flex">
                    <div className='main flex'>
                        <div className='textDiv'>

                            <h1>Estado</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small>4</small>
                                </span>
                                <span>
                                    This Month <br /> <small>127</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Mis Certificados <BsArrowRightShort
                                    className='icon' />
                            </span>

                        </div>


                        <div className="imgDiv">
                            <img src={iconPizza} alt="Image Name" />
                        </div>

                    </div>

                    {/* Only mobile */}
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
            </div>
        </div>
    )
}
