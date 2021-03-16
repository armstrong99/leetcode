const isSameTree = (p, q) => {
    if(p === null || q === null) {
        return p === q;
    }

    if(p.val !== q.val) {
        return false;
    }

    return isSameTree(p.right, q.right) && isSameTree(p.left, p.right)
}
