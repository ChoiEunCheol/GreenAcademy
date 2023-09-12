// let startValue = 0; 
// let endValue = 100;
// let count;
// let nameList = ["ㅇㅇ","ㄴㄴ","ㅁㅁ"];
// let conditionTypeOne = count%4===0;
// let conditionTypeTwo = 8;

let objLoop = {
  value : {
    start : 0,
    end : 10
  },
  nameList : ["가","나","다"],
  conditionType :{
    one : 10%3,
    two : 6
  }
};

/**
 * start : 시작값입니다.
 * end : 끝값입니다.
 * typeOne : 조건식 중 하나입니다.
 * typeTwo : 조건식 다른 하나입니다.
 * nameList : [배열로 되어있습니다.]
 * 
 * 반복문이구요. 시작 끝 값 잘 설정해주시고 조건식 2개 있고 
 * 이름은 3개 필요합니다. 
 */

function loopTest(start,end,typeOne, typeTwo, nameListOne, nameListTwo, nameListThree){
  for(let count = start; count < end; count++){
    if (count === typeOne){
      console.log(nameListOne);
    }
    else {
      console.log(nameListTwo);
    }
    if (count === typeTwo){
      console.log(nameListThree);
    }
  }
}


loopTest(objLoop.value.start, objLoop.value.end, objLoop.conditionType.one, objLoop.conditionType.two, objLoop.nameList[0], objLoop.nameList[1], objLoop.nameList[2]);

loopTest();