function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }
function arrayToLinkedList(a){

    let node, temp;
    for(let i=a.length-1; i >= 0; i--){
        if(!node)
            node = new ListNode(a[i]);
        else {
            temp = new ListNode(a[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}
var mergeTwoLists = function(list1, list2) {
    if (list1 === (undefined || null)) return list2;
    else if (list2 === (undefined || null)) return list1;
    else if (list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
let list1 = arrayToLinkedList([1,2,4])
let list2 = arrayToLinkedList([1,3,4])

console.log(mergeTwoLists(list1,list2))