
// find the starting point of the loop
function detectLoop(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    if (fast === null || fast.next === null) {
        return null;
    }

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectAndBreakLoop(head) {
  // Step 1: Initialize slow and fast pointers
  let slow = head;
  let fast = head;

  // Step 2: Find the meeting point
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  // Step 3: Check if there is a loop
  if (!fast || !fast.next) {
    return head;
  }

  // Step 4: Reset slow pointer to the head
  slow = head;

  // Step 5: Find the start of the loop
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // Step 6: Break the loop
  while (fast.next !== slow) {
    fast = fast.next;
  }
  fast.next = null;

  // Step 8: Return the head of the linked list
  return head;
}
