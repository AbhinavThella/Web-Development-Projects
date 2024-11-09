import React from 'react'
import './Programs.css'
import p1 from '../../assets/Program-1.png'
import p2 from '../../assets/Program-2.png'
import p3 from '../../assets/Program-3.png'

import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'

function Programs() {
  return (
        <div className="programs-images" id='programs'>
            <div className="program">
                <img src={p1} alt="" />
                <div className="caption">
                    <img src={icon1} alt="" />
                    <p>Graduation Dregree</p>
                </div>
            </div>
            <div className="program">
                <img src={p2} alt="" />
                <div className="caption">
                    <img src={icon2} alt="" />
                    <p>Masters Dregree</p>
                </div>
            </div>
            <div className="program">
                <img src={p3} alt="" />
                <div className="caption">
                    <img src={icon3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
  )
}

export default Programs
