import React, {useState} from 'react'

export default function About() {

    // const style2 = {
    //     height: '100%', 
    //     width: '100%'
    // }

    const [myStyle, setmyStyle] = useState( {
        color: 'black',
        backgroundColor:'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mood")

    let toogle = ()=>{
        if(myStyle.color ==='black'){
            setmyStyle({
                color: 'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mood")
        }
        else{
            setmyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mood")
        }
    }
      

  return (
    <>

        <div className="container-xxl" style={{...myStyle}}>
            <h2 className='my-3'>About Us</h2>

            <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={myStyle}>
            <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
            </div>
            </div>
            <div className="container mt-3 ms-2">
            <button className="btn btn-primary" onClick={toogle}>{btnText}</button>
            </div>

        </div>
        
    </>
  )
}
