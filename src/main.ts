import { Navbar } from "./components/navbar";
import { HomePage } from "./components/home";
import { ProfilePage } from "./components/profile";

const app = document.querySelector<HTMLDivElement>("#app")!;

async function load(page: string) {
    // ---- 1. LOAD PAGE HTML ----
    let pageHtml = "";

    if (page === "home") {
        pageHtml = HomePage();
    }

    if (page === "profile") {
        const res = await fetch("https://127.0.0.1:8000/api/profile/");
        const data = await res.json();
        pageHtml = ProfilePage(data);
    }

    // ---- 2. RENDER NAV + PAGE ----
    app.innerHTML = Navbar() + pageHtml;

    // ---- 3. RE-ATTACH CLICK HANDLERS (because DOM was replaced) ----
    attachEvents();
}

function attachEvents() {
    document.getElementById("home-link")?.addEventListener("click", (e) => {
        e.preventDefault();
        load("home");
    });

    document.getElementById("profile-link")?.addEventListener("click", (e) => {
        e.preventDefault();
        load("profile");
    });
}

// default page
load("home");
