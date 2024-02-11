export function LinkedList(val){
    this.val = val;
    this.next = null;
}

export function arrayToLinkedList(a){

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