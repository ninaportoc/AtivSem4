function calcularFatorialR(n) {

    if (n === 0 || n === 1) {
        return 1;
}
        return n * calcularFatorialR (n-1);

}
 