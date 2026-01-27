function calcularMedia(arr) {
    if (arr.length === 0) return 0;

    const media = arr.reduce((acc, valor) => acc + valor, 0) / arr.length;

    return media;
}

const VALOR_PI = 3.14;

export { calcularMedia, VALOR_PI }; 