/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
var addTwoNumbers = function(l1, l2) {
    let sl1 = ""
    let current = l1
    while(current){
        sl1 = String(current.val) + sl1
        current = current.next
    }
    let sl2 = ""
    current = l2
    while (current){
        sl2 = String(current.val) + sl2
        current = current.next
    }
    sol = parseInt(sl1) + parseInt(sl2)
    sol = String(sol).split("").reverse().join("");
    let o = new ListNode(0)
    current = o
    for (let x of sol){
        current.next = new ListNode(x)
        current = current.next

    }
    return o.next
};

function LinkedList(val){
    this.val = val;
    this.next = null;
}

function arrayToLinkedList(a){

    let node, temp;
    for(let i=a.length-1; i >= 0; i--){
        if(!node)
            node = new LinkedList(a[i]);
        else {
            temp = new LinkedList(a[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}
function linkedListToArray(ii){
    var arr = [ii.val]
    while(ii.next !== null){
        ii = ii.next;
        arr.push(ii.val)
    }
    return arr
}
let l1 = arrayToLinkedList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
let l2 = arrayToLinkedList([5,6,4])
let o = addTwoNumbers(l1,l2)
console.log(linkedListToArray(o))