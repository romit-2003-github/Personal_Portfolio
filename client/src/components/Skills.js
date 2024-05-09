import React from 'react'

const Skills = () => {
    return (
        <div className='skillContainer'>
            <div className='skill'>
                <h1 style={{ textAlign: "center", fontSize: "3.5rem", margin: "5% 0" }}>My <span style={{ color: "#2ca9df" }}>Skills!</span></h1>
            </div>
            <section className="progressSection">

                <div className="progressBar">
                    <h5>Front End Development</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>

                <div className="progressBar">
                    <h5>JavaScript</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                </div>

                <div className="progressBar">
                    <h5>ReactJS</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">65%</div>
                    </div>
                </div>

                <div className="progressBar">
                    <h5>Backend Development</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                </div>

                <div className="progressBar">
                    <h5>C/C++</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>

                <div className="progressBar">
                    <h5>Internet of Things</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills
