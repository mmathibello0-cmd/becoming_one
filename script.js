```javascript
/* ==========================================
   OPERATION: BECOMING ONE
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Loading Screen
    ========================== */

    const loader = document.querySelector(".loader");

    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        });
    }

    /* ==========================
       Navbar Scroll Effect
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.style.padding = "10px 0";
            navbar.style.background = "#000";

        } else {

            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(0,0,0,.45)";

        }

    });

    /* ==========================
       Fade-In Sections
    ========================== */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* ==========================
       Active Navigation Link
    ========================== */

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        document.querySelectorAll("section").forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Scroll To Top Button
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.className = "top-btn";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.opacity = "1";
            topBtn.style.pointerEvents = "auto";

        } else {

            topBtn.style.opacity = "0";
            topBtn.style.pointerEvents = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /* ==========================
       Image Hover Glow
    ========================== */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.03)";
            img.style.boxShadow = "0 20px 50px rgba(212,175,55,.35)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";
            img.style.boxShadow = "";

        });

    });

    /* ==========================
       Hero Typing Effect
    ========================== */

    const hero = document.querySelector(".hero h1");

    if (hero) {

        const original = hero.textContent;

        hero.textContent = "";

        let i = 0;

        function type() {

            if (i < original.length) {

                hero.textContent += original.charAt(i);

                i++;

                setTimeout(type, 80);

            }

        }

        type();

    }

});
```
