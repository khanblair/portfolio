// Typing animation (updated roles)
var typed = new Typed(".typing", {
    strings: ["", "Software Developer", "Mobile App Developer", "System Designer", "Graphics Designer"],
  typeSpeed: 120,
    backSpeed: 60,
  loop: true
})

// Aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for(let i=0; i<totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j=0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for(let i=0; i<totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Hire Me button
document.querySelector(".hire-me").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default link behavior
    const contactLink = document.querySelector('a[href="#contact"]');
    removeBackSection();
    showSection(contactLink);
    updateNav(contactLink);
    if(window.innerWidth < 1200) {
        asideSectionTogglerBtn();
    }
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Project filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('#projectGrid .project-item');

function applyFilter(filter) {
  projectItems.forEach((item) => {
    const tech = (item.getAttribute('data-tech') || '').toLowerCase();
    const match = filter === 'all' || tech.includes(filter);
    item.style.display = match ? '' : 'none';
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.getAttribute('data-filter'));
  });
});

// Initialize default filter
applyFilter('all');

// Contact form now posts to Web3Forms (no JS needed)

// Image lightbox for project and certification images
(function setupImageLightbox(){
    var modal = document.getElementById('imageModal');
    if(!modal) return;
    var modalImg = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');
    var closeBtn = modal.querySelector('.close');

    function openModal(src, caption){
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden','false');
        modalImg.src = src;
        modalImg.alt = caption || 'Preview image';
        captionText.textContent = caption || '';
    }
    function closeModal(){
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden','true');
        modalImg.src = '';
        captionText.textContent = '';
    }

    // Project images (cards)
    document.querySelectorAll('.project-card .project-image img').forEach(img => {
        img.addEventListener('click', () => openModal(img.src, img.getAttribute('data-caption') || img.alt));
    });
    // Restored demo project overlays: clicking on image (not the button) opens modal with the image; clicking button opens demo URL
    document.querySelectorAll('.project-img img').forEach(img => {
        img.addEventListener('click', (e) => {
            const container = img.closest('.project-img');
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt') || '';
            openModal(src, alt);
        });
    });
    document.querySelectorAll('.project-img .view-project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const container = btn.closest('.project-img');
            const url = container?.getAttribute('data-demo-url');
            if (url) window.open(url, '_blank');
        });
    });
    // Certification thumbs
    document.querySelectorAll('.certifications-list .cert-thumb').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openModal(img.src, img.nextElementSibling?.textContent || 'Certificate'));
    });
    // Designs grid images
    document.querySelectorAll('#designGrid .design-image img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openModal(img.src, img.getAttribute('data-caption') || img.alt));
    });
    // Close controls
    closeBtn && closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
    window.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });
})();