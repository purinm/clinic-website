"use strict";
{
  const sbm = document.getElementById("submit");

  sbm.addEventListener("click", () => {
    const result = confirm("内容確認の上登録します。よろしいですか？");

    if (result === true) {
      alert("登録完了しました。");
      document.mydata.submit();
      window.location.href = "https://www.sanrio.co.jp/character/pompompurin/";
      // } else {
      //   window.location.href = "";
      // }
    }
  });

  const pwd = document.getElementById("password");
  const pwdCheck = document.getElementById("password-check");
  pwdCheck.addEventListener(
    "change",
    function () {
      if (pwdCheck.checked) {
        pwd.setAttribute("type", "text");
      } else {
        pwd.setAttribute("type", "password");
      }
    },
    false
  );
}
