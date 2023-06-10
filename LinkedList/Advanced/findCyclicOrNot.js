// find if a cycle exists in a linked list
// 0->1->2->3->4->5->6
//       
function isCyclic(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow.data === fast.data) {
            return true
        }
    }

    return false;
}

