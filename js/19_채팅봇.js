function toggleChat() {
  const chatContainer = document.getElementById("chat-container");
  const toggleButton = document.getElementById("toggle-button");
  // chatContainer.style.display == ''
  // 초기값이 빈 문자열 일수도 있기 때문에 넣어줘야함
  if (
    chatContainer.style.display == "none" ||
    chatContainer.style.display == ""
  ) {
    chatContainer.style.display = "flex";
    toggleButton.textContent = "채팅 숨기기";
  } else {
    chatContainer.style.display = "none";
    toggleButton.textContent = "채팅 보기";
  }
}
// 자바스크립트는 매개변수가 함수에서 설정한 매개변수와 작성해야하는
// 개수가 달라도 문제없이 실행됨
showMessage("안녕하세요. KH상담봇입니다. 원하는 메뉴를 입력하세요.", "bot");
function showMessage(message, sender) {
  const chatbox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");

  messageElement.classList.add("message", sender + "-message");
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
}

function sendMessage() {
  const inputbox = document.getElementById("user-input");
  const message = inputbox.value.trim(); // trim 공백 제거
  inputbox.value = "";

  if (message != "") {
    showMessage(message, "user");
    setTimeout(() => {
      showMessage("저는 채팅 봇입니다.", "bot");
    }, 1000);
  }
}
