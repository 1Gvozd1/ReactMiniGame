import "./Level.css"

export function Level({value,sizeChange,isSelect}){
    return(
        <div style={{display:'inline-block'}}>
            <button className={'change'} onClick={() => sizeChange(value)} style={{visibility:`${isSelect ? 'hidden' : 'visible'}`}}>{value}x{value}</button>
        </div>
    )
}