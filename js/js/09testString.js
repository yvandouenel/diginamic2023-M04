const hello = "Hello World";
console.log(`taille de hello : `, hello.length);
const result = hello.split("a");
console.log(`result`, result);

class CustomString extends String {
  split(separator) {
    const result = super.split(separator).map((str, index, tab) => {
      if (tab.length === index + 1) return str;
      else return str + separator;
    })
    return [super.split(separator), result];
  }
}
const helloCustom = new CustomString("Hello World");
const res = helloCustom.split("o");
console.log(`res`, res);