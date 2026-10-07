(function () {
  var btn = document.getElementById("copy-email");
  var text = document.getElementById("email-text");
  if (!btn || !text) return;
  function selectText() {
    try {
      var r = document.createRange();
      r.selectNodeContents(text);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
    } catch (e) {}
  }
  function flash(msg) {
    btn.textContent = msg;
    setTimeout(function () { btn.textContent = "Copy"; }, 1600);
  }
  btn.addEventListener("click", function () {
    var value = text.textContent.trim();
    try {
      navigator.clipboard.writeText(value).then(function () {
        flash("Copied");
      }, function () {
        selectText();
        flash("Selected");
      });
    } catch (e) {
      selectText();
      flash("Selected");
    }
  });
})();
