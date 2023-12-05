let i = 1;
function a() {
  let j = 2;
  // pas accès k, l,
  // accès à b  car dans le même scope et avec le mot clé function, il y a du "hissage"
  // accès à a, i  et j
  b();
  function b(){
    let l = 4;
    {
      let k = 3;
      /* console.log(`k `, k);
      console.log(`l `, l);
      console.log(`b `, b);
      console.log(`j `, j);
      console.log(`a `, a);
      console.log(`i `, i); */
    }
    
    
  }
}
a();
/* console.log(`k `, k);// non
console.log(`l `, l);//non
console.log(`b `, b);//non
console.log(`j `, j);//non */
console.log(`a `, a);//oui
console.log(`i `, i);//oui