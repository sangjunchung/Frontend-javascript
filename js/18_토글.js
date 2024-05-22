function 보이기숨기기() {
  const box = document.getElementById("토글박스");
  // 클래스 목록에 hidden 클래스가 있는지 확인
  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
  } else {
    box.classList.add("hidden");
  }
}
