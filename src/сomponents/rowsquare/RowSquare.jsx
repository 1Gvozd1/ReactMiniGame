import "./RowSquare.css"
import {Square} from "../square/Square";

export function RowSquare({size, value, logic, loading, showAll}) {
    return(
        <div className={'rows'}>
            {[...new Array(size)].map((el, i) => <Square key={i} value={value[i]} logic={logic} loading={loading} showAll={showAll}/>)}
        </div>
    )
}