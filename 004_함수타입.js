//함수 타입지정
//파라미터에 타입 지정안해주면 any타입이 자동으로 할당됨
//자바스크립트와 다르게 타입지정된 함수는 파라미터는 필수로 들어와야함, 안쓰면 에러가남
function 함수명(x) {
    return x * 2;
}
function 함수이름(x) {
    return x * 2;
}
함수이름(6);
//1) void 타입
//함수 return 값을 하고싶지 않을때 void 타입 활용하기, 실수로 뭔가 리턴하면 에러 내주삼
//return 을 쓰면 에러가남
function 함수1(x) {
    1 + 1;
}
//2) 파라미터 선택적 매개변수
//파라미터가 들어올수도 있고 안들어올수도 있는. 즉 파라미터가 옵션일 경우에는 파라미터 옆에 ? 를 쓴다.
//console.log(x)를 해보면 undefined가 보인다
function 함수2(x) {
    1 + 1;
    console.log(x);
}
함수2();
// ?연산자는 들어올수도 있다~라는 뜻인데 number | undefined와 같다
// 이 변수는 number 혹은 undefined가 들어올수있다. 
//함수에서 파라미터를 입력안하면 자바스크립트에서는 저절로 undefined 상태가 된다.
function 함수3(x) {
    console.log(x);
}
//파라미터에 유니언 타입을 넣어서 연산하면 에러가 생긴다. 왜냐하면 타입스크립트는 엄격한거 좋아하니까!
// function 함수4(x:number|undefined):void{
//   console.log(x+3)
// }
// 함수4()
function food(price, name) {
    console.log(price, name);
}
food(10000);
