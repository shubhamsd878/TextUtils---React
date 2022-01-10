import { useState } from 'react';
// import PropTypes from 'prop-types';

export default function Textform(props)  {

    const [Text, setText] = useState('');
    // function call --> {temp} instead of {temp()}
    //not able to use simple function instead of arrow function
    
    
    
    // IMPORTANT
    const handleUp = (event) => {
        setText(event.target.value);
        console.log("? event.target.value")
    }

    const convertUpperCase = () => {
        let text = Text.toUpperCase();
        setText(text);
    }
    const convertLowerCase = () => {
        let text = Text.toLowerCase();
        setText(text);
    } 

    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const clearText = () => {
        let text = ""
        setText(text)
    }
    // const noOfWords = () => {
    //     const space =" ";
    //     if(Text.charAt(Text.length - 1) === space){
    //         return (Text.split(" ").length);
    //     }
    // }
    

    return(
        //wrong to declare useState here
        < >
            <div style={{backgroundColor:''}}>
                <div className="container my-4" style={(props.mode) === 'dark' ? {color: '#dedede', backgroundColor: '#062c52',border:'3px solid ', borderRadius: 25, padding:30} : {color:'black',backgroundColor:'whitesmoke' ,border:'3px solid #cdcdcd', borderRadius: 25, padding:30} }>
                    <p className="h3">{props.heading}</p>
                {/* <div className="container my-4" style={(props.mode) === 'dark' ? {color: '#dedede', backgroundColor: '#212529',border:'3px solid ', borderRadius: 25, padding:30} : {color:'black',backgroundColor:'whitesmoke' ,border:'3px solid #cdcdcd', borderRadius: 25, padding:30} }>
                    <p className="h3">{props.heading}</p> */}

                    <div className="form-floating">
                        <textarea placeholder='Enter text here' value={Text} id="myBox" rows='10' cols='70' onChange={handleUp} style={(props.mode) === 'dark' ? {backgroundColor:'#212529', color: 'rgb(189 189 189)'} : {backgroundColor: 'white'}}></textarea>
                    </div>
                    
                    {/* {onClick} instead onclick  */}
                    <button type="button" className="btn btn-primary" onClick={convertUpperCase}> Change to Uppercase </button>

                    <button type="button" className="btn btn-primary mx-1 my-1"  onClick={convertLowerCase}> Change to Lowercase </button>

                    <button type="button" className="btn btn-primary mx-1 my-1"  onClick={copyText}> Copy Text </button>

                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}> Clear Text</button>

                    <p className="h3">Your text summary</p>
                    {/* Important: Unable to use the below code in function */}
                    {/* <p>{
                        
                        (Text.charAt(Text.length - 1) ==== " ") || (Text.length ==== 0) || (Text.charAt(Text.length - 2) ==== "  ") ? (Text.split(" ").length - 1) : Text.split(" ").length } words and {Text.length} characters.
                    </p> */}

                    <p>
                        {(Text.charAt(Text.length - 1) === " ") || (Text.length === 0)? (Text.split(" ").length - 1) : Text.split(" ").length } words and {Text.length} characters.
                    </p>
            
                    <p>
                        { ( 0.3 * ((Text.charAt(Text.length - 1) === " ") || (Text.length === 0)? (Text.split(" ").length - 1) : Text.split(" ").length) ) / 60 } minutes to read (if avg reading speed = 200wpm).
                    </p>
                    
                    <p className="h4">Preview:</p>
                    <p className ="preview"> {Text.length === 0 ? "Please Input Text in Input Section" : Text }</p>
                </div>
            </div>
        </>
    );
}
// Textform.propTypes = {
//     heading: PropTypes.string.isRequired
// }

// Textform.defaultProps =  {
//     heading: "heading"
// }