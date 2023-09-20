function calcFunc(first, second) {
    //위 매개변수 2개는 데이터타입이 숫자여야만 한다.
    // 둘 중 큰 값을 결정하여 리턴한다.
    let value;
        if(first > second){ value = first }
        else if (first <= second) { value = second }
    //실행구문
    return value;
    console.log(value);
}

function makeElement(tagName, sizeValue) {
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

}

function appendParent(parentElement, makeItemElement) {
    // 위 매개변수 2개는 데이터타입이 객체여야만 한다.
    parentElement.appendChild(makeItemElement);

}