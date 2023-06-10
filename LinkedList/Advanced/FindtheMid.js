// given a linked list, find the middle element of linked list ?
// 0->1->2->3->4->5
function findMiddleElement(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

