// Typing animation
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "System Developer", "Programmer"],
    typeSpeed: 150,
    BackSpeed: 60,
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

// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image, caption, and demo link
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var demoLink = document.getElementById("demoLink");

// Get all elements with class "project-img" and add click event
var projectImages = document.getElementsByClassName("project-img");
for (var i = 0; i < projectImages.length; i++) {
  projectImages[i].onclick = function(e) {
    if (e.target.classList.contains('view-project-btn')) {
      // If the clicked element is the "View Project" button, open the modal
      openModal(this);
    }
  }
}

// Function to open the modal
function openModal(projectElement) {
  modal.style.display = "block";
  modalImg.src = projectElement.querySelector('img').src;
  captionText.innerHTML = projectElement.querySelector('img').alt;
  
  // Set the demo link
  var demoUrl = projectElement.getAttribute('data-demo-url');
  if (demoUrl) {
    demoLink.style.display = 'inline-block';
    demoLink.href = demoUrl;
  } else {
    demoLink.style.display = 'none';
  }
  
  // Center the demo link button
  setTimeout(function() {
    demoLink.style.display = 'block';
    demoLink.style.margin = '20px auto';
  }, 100);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add click event to "View Project" buttons
var viewProjectBtns = document.getElementsByClassName("view-project-btn");
for (var i = 0; i < viewProjectBtns.length; i++) {
  viewProjectBtns[i].onclick = function(e) {
    e.stopPropagation(); // Prevent event bubbling
    var projectElement = this.closest('.project-img');
    openModal(projectElement);
  }
}