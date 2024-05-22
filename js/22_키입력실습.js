const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", keydownEvent);
document.addEventListener("keyup", keyupEvent);

function keydownEvent(e) {
  let keyNum;

  switch (e.key) {
    case "a":
      keyNum = 0;
      break;
    case "s":
      keyNum = 1;
      break;
    case "d":
      keyNum = 2;
      break;
    case "f":
      keyNum = 3;
      break;
    default:
      return;
  }
  keys[keyNum].style.background = "lightblue";
  keys[keyNum].style.color = "lightpink";
}

function keyupEvent(e) {
  let keyNum;

  switch (e.key) {
    case "a":
      keyNum = 0;
      break;
    case "s":
      keyNum = 1;
      break;
    case "d":
      keyNum = 2;
      break;
    case "f":
      keyNum = 3;
      break;
    default:
      return;
  }
  keys[keyNum].style.background = "lightpink";
  keys[keyNum].style.color = "lightblue";
}
