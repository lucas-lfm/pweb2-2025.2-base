function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([10, 5, 6, 3]);
        }, 2000);
    });
}

export default buscarDados;