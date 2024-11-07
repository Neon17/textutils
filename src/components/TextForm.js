import React,{useState} from 'react'

export default function TextForm(props){
    let [text,setText] = useState('Enter text here');
    let [count,setCount] = useState(0);

    const convertUpperCase = ()=>{
        let t = text.toUpperCase();
        setText(t);
    }

    const convertLowerCase = ()=>{
        let t = text.toLowerCase();
        setText(t);
    }

    const changeHandler = (event)=>{
        setText(event.target.value);
        let str = event.target.value;
        let c = str.split(' ').length;
        setCount(c);
    }

    return (
        <>
        <div className="mt-2 mx-auto" style={{width: '1000px'}}>
            <h5>Enter text here</h5>
            <div className="mb-3">
                <label htmlFor="" className="form-label"></label>
                <textarea className="form-control" name="" value={text} id="" rows="3" onChange={changeHandler}></textarea>
            </div>
            <button type="button" className="btn btn-primary p-2 m-2" onClick={convertUpperCase} data-bs-toggle="button" aria-pressed="false" autoComplete="off">
                Convert to Uppercase
            </button>
            <button type="button" className="btn btn-primary p-2 m-2" onClick={convertLowerCase} data-bs-toggle="button" aria-pressed="false" autoComplete="off">
                Convert to Lowercase
            </button>
            Word Count = {count}
        </div>  
        </>
    )
}