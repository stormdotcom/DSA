//Given a singly linked list A, determine if it's a palindrome.
//  Return 1 or 0, denoting if it's a palindrome or not, respectively.



function isPalindromeLL(A) {
    let head = A;
    let secondHead = getMidNode(head);
    secondHead = secondHead.next;
    secondHead.next = null;
    secondHead = reverseList(secondHead);
    while (head || secondHead) {
        if (head.data !== secondHead.data) {
            return 0;
        }
        head = head.next;
        secondHead = secondHead.next;
    }
    return 1;
}


function getMidNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

let reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
};