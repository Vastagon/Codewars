var maxDepth = function(root) {
    /// when branch ends
    if(root === undefined || root === null){
        return 0
    }
    ///When branch doesn't end
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
    
};
