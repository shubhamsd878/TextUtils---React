import { useState } from 'react';
// import PropTypes from 'prop-types';

export default function Textform(props)  {

    const [Text, setText] = useState('');
    // function call --> {temp} instead of {temp()}
    //not able to use simple function instead of arrow function
    
    
    var noOfWords = 0;
    // IMPORTANT
    const handleUp = (event) => {
        setText(event.target.value);
        console.log("? event.target.value")
        if(Text.charAt(Text.length - 1) !== " ")
        {
            noOfWords = noOfWords + 1;
        }
        console.log(noOfWords)
        // {
        //     (Text.charAt(Text.length - 1) === " ") || (Text.length === 0)? (Text.split(" ").length - 1) : Text.split(" ").length 
        // }
    }

    const convertUpperCase = () => {
        let text = Text.toUpperCase();
        setText(text);
    }
    const convertLowerCase = () => {
        let text = Text.toLowerCase();
        setText(text);
    } 
    
    // const noOfWords = () => {
    //     const space =" ";
    //     if(Text.charAt(Text.length - 1) === space){
    //         return (Text.split(" ").length);
    //     }
    // }
    

    return(
        //wrong to declare useState here
        <>
            <p className="h3">{props.heading}</p>

            <div className="form-floating">
                <textarea placeholder='Enter text here' value={Text} rows='10' cols='70' onChange={handleUp}></textarea>
            </div>
            
            {/* {onClick} instead onclick  */}
            <button type="button" class="btn btn-primary" onClick={convertUpperCase}> Change to Uppercase </button>

            <button type="button" class="btn btn-primary mx-1"  onClick={convertLowerCase}> Change to Lowercase </button>

            <p className="h3">Your text summary</p>
            {/* Important: Unable to use the below code in function */}
            {/* <p>{
                
                (Text.charAt(Text.length - 1) ==== " ") || (Text.length ==== 0) || (Text.charAt(Text.length - 2) ==== "  ") ? (Text.split(" ").length - 1) : Text.split(" ").length } words and {Text.length} characters.
            </p> */}

            {/* Working statement */}
            {/* <p>{
                (Text.charAt(Text.length - 1) === " ") || (Text.length === 0)? (Text.split(" ").length - 1) : Text.split(" ").length } words and {Text.length} characters
            </p> */}

            <p>{noOfWords} words and {Text.length} characters
            </p>
            <p>
                { ( 0.3 * ((Text.charAt(Text.length - 1) === " ") || (Text.length === 0)? (Text.split(" ").length - 1) : Text.split(" ").length) ) / 60 } minutes to read (if avg reading speed = 200wpm).
            </p>
            
            <p className="h4">Preview:</p>
            <p className ="preview"> {Text.length === 0 ? "Please Input Text in Input Section" : Text }</p>
        </>
    );
}
// Textform.propTypes = {
//     heading: PropTypes.string.isRequired
// }

// Textform.defaultProps =  {
//     heading: "heading"
// }