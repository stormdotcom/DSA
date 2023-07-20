// in time out time

function solve(root, T) {
    let inTime = new Map();
    let outTime = new Map();

    function calcInOut(root, T) {
        if (root === null) return;

        inTime.set(root, T);
        T = T + 1;

        calcInOut(root.left, T);
        calcInOut(root.right, T);

        outTime.set(root, T);
        T = T + 1;
    }

    calcInOut(root, T);

    console.log("In Time: ", inTime);
    console.log("Out Time: ", outTime);
}