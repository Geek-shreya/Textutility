import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function About(props) {

  return (
    <div className='container' style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                    Textutility
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <div className="accordion-body" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                    <strong>Textutility is a utility that helps you to play with text in the way you want.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <h2 className="accordion-header" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                    Shreya Garg
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <div className="accordion-body" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                    <strong>Someone who is putting efforts to develop this.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <h2 className="accordion-header" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                    FAQ ' S
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                <div className="accordion-body" style={{ color: props.mode==='dark'?'whitesmoke':'black', backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white'}}>
                    <strong>Generally asked questions.</strong> Added later 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
