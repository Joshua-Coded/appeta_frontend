import React from 'react'
import "./index.css";
import { assets } from '../../assets/assets';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>appetaFoods coming soon for  <br /> downloads on</p>
            <div className='app-download-platforms'>
                <img src={assets.app_store} alt="" />
                <img src={assets.play_store} alt="" />
            </div>
            <p>Use the web Version for your orders</p>

        </div>
    )
}

export default AppDownload
