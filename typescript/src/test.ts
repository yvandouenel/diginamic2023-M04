function loggedMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Called ${propertyKey} with args: ${JSON.stringify(args)}`);
    let result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet(test: string):number {
    console.log(`Hello, my name is ${this.name}.`);
    return test.length;
  }
}

const p = new Person("Ron");

const result = p.greet("qsdf");
console.log(`result `, result);
