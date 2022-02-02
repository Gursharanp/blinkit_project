import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/ContetCreater';
import Cart from '../CartItem/Cart';
import Logout from '../LoginItems/Logout';
export default function Header() {


    let { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            let userData = JSON.parse(localStorage.getItem("user"));
            setUser(userData);
        }
    }, []);

    return (

        <div className='headbar'>
            <div className='icon'>
                <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
            </div>
            <div className='address'>
                <div className='aicon'></div>
                <div className='atext'>
                    <div className='addhead'> delivery in 15 minutes</div>
                    <div className='addfoot'> Sector 18D,Sector18, Chandhigarh </div>
                </div>
            </div>
            <div className='search'>

                <input type="search" placeholder='Search for products' />
                <div className='sicon'> <i className="fa fa-search"></i></div>

            </div>
            <div className='category'>
                categories
            </div>
            { 
            user==null?
                <Link to="/Login">
                    <div className='login'>
                        Login
                    </div>
                </Link>:<Logout/>
            }
            <div className='my-cart'>           
                 <Cart/>
            </div>


        </div>


    )

}
