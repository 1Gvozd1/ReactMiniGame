import "./GridSquare.css"
import {RowSquare} from "../rowsquare/RowSquare";
import {useMemo, useRef, useState} from "react";
import {generateTestArray} from "../../scripts/array/RandomizeArray";
import {sliceArray} from "../../scripts/array/RandomizeArray";
import {Button} from "../button/Button";

export function GridSquare({size}) {

    let count = useRef(0);
    let arr = useRef([]);
    let result = useRef(0);

    const[loading, setLoading] = useState(false);
    const[showAll, setShowAll] = useState(false);
    const[clicks, setClicks] = useState(0);

    const arrays = useMemo(() => sliceArray(generateTestArray(size), size),[size]);

    function showAllElements() {
        setShowAll(prev => !prev)
    }

    function logic(isActive, value, setHidden, setIsActive) {
        setClicks(prev => prev + 1);
        if(isActive){
            arr.current[count.current] = {};
            arr.current[count.current].value = value;
            arr.current[count.current].setHidden = setHidden;
            arr.current[count.current].setIsActive = setIsActive;
            count.current++;
        }
        else{
            arr.current.length = 0;
            count.current = 0;
        }
        if(count.current === 2) {
            setLoading(true)
            if (arr.current[0].value === arr.current[1].value) {
                setTimeout(() => {
                arr.current[0].setHidden('hidden');
                arr.current[1].setHidden('hidden');
                arr.current.length = 0;
                count.current = 0;
                result.current += 2;
                setLoading(false)
                }, 500)
            } else {
                setTimeout(() => {
                    arr.current[0].setIsActive(prev => !prev);
                    arr.current[1].setIsActive(prev => !prev);
                    arr.current.length = 0;
                    count.current = 0;
                    setLoading(false)
                },500)
            }
        }


    }
    return(
        <div>
            <Button onClick={showAllElements}/>
            {[...new Array(size)].map((el, i) => <RowSquare key={i} size={size} value={arrays[i]} logic={logic} loading={loading} showAll={showAll} />)}
            <p className={'victory'} style={{color:`${result.current === size**2 ? `rgba(255,255,255,1)`: 'rgba(255,255,255,0)'}`}}> Вы победили !</p>
            <p className={'count'} style={{color:`${result.current === size**2 ? `rgba(255,255,255,1)`: 'rgba(255,255,255,0)'}`}}> Вы справились на {((size**2/clicks)*100).toFixed(0)}%</p>
        </div>
    )
}