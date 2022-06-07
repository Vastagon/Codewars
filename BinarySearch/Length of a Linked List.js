/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(node) {
        if(node === null) return 0
        let counter = 0
        while(node.next !== null){
            counter++
            node = node.next
        }
        return counter + 1
    }
}
