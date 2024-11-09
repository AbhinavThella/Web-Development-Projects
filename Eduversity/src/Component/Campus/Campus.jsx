import './Campus.css'
import React from 'react'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

function Campus() {
    return (
        <div className="campus">
            <div className='gallery'>
                <img src={gallery1} alt="" />

                <img src={gallery2} alt="" />

                <img src={gallery3} alt="" />

                <img src={gallery4} alt="" />
            </div>
            <div className="button">
            <button className='btn dark-nav'>See more here <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Campus
