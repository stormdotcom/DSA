
let twoSum = function(nums, target) {
    let numsMap = {}
    for(let i=0; i<nums.length; i++){
        const curretMapVal = numsMap[nums[i]]
        if(curretMapVal >=0 ){
            return [curretMapVal, i]
        }
        else {
            const numbToFind = target - nums[i];
            numsMap[numbToFind]=i
        }
    }
    return null
};

let numbers=[2,7,11,15]
let target = 9;


// bad solution
let twoSum2 = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
                if(nums[i] + nums[j] === target) return [i, j]
        }
    }
    return null
};





