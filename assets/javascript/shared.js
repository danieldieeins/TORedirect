const url = window.location.href;
const urlParams = new URLSearchParams(window.location.search);

function init() {
    if(urlParams.get("z")) {
        redirectZyneon(urlParams.get("z"));
    } else {
        window.location.href = "404.html?s=true";
    }
}

function redirectZyneon(goal) {
    if(goal.includes("apply")) {
        const apply = "https://projects.zyneonstudios.com/de/apply.html";
        goal = goal.replace("apply", "").toLowerCase();
        if(goal === "twitter"||goal === "x") {
            window.location.href = apply+"?from=x";
        } else if(goal === "bluesky"||goal === "bsky"||goal === "b") {
            window.location.href = apply+"?from=bluesky";
        } else if(goal === "instagram"||goal === "i"||goal === "insta") {
            window.location.href = apply+"?from=instagram";
        } else if(goal === "reddit"||goal === "r") {
            window.location.href = apply+"?from=reddit";
        } else if(goal === "threads"||goal === "t") {
            window.location.href = apply+"?from=threads";
        } else if(goal === "discord"||goal === "dc"||goal === "d") {
            window.location.href = apply+"?from=discord";
        } else if(goal === "website"||goal === "web"||goal === "w"||goal === "s"||goal === "self") {
            window.location.href = apply+"?from=self";
        } else {
            window.location.href = apply+"?from=other";
        }
    }
}

function redirect(newUrl_) {
    if (typeof newUrl_ === 'string') {
        const currentUrl = new URL(window.location.href);
        const searchParams = currentUrl.searchParams;
        const newUrl = newUrl_+ '?' + searchParams.toString();
        window.location.href = newUrl;
        return;
    }
    window.location.href = "404.html";
}