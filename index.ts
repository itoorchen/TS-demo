let str: string = 'hello'
let flag: boolean = true
console.log(str);
console.log(flag);
let arr1: number[] = [1, 2, 3, 4]
console.log(arr1);
let arr2: string[] = ['1', '2', '3', '4']
console.log(arr2);
let arr3: Array<number> = [1, 2, 3, 4]
console.log(arr3);
let arr4: [string, number, boolean] = ['1', 1, true]
console.log(arr4);

let num1: number | null
num1 = 1
//枚举类型
enum Flag { success = '2', error = 8, }

let f: Flag = Flag.success
console.log(f);

let run = function (): string {
  return '123'
}
console.log(run());

function getInfo(name: string, age: number) {
  return `${name} --- ${age}`
}
console.log(getInfo('zs', 20));


// function getName(name: string): string
// function getName(name: string, age: number): string
function getName(name: string, age?: number): string {
  return 'sss'
}
getName('zd', 1)
function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

// 类
class Person {
  n: string
  constructor(n: string) {
    this.n = n
  }
  getName(): string {
    return this.n
  }
  setName(n: string): void {
    this.n = n
  }
  static print() {
    alert('静态方法')
  }
}
const p = new Person('nnnn')
// alert(p.n)

class Web extends Person {
  constructor(name: string) {
    super(name) // 初始化父类
  }
}
const w = new Web('jhahah')

// alert(w.getName())

interface Fullname {
  firstName: string
  secondName: string
}

function printName(name: Fullname) {
  console.log(name);
}

const obj = {
  firstName: 'string',
  secondName: 'string',
  age: 12
}
printName(obj)

interface Animal {
  name: string
  eat(str: string): void
}
class Dog implements Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.log(this.name + '吃肉');
  }
}

const d = new Dog('小狗')
d.eat()

interface Animal1 {
  eat(): void
}
interface People extends Animal1 {
  work(): void
}
class programmer {
  name: string
  constructor(name: string) {
    this.name = name
  }
  codeing(code: string) {
    console.log(this.name + code);
  }
}
class Man extends programmer implements People {
  constructor(name: string) {
    super(name)
  }
  work() {
    console.log(this.name + '工作是摸鱼')
  }
  eat() {
    console.log(this.name + '吃饭')
  }
}
const m = new Man('男人')
m.work()
m.eat()
m.codeing('写代码')


function logClass(params: any) {
  return function (target: any, attr: any) {
    console.log(target);
    console.log(attr);
  }
}

class httpClient {
  @logClass('ssss')
  url: string | undefined
  constructor() { }
  getData() {
    console.log(this.url);
  }
}