// common\src\index.ts
interface Color {
  red: number;
  blue: number;
  green: number;
}

const color: Color = {
  red: 10,
  blue: 10,
  green: 20,
};

console.log('color', color);

export default color;
