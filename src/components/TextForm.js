import React,{useState} from 'react'

export default function TextForm(props){
    let [text,setText] = useState('Enter text here');
    let [count,setCount] = useState(0);

    const convertUpperCase = ()=>{
        let t = text.toUpperCase();
        setText(t);
        props.showAlert('Converted to UpperCase','Success');
    }

    const convertLowerCase = ()=>{
        let t = text.toLowerCase();
        setText(t);
        props.showAlert('Converted to Lowercase','Success');
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard','Success');
    }

    const handleExtraSpace = ()=>{
        let text = document.getElementById('myBox').value;
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed','Success');
    }

    const changeHandler = (event)=>{
        setText(event.target.value);
        let str = event.target.value;
        let c = str.split(/\s+/).filter((element)=>{return element.length!==0}).length;
        setCount(c);
    }

    return (
        <>
        <div className={`mt-2 mx-auto mb-2`} style={{width: '1000px'}}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">
                    <h5>Enter text here</h5>
                </label>
                <textarea className={`form-control bg-${props.toggleMode} text-${(props.toggleMode==='light')?'dark':'light'}`} name="" value={text} id="myBox" rows="3" onChange={changeHandler}></textarea>
            </div>
            <button type="button" className="btn btn-primary p-2 m-2" onClick={convertUpperCase} data-bs-toggle="button" aria-pressed="false" autoComplete="off">
                Convert to Uppercase
            </button>
            <button type="button" className="btn btn-primary p-2 m-2" onClick={convertLowerCase} data-bs-toggle="button" aria-pressed="false" autoComplete="off">
                Convert to Lowercase
            </button>
            <button type="button" className="btn btn-primary p-2 m-2" onClick={handleCopy} data-bs-toggle="button" aria-pressed="false" autoComplete="off">
                Copy Text
            </button>
            <button type="button" className="btn btn-primary p-2 m-2" onClick={handleExtraSpace} data-bs-toggle="button" aria-pressed="false" autoComplete="off">
                Remove Extra Space
            </button>
            Word Count = {count}
        </div>  
        </>
    )
}