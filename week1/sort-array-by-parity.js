var sortArrayByParity = function(A) {
    ie = 0;
    io = A.length - 1;
    while(ie<io) {
        const n1 = A[ie];
        if(n1 % 2 ==0){
            ie++
        } else {
            [A[ie], A[io] = A[io], n1]
            io--;
        }
    }
    return A
};