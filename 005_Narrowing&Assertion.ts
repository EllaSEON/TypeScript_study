//Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 써야한다
//대표적인 Narrowing(타입을 하나로 거른다, 정한다) 방법은 typeof 연산자
//어떤 변수가 타입이 아직 불확실하면 if문등으로 Narrowing 해줘야 조작가능

function 내함수(x:number|string){
  if(typeof x ==='string' ){
    return x+'1'
  }else{
    return x+1
  }  
}

내함수(123);

//배열일때도 Narrowing
//typeof 는 항상 글자랑 비교해줘야해 즉, number이 아니라 'number'임
//(주의) if문을 썼으면 끝까지 써야 안전함. else, else if 안쓰면 에러로 잡아줄수도 있음

function 내함수1(x:number|string){
  let array:number[] = [];
  if(typeof x ==='number'){
    array[0] =x;
  }else{

  }
  
}

//Narrowing으로 판정해주는 문법들 => 현재 변수의 타입이 뭔지 특정지을수있으면 인정해줌
//1) typeof 변수
//2) 속성명 in 오브젝트자료
//3) 인스턴스 instanceof 부모


//type을 하나로 확정시키고 싶을 때 쓰는 assertion 문법
// x as number
//assertion 문법의 용도
//1) 유니온 타입을 하나의 타입으로 확정할수 있을 때, 즉 Narrowing 할때 쓴다
//2) 무슨 타입이 들어올지 100% 확실할 때 써야함

function 내함수2(x:number|string){
  let array:number[] = [];
  array[0] =x as number; //왼쪽에 있는 x 변수를 number로 덮어씌워주세요 
}

내함수2('123') // as문법은 문자 넣어도 에러를 캐치하지 못함. number로 그냥 씌워주는 거라서
//그래서 Narrowing할때는 as보다는 if문법 쓰는게 좋음. as는 버그 추적이 안됨.(디버깅용 비상용으로 써라)


//예제 1)
function 클리닝함수(x:(number|string)[]){
  let 클리닝완료:number[] =[];

  x.forEach((data)=>{
    if(typeof data ==='string'){
      클리닝완료.push(parseInt(data))
    }else{
      클리닝완료.push(data)
    }
  })
  return 클리닝완료
}

console.log(클리닝함수(['1',2,'3']));



//예제 2)
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 만들함수(x:{subject:string|string[]}){
 if(typeof x.subject ==='string'){
    return x.subject
 }else if(Array.isArray(x.subject)){
  return x.subject[x.subject.length-1]
 }else{
  return '에러'
 }
}
console.log(만들함수( { subject : 'math' } ))  
console.log(만들함수( { subject : ['science', 'art', 'korean'] } )) 