// 1번 함수
// 어떠한 숫자 값을 판단한다.
function calcFunc(first, second) {
    if (typeof(first)=== "number" && typeof(second) === "number"){
    //위 매개변수 2개는 데이터타입이 숫자여야만 한다.
    // 둘 중 큰 값을 결정하여 리턴한다.
    let value;
        if(first > second){ value = first }
        else if (first <= second) { value = second }
    //실행구문
    console.log(value);
    return value;
    } else {
        console.error("변수에 숫자를 입력하세요")
    }
}

// 2번함수
// 태그를 제작하는 과정에서 위 1번함수의 결정된 값을 활용한다.
function makeElement(tagName, sizeValue) {
    if (typeof(tagName)==="string" && typeof(sizeValue)==="number"){
    // tagName 매개변수는 반드시 문자열이여야 한다.
    // sizeValue 매개변수는 반드시 숫자여야 한다.
    // 태그요소를 생성하고, style값 중 width 값과 height 값을 매개변수 sizeValue + px 형태로 활용한다.
    let makeElement = document.createElement(tagName);
    makeElement.style.width = sizeValue + "px"
    makeElement.style.height = sizeValue + "px"
    makeElement.style.backgroundColor = "violet"
    // makeElement.textContent = calcFunc();
    // 실행구문
    return makeElement;
    } else {
        console.error("태그는 문자열, 사이즈는 숫자로 입력해주세요.")
    }
}


// 3번함수
// 제작된 태그를 부모태그에 해당하는 객체에 아래의 실행함수로 작동시킨다.
function appendParent(parentElement, makeItemElement) {
    if (typeof(parentElement) === "object" && typeof(makeItemElement)==="object"){
    // 위 매개변수 2개는 데이터타입이 객체여야만 한다.
    parentElement.appendChild(makeItemElement);
    } else {
        console.error("객체 형식으로 입력해주세요.")
    }
}