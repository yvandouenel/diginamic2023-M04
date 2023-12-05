/**
 * 
 * @param {string} name 
 * @returns void
 */
function hello(... names) {
  console.log(`names : `, names);
  names.forEach(name => {
    console.log(`name : `, name);
  })
  //console.log(`Hello ${name} `);
  //return "hello";
}
hello("Simone", "José");


