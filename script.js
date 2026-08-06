/*==================================================
AMTT Conference 2026
Version 3
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Element
    ========================================== */

    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".menu-toggle");
    const progressBar = document.querySelector(".progress-bar");
    const loader = document.querySelector(".loader");
    const backToTop = document.querySelector(".back-to-top");

    /* ==========================================
       Loading
    ========================================== */

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 400);

    });

    /* ==========================================
       Sticky Navbar
    ========================================== */

    function stickyNavbar() {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    stickyNavbar();

    window.addEventListener("scroll", stickyNavbar);

    /* ==========================================
       Mobile Menu
    ========================================== */

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("show");

        });

    });

    /* ==========================================
       Active Menu
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".menu a");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const top = window.scrollY;

            const offset = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);

    /* ==========================================
       Scroll Progress
    ========================================== */

    function updateProgress() {

        const scrollTop = document.documentElement.scrollTop;

        const totalHeight =

            document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const progress = (scrollTop / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    /* ==========================================
       Back To Top
    ========================================== */

    function toggleTopButton() {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    toggleTopButton();

    window.addEventListener("scroll", toggleTopButton);

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});/*==================================================
COUNTDOWN
==================================================*/

const countdown = document.getElementById("countdown");

if (countdown) {

    const eventDate = new Date("2026-09-02T09:30:00+07:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = eventDate - now;

        if (distance <= 0) {

            countdown.innerHTML = `

                <div class="count-item">

                    <h2>0</h2>

                    <span>งานเริ่มแล้ว</span>

                </div>

            `;

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `

            <div class="count-item">

                <h2>${days}</h2>

                <span>วัน</span>

            </div>

            <div class="count-item">

                <h2>${hours}</h2>

                <span>ชั่วโมง</span>

            </div>

            <div class="count-item">

                <h2>${minutes}</h2>

                <span>นาที</span>

            </div>

            <div class="count-item">

                <h2>${seconds}</h2>

                <span>วินาที</span>

            </div>

        `;

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

}

/*==================================================
PROGRAMME TAB
==================================================*/

const tabButtons = document.querySelectorAll(".tab-button");

const programmeDays = document.querySelectorAll(".programme-day");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        programmeDays.forEach(day => {

            day.classList.remove("active");

        });

        button.classList.add("active");

        const target = button.dataset.day;

        document.getElementById(target).classList.add("active");

    });

});

/*==================================================
PROGRAMME ACCORDION
==================================================*/

const programmeButtons = document.querySelectorAll(".programme-toggle");

programmeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".programme-card");

        const detail = card.querySelector(".programme-detail");

        const icon = button.querySelector("i");

        if (card.classList.contains("active")) {

            card.classList.remove("active");

            detail.style.display = "none";

            icon.classList.remove("fa-chevron-up");

            icon.classList.add("fa-chevron-down");

        } else {

            card.classList.add("active");

            detail.style.display = "block";

            icon.classList.remove("fa-chevron-down");

            icon.classList.add("fa-chevron-up");

        }

    });

});

/*==================================================
FADE IN ANIMATION
==================================================*/

const fadeItems = document.querySelectorAll(

    ".about-card,.highlight-card,.programme-card,.speaker-card,.register-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

fadeItems.forEach(item => {

    observer.observe(item);

});/*==================================================
QR MODAL
==================================================*/

const qrModal = document.getElementById("qrModal");

const openQR = document.querySelectorAll(".open-qr");

const closeQR = document.getElementById("closeQR");

openQR.forEach(button => {

    button.addEventListener("click", () => {

        qrModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

if(closeQR){

    closeQR.addEventListener("click", () => {

        qrModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}

window.addEventListener("click", (e) => {

    if(e.target === qrModal){

        qrModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*==================================================
CURRENT YEAR
==================================================*/

const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}

/*==================================================
IMAGE LAZY LOAD
==================================================*/

const lazyImages = document.querySelectorAll("img[data-src]");

if(lazyImages.length){

    const imageObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                imageObserver.unobserve(img);

            }

        });

    });

    lazyImages.forEach(img=>{

        imageObserver.observe(img);

    });

}

/*==================================================
REVEAL ON SCROLL
==================================================*/

const revealItems=document.querySelectorAll(

".section-title,.about-card,.highlight-card,.programme-card,.speaker-card,.register-card,.venue-info"

);

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

revealItems.forEach(item=>{

    revealObserver.observe(item);

});

/*==================================================
CONSOLE MESSAGE
==================================================*/

console.clear();

console.log(

"%cAMTT Conference @ Thailand LAB 2026",

"color:#00A8E8;font-size:22px;font-weight:bold;"

);

console.log(

"%cAssociation of Medical Technologists of Thailand",

"color:#666;font-size:13px;"

);/*==================================================
HERO PARALLAX
==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const offset = window.pageYOffset;

    hero.style.backgroundPositionY = `${offset * 0.35}px`;

});

/*==================================================
HEADER SHADOW
==================================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector(".navbar");

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*==================================================
KEYBOARD ACCESSIBILITY
==================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (qrModal) {

            qrModal.classList.remove("show");

            document.body.style.overflow = "";

        }

    }

});

/*==================================================
IMAGE FADE IN
==================================================*/

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });

});

/*==================================================
EXTERNAL LINK
==================================================*/

document.querySelectorAll("a[target='_blank']").forEach(link => {

    if (!link.hasAttribute("rel")) {

        link.setAttribute(

            "rel",

            "noopener noreferrer"

        );

    }

});

/*==================================================
SMALL SCREEN FIX
==================================================*/

function checkMobile(){

    if(window.innerWidth < 768){

        document.body.classList.add("mobile");

    }

    else{

        document.body.classList.remove("mobile");

    }

}

checkMobile();

window.addEventListener("resize", checkMobile);

/*==================================================
ERROR PROTECTION
==================================================*/

window.addEventListener("error",(e)=>{

    console.warn(

        "Website Error :",

        e.message

    );

});

/*==================================================
UTILITY
==================================================*/

function debounce(fn, delay){

    let timer;

    return function(){

        clearTimeout(timer);

        timer = setTimeout(()=>{

            fn.apply(this, arguments);

        }, delay);

    }

}

window.addEventListener(

    "resize",

    debounce(()=>{

        console.log("Responsive Updated");

    },300)

);

/*==================================================
INITIALIZE
==================================================*/

console.log(

    "%cAMTT Conference Website Ready",

    "font-size:18px;color:#00A8E8;font-weight:bold"

);

console.log(

    "%cThailand LAB International 2026",

    "font-size:14px;color:#2DBE60"

);

/*==================================================
END
==================================================*/