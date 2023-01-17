function compareObjectsRecursive(obj1, obj2) {
    let diff = {};
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                let nestedDiff = compareArrayOfObjects(obj1[key], obj2[key]);
                if (nestedDiff.length > 0) {
                    diff[key] = nestedDiff;
                }
            }
            else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                let nestedDiff = compareObjectsRecursive(obj1[key], obj2[key]);
                if (Object.keys(nestedDiff).length > 0) {
                    diff[key] = nestedDiff;
                }
            } else if (obj1[key] !== obj2[key]) {
                diff[key] = obj2[key];
            }
        } else {
            diff[key] = obj1[key];
        }
    }
    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            diff[key] = obj2[key];
        }
    }
    return diff;
}

function compareArrayOfObjects(arr1, arr2) {
    let diff = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i]) {
            let nestedDiff = compareObjectsRecursive(arr1[i], arr2[i]);
            if (Object.keys(nestedDiff).length > 0) {
                diff.push(nestedDiff);
            }
        } else {
            diff.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1[i]) {
            diff.push(arr2[i]);
        }
    }
    return diff;
}
