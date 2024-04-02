function filterArray(numbers, value){
    const arr = [];
    for(const el of numbers){
        if(el > value){
            arr.push(el)
        }
    }
    return arr
}