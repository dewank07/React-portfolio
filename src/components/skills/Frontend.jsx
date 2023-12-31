import React from 'react'
import "./skills.css";

const Frontend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">
    Fullstack Developer
    </h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                        HTML/CSS
                    </h3>
                    <span className="skills__level">Advance</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                    Javascript
                    </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                    React
                    </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                        Nodejs
                    </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            
        </div>

        
        
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                        Express.Js
                    </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                        MongoDB
                    </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                        Git/Github
                    </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">
                        Next.js
                    </h3>
                    <span className="skills__level">Beginner</span>
                </div>
            </div>

            
        </div>

       
    </div>
</div>
  )
}

export default Frontend