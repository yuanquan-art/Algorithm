/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var i = 1; //  计数
    // 三个节点记录切分链表的前一个节点，开始节点，结束节点
    var sliceStartPre = null;
    var sliceStart = null;
    var sliceEnd = null;
    // cur 操作链表的移动
    var cur = head;
    // 三个节点记录切分链表的前一个节点，开始节点，结束节点
    while(cur){
        if (i === m-1) {
            sliceStartPre = cur;
        }
        if (i === m) {
            sliceStart = cur;
        }
        if(i === n ){
            sliceEnd = cur;
        }
        i++;
        cur = cur.next;
    } 
    // 保存分隔结束后面的链表的头指针
    var sliceEndStart = sliceEnd.next;
    // 将切分链表的尾指针断开，防止反转过度
    sliceEnd.next = null;
    const {reverseHead: slicedStart,reverseTail:slicedEnd} = reverse(sliceStart);
    if(sliceStartPre){
        // 如果需要反转的部分有前一个节点 那么只需要在中间动手脚 原样返回head节点即可
        sliceStartPre.next = slicedStart;
    }else{
        // 这里需要注意的是 如果没有sliceStartPrev 说明是从第一个节点就开始反转的
     // 那么我们需要手动调整head为反转后的head
         head = slicedStart;
    }
    slicedEnd.next = sliceEndStart;
    return head;
    function reverse(head){
        let pre = null;
        let cur = head;
        while(cur){
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
         // 返回反转后的头尾节点
        return {reverseHead: pre,reverseTail: head }
    }
 
 };