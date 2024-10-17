document.body.style.backgroundColor = "var(--A-background)"

const allNavDependencies = document.querySelector("nav");
allNavDependencies.style.backgroundColor = "var(--A-secondary)";

const allATag = document.querySelector("a");
allATag.style.color = "var(--A-accent)";

const hTag = document.querySelector("h1");
hTag.style.color = "var(--A-accent)"

let url = "https://www.gites-de-france.com/sites/default/files/styles/facebook_1200x630/public/ispagnac-lozere.jpeg"
const headerTag = document.querySelector("header");
headerTag.style.background = "url("+ url +") bottom";
headerTag.style.backgroundSize = "cover";
headerTag.style.backgroundRepeat = "no-repeat";
headerTag.style.backgroundAttachment = "fixed";