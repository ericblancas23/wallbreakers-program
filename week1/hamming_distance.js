const hamming_distance = (x, y) => {
    let d = 0;
    let h = x ^ y;
    while (h > 0) {
        d ++;
        h &= h - 1;
    }
    return d;
}