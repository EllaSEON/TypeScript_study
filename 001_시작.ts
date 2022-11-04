/* 브라우저가 js파일만 읽기 때문에, ts는 js로 컴파일 해야함
*  터미널켜서 tsc -w 입력해두면 자동 변환됨(끄지만 않으면 됨)
*/


//이 변수에는 앞으로 string만 들어올 수 있음. 숫자들어오면 에러남
let 이름 :string = "kim";

//아래 변수에는 배열 자료형만 들어올 수 있는데 string 밖에 못들어옴
let 이름들 :string[] = ['kim','park']
let 나이들 :number[] = [20,30]

//아래 변수에는 object 만 들어올 수 있는데 string 밖에 못들어옴
// name 옆 ? 는 선택적 매개변수. 얘는 들어올수도 안들어올수도 옵션임
let 이름정보:{name?:string} ={name:'kim'}


//다양한 타입이 들어올수 있게 하려면 Union type

let 유니온타입 :string | number = 'kim';
let Union : string[] | number = 123;

//타입 지정하는게 너무 길때 변수처럼 사용하고 싶으면 Type alias
//보통 대문자로 많이 지정함, 그래야 일반 변수랑 식별하기 편해서
type Mytype = string | number;
let 변수명 : Mytype = 123;

//함수 파라미터와 리턴값도 타입지정 가능
// 이 함수는 파라미터로 무조건 number가 들어와야하고 return 값도 number만 들어와야해
function 함수(x:number):number{
  return x*2
}

함수(2);

//array 에 쓸수있는 tuple 타입
//무조건 배열 안 첫번째는 number, 둘째는 bolean 만 들어올수있음
type Member = [number,boolean];
let john:Member = [123,true]

//object에 타입 지정해야할 속성이 너무 많을때 아래와 같이 사용함
//기존에는 아래처럼 사용했었음
// type Info ={
//   name:string;
//   age:string;
//   marriage:string;
// }
// [key:string]을 이용해 모든 object의 속성은 string만 들어오게 할수있음
type Info ={
  [key:string] :string,
}
let mimi:Info = {name:'kim',age:'23',marriage:'boolean'}

// class 도 타입지정 가능
class User{
  name:string;
  constructor(name:string){
    this.name = name;
  }
}