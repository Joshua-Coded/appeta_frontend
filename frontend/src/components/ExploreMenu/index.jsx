import React from 'react'
import { menu_list } from '../../assets/assets';
import "./index.css";


const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
                Discover delicious dishes made with love. From savory starters to sweet treats, there's something for everyone. Indulge in your favorites today!
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="image" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
