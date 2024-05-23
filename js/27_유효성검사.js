const checkList = {
  inputName: false,
  inputId: false,
  inputPW: false,
  inputPhone: false,
  inputBirth: false,
};
const singupForm = document.singupForm;
const inputName = document.querySelector("#inputName");
const inputId = document.querySelector("#inputId");
const inputPW = document.querySelector("#inputPW");
const inputPhone = document.querySelector("#inputPhone");
const inputBirth = document.querySelector("#inputBirth");

inputName.addEventListener("input", (e) => {
  // e(input).target = 이벤트가 발생한 태그(버튼, 입력 필요)
  const value = e.target.value;
  // Sibling(형제 자매)
  // nextElementSibling = 다음 요소(태그)
  const span = e.target.nextElementSibling.nextElementSibling;

  if (value.trim().length == 0) {
    span.textContent = "한글 2~5자(단모음, 단자음 제외)";
    span.classList.remove("check", "error");
    e.target.value = "";
    checkList["inputName"] = false;
    return;
  }

  const 한글정규식 = /^[가-힇]{2,5}$/;
  if (한글정규식.test(value)) {
    span.textContent = "유효한 이름의 형식입니다.";
    span.classList.add("check");
    span.classList.remove("error");
    checkList["inputName"] = true;
  } else {
    span.textContent = "유효하지 않은 이름의 형식입니다.";
    span.classList.add("error");
    span.classList.remove("check");
    checkList["inputName"] = false;
  }
});

inputId.addEventListener("input", (e) => {
  const valueId = e.target.value;
  const spanId = e.target.nextElementSibling.nextElementSibling;

  if (valueId.trim().length == 0) {
    spanId.textContent = "영어+숫자로 6~16자";
    spanId.classList.remove("check", "error");
    e.target.value = "";
    checkList["inputId"] = false;
    return;
  }

  const regExp = /^[A-Za-z0-9]{6,16}$/;

  if (regExp.test(valueId)) {
    spanId.textContent = "유효한 아이디의 형식입니다.";
    spanId.classList.add("check");
    spanId.classList.remove("error");
    checkList["inputId"] = true;
  } else {
    spanId.textContent = "유효지 않은 아이디의 형식입니다.";
    spanId.classList.add("error");
    spanId.classList.remove("check");
    checkList["inputId"] = false;
  }
});

inputPW.addEventListener("input", (e) => {
  // e(input).target = 이벤트가 발생한 태그(버튼, 입력 필요)
  const value = e.target.value;
  // Sibling(형제 자매)
  // nextElementSibling = 다음 요소(태그)
  const span = e.target.nextElementSibling.nextElementSibling;

  if (value.trim().length == 0) {
    span.textContent = "영어,숫자 8~20글자 사이";
    span.classList.remove("check", "error");
    e.target.value = "";
    checkList["inputName"] = false;
    return;
  }

  const 비번정규식 = /^[A-Za-z0-9]{8,20}$/;
  if (비번정규식.test(value)) {
    span.textContent = "유효한 비밀번호 형식입니다.";
    span.classList.add("check");
    span.classList.remove("error");
    checkList["inputName"] = true;
  } else {
    span.textContent = "유효하지 않은 비밀번호 형식입니다.";
    span.classList.add("error");
    span.classList.remove("check");
    checkList["inputName"] = false;
  }
});

inputPhone.addEventListener("input", (e) => {
  const value = e.target.value;
  const span = e.target.nextElementSibling.nextElementSibling;

  if (value.trim().length == 0) {
    span.textContent = "휴대폰 번호를 입력해주세요(-포함)";
    span.classList.remove("check", "error");
    e.target.value = "";
    checkList["inputPhone"] = false;
    return;
  }

  const regExp = /^\d{3}-\d{3,4}-\d{4}$/;

  if (regExp.test(value)) {
    span.textContent = "유효한 휴대폰 번호의 형식입니다.";
    span.classList.add("check");
    span.classList.remove("error");
    checkList["inputPhone"] = true;
  } else {
    span.textContent = "유효하지 않은 휴대폰 번호의 형식입니다.";
    span.classList.add("error");
    span.classList.remove("check");
    checkList["inputPhone"] = false;
  }
});

inputBirth.addEventListener("input", (e) => {
  const value = e.target.value;
  const span = e.target.nextElementSibling.nextElementSibling;

  if (value.trim().length == 0) {
    span.textContent = "생년월일을 입력해주세요(yyyy-MM-dd)";
    span.classList.remove("check", "error");
    e.target.value = "";
    checkList["inputBirth"] = false;
    return;
  }

  const regExp = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  if (regExp.test(value)) {
    span.textContent = "유효한 생년월일 형식입니다.";
    span.classList.add("check");
    span.classList.remove("error");
    checkList["inputBirth"] = true;
  } else {
    span.textContent = "유효하지 않은 생년월일 형식입니다.";
    span.classList.add("error");
    span.classList.remove("check");
    checkList["inputBirth"] = false;
  }
});
