//문자 or 숫자 들어올수 있는 변수는 타입지정을 어떻게 할까?
// | (or) 기호 쓰자 
//Union Type 이라고 부름

let 회원정보 :(number|string) = 123;
//할당을 해버리면 타입이 정해지지만, 다시 바꾸면 또 타입이 바뀌는 가변적인 특성이 있응ㅁ
회원정보

//숫자 또는 문자가 가능한 array 타입 지정은?
let 어레이:(number|string)[] = ['cake','cookie',3000];

// 숫자 또는 문자가 가능한 object 타입 지정은?
let 오브젝트:{a:string|number} = {a:'123'}


// any 타입, 모든 자료형 허용해줌
//any타입 쓰면 타입스크립트 쓰는 의미가 없어짐, 타입으로 접근하기보다는 일반 자바스크립트 변수처럼 할수있음

let 선은혜 :any;
선은혜 = 123;
선은혜 = true;

//unknown 타입 : 모든 자료형 허용해줌
//any보다 안전하다. 변수1에 string으로 지정해두고 number로 지정된 으넹을 집어넣어보면 오류가남
//버그를 미연에 방지해줌
//unknown 타입은 수학계산을 못함 => 타스는 간단한 수학연산도 타입이 맞아야함

let 으넹 : unknown;
으넹 : '으넹';
으넹 : 123;
// let 변수1 :string = 으넹;


//타입이 맞는데 +1에 오류가 왜생기지? 숫자 또는 문자니까...타입스크립트는 엄격해. union 타입에서는 연산이 불가능해
let ageInfo:string|number;
// ageInfo+1;


//타입스크립트는 숫자 타입만 연산이 가능하다. 숫자가 들어가있으나 unknown 타입이라 연산 불가능

let 가격계산 : unknown = 1000;
// 가격계산 + 1000


let user:string = 'kim';
let age:undefined|number = undefined;
let married:boolean = false; 
let 철수:(string|undefined|number|boolean)[] = [user, age, married];


let 학교:{
  score : (number|boolean)[],
  teacher:string,
  friend:string | string[],
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]