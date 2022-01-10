import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props){
    const style= {
        color: 'black',
        backgroundColor: 'white'
    }

    // const [buttonText, setbuttonText] = useState("Shubham");
    // const [darkMode, setdarkMode] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    
    // const temporary = () => {
    //     setbuttonText("Dahiya")
    // }

    return (
        <>
        <div style={{}}>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} style={{borderBottom:'2px solid #cdcdcd'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="www.google.com" ><strong> {props.propInfo.title} </strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.com"> {props.about} </a>
                            </li>
                        </ul>
                        {/* to align items right side get them out of the unordered list */}
                            {/* <li className="nav-item "> */}
                                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                                    <input className="form-check-input" type="checkbox" onClick={props.tooglemode}  id="flexSwitchCheckDefault" />
                                    <label className="nav-item form-check-label" htmlFor="flexSwitchCheckDefault">{(props.Mode) === 'light' ? 'Enable' : 'Disable'} Dark Mode</label>
                                </div>
                                {/* <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
                            {/* </li> */}
                    </div>
                </div>
            </nav>
        </div>
        </>

    );
}

//how to define proptypes if sending props via object
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};  

Navbar.defaultProps = {
    title: "Please input title",
    about: "Please input about"
};
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }
// export default Navbar;