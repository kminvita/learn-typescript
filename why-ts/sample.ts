function add(a: number, b:number):number {
    return a + b;
}
var result = add(10, 20);
// number가 아닌 타입을 넣었을때에 'string' 형식의 인수는 'number' 형식의 매개변수에 할당될 수 없다는 에러메세지가 발생한다.
// 이런것이 에러의 사전방지이다.
result.toLocaleString();
// result의 타입이 number이기때문에 number에 해당되는 속성들이 자동으로 뜨기때문에 선택할 수 있다.
// 즉, api가 자동완성 된다. vs코드의 인텔리센스 기능이다.
