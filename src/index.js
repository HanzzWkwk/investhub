function start() {
  window.location.href = "../lobby/lobby.html";
}

// Animasi Navbar
const items = document.querySelectorAll(".nav-item");
const indicator = document.getElementById("indicator");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    const position = index * 84;
    indicator.style.transform = `translateX(${position}px)`;

    items.forEach((i) => {
      i.classList.remove("text-[#191919]");
      i.classList.add("text-white");
    });
    item.classList.remove("text-white");
    item.classList.add("text-[#191919]");
  });
});

// Login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("Username atau password tidak boleh kosong");
  } else {
    window.location.href = "../home/home.html";
  }
}

// Lupa Password
function forgot() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const newpass = document.getElementById("newpass").value;
  if (email === "") {
    alert("Email tidak boleh kosong");
  } else if (password === "") {
    alert("Password tidak boleh kosong");
  } else if (password.length < 6) {
    alert("Password minimal 6 karakter");
  } else if ( newpass !== password ) {
    alert("Password baru dan konfirmasi password baru tidak cocok")
  }
   else {
    window.location.href = "../login/login.html";
  }
}

// Registrasi
function regist() {
  const usn = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (usn === "" || pass === "") {
    alert("Username atau password tidak boleh kosong")
  } else if (pass.length < 6) {
    alert("Password minimal 6 karakter")
  } else {
    window.location.href = "../verify/verify.html"
  }
}

// Verifikasi
function verify() {
  const code = document.getElementById("code").value;
  if (code === "") {
    alert("Kode verifikasi tidak boleh kosong")
  } else if (code.length !== 7) {
    alert("Kode verifikasi tidak ditemukan")
  } else {
    window.location.href = "../page/home.html"
  }
}
