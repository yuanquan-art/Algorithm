/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    //     if(!head){
    //         return head;
    //     }
    //    //  //定义一个helper辅助递归函数
    //     function helper(node){
    //        var tempNext = node.next;
    //        if(tempNext){
    //            // 保存第三个节点
    //            var tempNextNext = node.next.next;
    //            // 第二个节点指向第一个节点
    //            node.next.next = node;
    //            if(tempNextNext){
    //                node.next = helper(tempNextNext);
    //            }else{
    //                node.next = null
    //            }
    //        }
    //        return tempNext || node;
    //     }
    //     var res = helper(head);
    //     return res || head;
      
       if (!head || !head.next){
           return head;
       }
       var tempNext = head.next;
       var tempNextNext = head.next.next;
       tempNext.next = head;
       head.next = swapPairs(tempNextNext);
       return tempNext;
    };