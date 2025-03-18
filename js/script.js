document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".project").addEventListener("click", function () {
        window.location.href = "index.html#projects";
        localStorage.setItem("activeTab", "projects"); // Simpan status aktif di localStorage
    });
});

const texts = ["Tech Enthusiast", "Web Designer"]; // Teks yang bergantian
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function typeEffect() {
  currentText = texts[count % texts.length]; // Ambil teks berdasarkan index
  if (isDeleting) {
    letter = currentText.substring(0, index--); // Hapus karakter satu per satu
  } else {
    letter = currentText.substring(0, index++); // Ketik karakter satu per satu
  }
  
  document.querySelector(".typing-text span").textContent = letter;
  
  let speed = isDeleting ? 50 : 100; // Kecepatan mengetik & menghapus
  
  if (!isDeleting && letter === currentText) {
    speed = 2000; // Tunggu 2 detik sebelum menghapus
      isDeleting = true;
    } else if (isDeleting && letter === "") {
      isDeleting = false;
      count++;
      speed = 500; // Tunggu sebelum mengetik teks baru
    }
    
    setTimeout(typeEffect, speed);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000); // Mulai setelah 1 detik
  });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav a");

    function activateNav() {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            let sectionHeight = section.offsetHeight;
            let sectionTop = section.offsetTop - 50;
            let sectionId = section.getAttribute("id");
index.html
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateNav);
    activateNav(); // Jalankan sekali saat halaman dimuat
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navbarNav = document.querySelector(".navbar-nav");

    hamburgerMenu.addEventListener("click", function (event) {
        event.preventDefault();
        navbarNav.classList.toggle("active"); // Toggle class "active"
    });

    // Pastikan Feather Icons dimuat
    feather.replace();
});

const hamburger = document.querySelector('hamburger-menu');

document.addEventListener("click", function (event) {
    const navMenu = document.querySelector(".navbar-nav"); // Ambil elemen menu
    const hamburger = document.querySelector("#hamburger-menu"); // Ambil icon hamburger

    // Cek apakah klik terjadi di luar menu dan bukan pada icon hamburger
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove("active"); // Hilangkan class active untuk menutup menu
    }
});
AOS.init({
    once: false, // Supaya animasi diputar ulang setiap kali elemen masuk viewport
  });

  document.addEventListener("DOMContentLoaded", function () {
    function showContent(tab) {
        // Sembunyikan semua konten
        document.querySelectorAll(".content").forEach(content => {
            content.classList.remove("active");
        });

        // Hapus class active dari semua tab
        document.querySelectorAll(".portfolio-tab").forEach(tabElement => {
            tabElement.classList.remove("active");
        });

        // Tampilkan hanya konten yang dipilih
        document.getElementById(tab).classList.add("active");

        // Tambahkan class active ke tab yang diklik
        document.querySelector(`.portfolio-tab[data-target="${tab}"]`).classList.add("active");
    }

    // Tambahkan event listener ke semua tab di portfolio
    document.querySelectorAll(".portfolio-tab").forEach(tab => {
        tab.addEventListener("click", function () {
            showContent(this.getAttribute("data-target"));
        });
    });

    // Set default tab aktif saat halaman dimuat
    showContent(document.querySelector(".portfolio-tab.active").getAttribute("data-target"));

    // Tombol Projects di Home
    const projectButton = document.querySelector(".project"); 
    if (projectButton) {
        projectButton.addEventListener("click", function () {
            // Arahkan ke bagian portfolio dengan smooth scroll
            const portfolioSection = document.getElementById("portfolio");
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: "smooth" });
            }

            // Tunggu sedikit sebelum mengganti tab (agar scroll tidak terganggu)
            setTimeout(() => {
                showContent("projects");
            }, 500); // Delay 500ms agar tab "Projects" tetap aktif setelah scrolling
        });
    }
});

document.getElementById("downloadCV").addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/1CgksobBC5LzStfWZFzUaVWtaaxUfVm8-/view?usp=sharing", "_blank");
});


// Ambil elemen modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");

// Tambahkan event listener ke setiap gambar sertifikat
document.querySelectorAll(".certificate").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Tutup modal saat tombol close ditekan
document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
});

// Tutup modal jika klik di luar gambar
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


  gsap.utils.toArray('.animated-element').forEach(element => {
    gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none none",
        }}
    );
});

// Inisialisasi EmailJS (Ganti dengan User ID dari EmailJS)
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("PHwhh2m-Q4vuaNsxJ"); // Ganti dengan User ID EmailJS kamu

    document.getElementById("send-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil nilai dari input form
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Validasi form agar tidak kosong
        if (name === "" || email === "" || message === "") {
            alert("Harap isi semua field sebelum mengirim pesan!");
            return;
        }

        // Kirim email dengan EmailJS
        emailjs.send("service_utaxkts", "template_4e2ll1b", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            alert("Pesan berhasil dikirim!");
            console.log("SUCCESS!", response);
        }, function(error) {
            alert("Gagal mengirim pesan, coba lagi.");
            console.log("FAILED...", error);
        });
    });
});

// Function to handle posting the comment

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".portfolio-tab").forEach((tab) => {
      tab.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
  
        console.log("Tab diklik:", targetId); // Debugging
  
        if (targetElement) {
          console.log("Elemen ditemukan:", targetElement); // Debugging
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log("Elemen tidak ditemukan!");
        }
      });
    });
  });
  

