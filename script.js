function login() {
    document.querySelector(".glass-effect").classList.add("animate-fade-out");
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
    const unbanButtons = document.querySelectorAll(".unban-btn");
    unbanButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("User has been unbanned (Demo Only)");
        });
    });

    const unmuteButtons = document.querySelectorAll(".unmute-btn");
    unmuteButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("User has been unmuted (Demo Only)");
        });
    });
});
