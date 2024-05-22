function 기능만들기() {
  const 기능 = document.getElementById("영문이름");
  기능.value = 기능.value.toLowerCase(); // 영어 소문자
  기능.value = 기능.value.toUpperCase(); // 영어 대문자
}
function 엔터기능() {
  alert("입력한 내용이 전달되었습니다.");
}
