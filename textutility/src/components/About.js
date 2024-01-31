import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function About(props) {

    let myStyle = {
        color: props.mode==='dark'?'whitesmoke':'black',
        backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'
    }

  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <strong>Textutility</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    Textutility is a utility that helps you to play with text in the way you want.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong>Shreya Garg</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    Someone who is putting efforts to develop this.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    <strong>FAQ ' S</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    Generally asked questions. Added later 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
