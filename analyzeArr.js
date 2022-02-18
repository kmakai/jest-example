function analyzeArr(arr){
    const length = arr.length;
    let sum = 0;
    for(let i = 0; i < length; i++){ sum += arr[i]};
    const average = sum / length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);


    return { average, min, max, length};
}

module.exports = analyzeArr;