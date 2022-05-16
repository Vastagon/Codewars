var mergeTwoLists = function(list1, list2) {
    let newList = {val: 0, next: null}
    let dummy = newList
    
    while(list1 && list2){
        if(list1.val < list2.val){
            dummy.next = list1
            list1 = list1.next
        }else{
            dummy.next = list2
            list2 = list2.next
        } 
        dummy = dummy.next
    }
    dummy.next = list1 || list2
    
    return newList.next
};
