function calcAverageCalories(days){
    let sum = 0;
    for(let day of days){
        sum += day.calories 
    }
    let averageCalories = (sum /  Object.keys(days).length)
    return averageCalories
}   

