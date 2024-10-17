const rootColors = {
    "--A-text" :        "#774E24",
    "--A-background" :  "#FFFFB3",
    "--A-primary" :     "#6E0D25",
    "--A-secondary" :   "#DCAB6B",
    "--A-accent" :      "#6A381F"
};

// Sets the color values globally
const colors = () => {
    for (let value in rootColors) {
        let color = rootColors[value]
        document.documentElement.style.setProperty(value, color, "important");
    }
}
colors();