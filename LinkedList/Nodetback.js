class Node {
  constructor(next = null) {
    this.next = next;
  }
}

const insertNode = (head, value) => {
  if (head === null) {
    head = new Node(value)
  }
  let temp = head;
  while (head !== null) {
    temp = temp.next;
  }
  temp.next = new Node(value)
  return head
}
