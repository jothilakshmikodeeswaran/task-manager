import { useState } from 'react';


function Toggle ()
{
    const [isVisible, setIsVisible] = useState(false);
    const Message = () =>{
        setIsVisible (prev => !prev)
    }
    return (
<>
<h1>Toggle</h1>
<div>
    <button onClick={Message}>Toggle Message</button>
      <p className={`message ${isVisible ? "show" : "hide"}`}></p>
      {isVisible&& <p>Secret message revealed!</p>}
</div>

</>

    )
}export default Toggle;



