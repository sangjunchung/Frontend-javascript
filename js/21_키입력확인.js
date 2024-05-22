const keys = document.querySelectorAll(".key");
// keydown - 키보드에서 키가 눌러지는 것을 말함
document.addEventListener("keydown", function (e) {
  // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
  // e.key : 입력된 키를 확인
  let saveNum;

  switch (e.key) {
    case "q":
      saveNum = 0;
      break;
    case "w":
      saveNum = 1;
      break;
    case "e":
      saveNum = 2;
      break;
    case "r":
      saveNum = 3;
      break;
    default:
      return;
  }
  keys[saveNum].style.background = "blue";
  keys[saveNum].style.color = "white";
});

document.addEventListener("keyup", function (e) {
  // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
  // e.key : 입력된 키를 확인
  let saveNum;

  switch (e.key) {
    case "q":
      saveNum = 0;
      break;
    case "w":
      saveNum = 1;
      break;
    case "e":
      saveNum = 2;
      break;
    case "r":
      saveNum = 3;
      break;
    default:
      return;
  }
  keys[saveNum].style.background = "red";
  keys[saveNum].style.color = "black";
});
