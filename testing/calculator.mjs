// mencoba melakukan testing otomatis menggunakan node.js
export function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
      throw new Error('Expected a number');
    }
  
    return numA + numB;
  }