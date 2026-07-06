function checkPassword() {
    const input = document.getElementById("password").value;
    const correct1 = "誕生日"
    const correct2 = "たんじょうび"
    const correct3 = "タンジョウビ"
    const correct4 = "ジブラルタル海峡"
    const correct5 = "ジブラルタルカイキョウ"
    const correct6 = "ジブラルタルかいきょう"

    if (input === correct1 || input === correct2 || input === correct3) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else if (input === correct4 || input === correct5 || input === correct6) {
        document.getElementById("unlock").style.display = "block";
        document.getElementById("lockIcon").style.display="block";
        setTimeout(() => document.getElementById("unlock").classList.add("unlocked"), 500);
        setTimeout(() => document.getElementById("lockIcon").textContent = "🔓", 2500);
        document.getElementById("password").value = ''
        setTimeout(() => document.getElementById("unlock").classList.remove("unlocked"), 4000);
        setTimeout(() => document.getElementById("unlock").style.display = "none", 5000);
        setTimeout(() => document.getElementById("step2").style.display = "block", 5000);
    } else {
        alert("パスワードが違います。");
    }
}
