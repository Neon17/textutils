import React, {useState} from 'react'

export default function Accordian(props){
    // let myStyle = {
    //     color: (props.toggleMode==='dark')?'white':'black',
    //     backgroundColor: props.toggleMode,
    // }
    let [myStyle, setMyStyle] = useState({
        backgroundColor: (props.toggleMode==='dark')?'black':'white',
        color: (props.toggleMode==='light')?'black':'white'
    })

    
    // let [text,setText] = useState((props.toggleMode==='light')?'Switch to Dark Mode':'Switch to Light Mode');
    
    // const switchMode = ()=>{
    //     if (myStyle.color === 'black'){
    //         // myStyle.color = 'white';
    //         // myStyle.backgroundColor = 'black';
    //         // myStyle.border = '1px solid white';
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white',
    //         })
    //         setText('Switch to Light Mode');
    //     }
    //     else {
    //         // myStyle.color = 'black';
    //         // myStyle.backgroundColor = 'white';
    //         // myStyle.border = '';
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : ''
    //         })
    //         setText('Switch to Dark Mode')
    //     }
    // }

    const initializeMode = ()=>{
        setMyStyle({
            backgroundColor: (props.toggleMode==='dark')?'black':'white',
            color: (props.toggleMode==='light')?'black':'white'
        })
    }

    setTimeout(initializeMode,0);


    return (
        <div className='mx-auto' style={{width: '1000px'}}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-primary mt-2" onClick={switchMode}  data-bs-toggle="button" aria-pressed="false" autoComplete="off">{text}</button> */}
            
        </div>
    );
}
