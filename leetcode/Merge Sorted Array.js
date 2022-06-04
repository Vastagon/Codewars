var merge = function (nums1, m, nums2, n) {
    if(n === 0) return;
	let currIndexFirst = m - 1;
    let currIndexSecond = n - 1; 
   
    for(let i = nums1.length - 1; i >= 0; i--){
        const value1 = nums1[currIndexFirst] ?? -Infinity;
        const value2 = nums2[currIndexSecond] ?? -Infinity;     
        
        if(value1 > value2){
            nums1[i] = value1;
            currIndexFirst--;
        }else{
            nums1[i] = value2;
            currIndexSecond--;
        }
    }
};
