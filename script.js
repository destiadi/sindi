// Ambil tombol dan body
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Periksa apakah pengguna sebelumnya memilih tema
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ MODE TERANG";
}

// Tambahkan event saat tombol diklik
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Simpan preferensi ke localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ MODE TERANG";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 MODE GELAP";
  }
});
