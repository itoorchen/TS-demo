"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var str = 'hello';
var flag = true;
console.log(str);
console.log(flag);
var arr1 = [1, 2, 3, 4];
console.log(arr1);
var arr2 = ['1', '2', '3', '4'];
console.log(arr2);
var arr3 = [1, 2, 3, 4];
console.log(arr3);
var arr4 = ['1', 1, true];
console.log(arr4);
var num1;
num1 = 1;
//枚举类型
var Flag;
(function (Flag) {
    Flag["success"] = "2";
    Flag[Flag["error"] = 8] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var run = function () {
    return '123';
};
console.log(run());
function getInfo(name, age) {
    return name + " --- " + age;
}
console.log(getInfo('zs', 20));
// function getName(name: string): string
// function getName(name: string, age: number): string
function getName(name, age) {
    return 'sss';
}
getName('zd', 1);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
// 类
var Person = /** @class */ (function () {
    function Person(n) {
        this.n = n;
    }
    Person.prototype.getName = function () {
        return this.n;
    };
    Person.prototype.setName = function (n) {
        this.n = n;
    };
    Person.print = function () {
        alert('静态方法');
    };
    return Person;
}());
var p = new Person('nnnn');
// alert(p.n)
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this; // 初始化父类
    }
    return Web;
}(Person));
var w = new Web('jhahah');
function printName(name) {
    console.log(name);
}
var obj = {
    firstName: 'string',
    secondName: 'string',
    age: 12
};
printName(obj);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃肉');
    };
    return Dog;
}());
var d = new Dog('小狗');
d.eat();
var programmer = /** @class */ (function () {
    function programmer(name) {
        this.name = name;
    }
    programmer.prototype.codeing = function (code) {
        console.log(this.name + code);
    };
    return programmer;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    Man.prototype.work = function () {
        console.log(this.name + '工作是摸鱼');
    };
    Man.prototype.eat = function () {
        console.log(this.name + '吃饭');
    };
    return Man;
}(programmer));
var m = new Man('男人');
m.work();
m.eat();
m.codeing('写代码');
function logClass(params) {
    return function (target, attr) {
        console.log(target);
        console.log(attr);
    };
}
var httpClient = /** @class */ (function () {
    function httpClient() {
    }
    httpClient.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logClass('ssss')
    ], httpClient.prototype, "url", void 0);
    return httpClient;
}());
