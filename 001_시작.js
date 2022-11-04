/* 브라우저가 js파일만 읽기 때문에, ts는 js로 컴파일 해야함
*  터미널켜서 tsc -w 입력해두면 자동 변환됨(끄지만 않으면 됨)
*/
//이 변수에는 앞으로 string만 들어올 수 있음. 숫자들어오면 에러남
let 이름 = "kim";
//아래 변수에는 배열 자료형만 들어올 수 있는데 string 밖에 못들어옴
let 이름들 = ['kim', 'park'];
let 나이들 = [20, 30];
//아래 변수에는 object 만 들어올 수 있는데 string 밖에 못들어옴
// name 옆 ? 는 선택적 매개변수. 얘는 들어올수도 안들어올수도 옵션임
let 이름정보 = { name: 'kim' };
//다양한 타입이 들어올수 있게 하려면 Union type
let 유니온타입 = 'kim';
let Union = 123;
let 변수명 = 123;
//함수 파라미터와 리턴값도 타입지정 가능
// 이 함수는 파라미터로 무조건 number가 들어와야하고 return 값도 number만 들어와야해
function 함수(x) {
    return x * 2;
}
함수(2);
let john = [123, true];
let mimi = { name: 'kim', age: '23', marriage: 'boolean' };
// class 도 타입지정 가능
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
