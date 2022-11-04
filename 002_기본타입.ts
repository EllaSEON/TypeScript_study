//변수에 타입 지정 가능
//변수명:타입명 = 

let familyName:string = 'Seon';
let 나이:number = 28
let 결혼했니:boolean = false;

//array에도 타입 지정 가능
let 회원들 :string[] =['kim','park'];
let 내정보:{age:number} = {age:20};

//주의할점
//숙련자들은 타입을 귀찮게 굳이 적지 않는다.
//변수 생성시 타입스크립트가 자동으로 타입을 부여해준다.
//간단한 변수들은 타입 생략하는게 좋음

let foods = '치킨'
let price = 20000;


let project:{
  member :string[],
  days:number,
  started:boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}