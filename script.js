
// 29-maktab rasmiy veb-sayti

document.addEventListener("DOMContentLoaded", () => {
    console.log("29-maktab sayti muvaffaqiyatli ishga tushdi!");

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Tanlangan bo'lim:", link.textContent);
        });
    });
});
