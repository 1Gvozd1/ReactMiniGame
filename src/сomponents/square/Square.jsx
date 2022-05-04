import './Square.css';
import {useState} from "react";

export function Square({value,logic,loading,showAll}) {
    const [isActive, setIsActive] = useState(false);
    const [hidden, setHidden] = useState('visible');
    function elClick() {
        setIsActive(prev => !prev);
        logic(!isActive, value, setHidden, setIsActive)
    }
    return(
        <div>
            <div className={'element'} onClick={loading ? f => f : elClick} style={{backgroundColor:`${isActive ? '#139ddc' : 'rgba(205, 214, 219, 0)' }`, visibility:`${hidden}`}}>
                <p>{isActive || showAll ? value : null}</p>
            </div>
        </div>
    );
}