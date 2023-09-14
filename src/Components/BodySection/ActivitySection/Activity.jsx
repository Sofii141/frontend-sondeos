import './activity.css'
import './activity.scss'

//Imported icons
import { BsArrowRightShort } from 'react-icons/bs'
//Imported Images
import userTopSellers from '../../../Assest/userTopSellers.png'

export const Activity = () => {
    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className='btn flex'>
                    See All
                    <BsArrowRightShort className='icon' />
                </button>
            </div>

            <div className="secContainer grid">
                <div className='singleCustomer flex'>
                    <img src={userTopSellers} alt="Customer Image" />

                    <div className='CustomerDetails'>
                        <span className='name'>Hi Sofi</span>
                        <br />
                        <small>Ordered a new cake</small>
                    </div>

                    <div className='duration'>
                        2 min ago
                    </div>
                </div>
                <div className='singleCustomer flex'>
                    <img src={userTopSellers} alt="Customer Image" />

                    <div className='CustomerDetails'>
                        <span className='name'>Hi Sofi</span>
                        <br />
                        <small>Ordered a new cake</small>
                    </div>

                    <div className='duration'>
                        2 min ago
                    </div>
                </div>
                <div className='singleCustomer flex'>
                    <img src={userTopSellers} alt="Customer Image" />

                    <div className='CustomerDetails'>
                        <span className='name'>Hi Sofi</span>
                        <br />
                        <small>Ordered a new cake</small>
                    </div>

                    <div className='duration'>
                        6 min ago
                    </div>
                </div>
                <div className='singleCustomer flex'>
                    <img src={userTopSellers} alt="Customer Image" />

                    <div className='CustomerDetails'>
                        <span className='name'>Hi Sofi</span>
                        <br />
                        <small>Ordered a new cake</small>
                    </div>

                    <div className='duration'>
                        4 min ago
                    </div>
                </div>
                <div className='singleCustomer flex'>
                    <img src={userTopSellers} alt="Customer Image" />

                    <div className='CustomerDetails'>
                        <span className='name'>Hi Sofi</span>
                        <br />
                        <small>Ordered a new cake</small>
                    </div>

                    <div className='duration'>
                        3 min ago
                    </div>
                </div>
            </div>

        </div>
    )
}
