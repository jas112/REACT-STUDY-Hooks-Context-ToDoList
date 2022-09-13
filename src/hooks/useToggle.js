// import useState
import { useState } from "react";

function useToggle(initValue = false){

    const [stateValue, setStateValue] = useState(initValue);

    const toggle = () => {
        setStateValue(!stateValue);
    }

    return [stateValue, toggle];
    
}

export default useToggle;