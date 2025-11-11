// Padrão de composição de funções PIPE
// A saída de uma função serve como entrada de outra
// Usamos para criar um pipeline de execuções
const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados);

const nums = [23, 5, 6, 8, 9, 10, 12, 4];

const dobro = (nums) => nums.map((num) => num * 2);

const somatoria = (nums) => nums.reduce((acc, num) => acc + num);

const execution = pipe(
    dobro,
    somatoria
);

const result = execution(nums);

console.log(result);