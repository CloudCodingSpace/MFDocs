let currentPage = window.location.pathname.split("/").pop();
if (!currentPage) currentPage = "index.html";

document.querySelectorAll(".sidebar a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
    link.classList.add("active");
    }
});