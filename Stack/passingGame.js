//There is a football event going on in your city. In this event, you are given A passes and players having ids between 1 and 106.

// Initially, some player with a given id had the ball in his possession. 

//You have to make a program to display the id of the player who possessed the ball after exactly A passes.

// There are two kinds of passes:

// 1) ID

// 2) 0

// For the first kind of pass, the player in possession of the ball passes the ball "forward" to the player with id = ID.

// For the second kind of pass, the player in possession of the ball passes the ball back to the player who had forwarded the ball to him.

// In the second kind of pass "0" just means Back Pass.

// Return the ID of the player who currently possesses the ball.

const solve = (A, B, C) => {
    const stack = [];
    stack.push(B);

    for (let i = 0; i < A; i++) {
        if (C[i] === 0) {
            stack.pop();
        } else {
            stack.push(C[i]);
        }
    }

    return stack[stack.length - 1];
}
const A = 10
const B = 23
const C = [86, 63, 60, 0, 47, 0, 99, 9, 0, 0]
console.log(solve(A, B, C))