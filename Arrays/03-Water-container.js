

const getMaxWaterContainer = function(heights){
    let maxArea = 0;
    for(let p1=0; p1<heights.length; p1++){
        for(let p2=p1+1; p2<heights.length; p2++){
             const height = Math.min(heights[p1], heights[p2])
             const width = p2 - p1;
             const area = height * width;
             maxArea = Math.max(maxArea, area)
        }
    };
    return maxArea
}
let arr=[1,7,9,3,6]
console.log(getMaxWaterContainer(arr))
