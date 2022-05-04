export function generateTestArray(value) {
    const array = [];
    for(let i = 1; i < ((value**2/2)+1); i++) {
        array.push(i,i);
    }
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function  sliceArray(array, size) {
    return array.reduce((prev,curr)=>{
        if(prev[prev.length-1].length === size) prev.push([]);
        prev[prev.length-1].push(curr);
        return prev;
    }, [[]]);
}