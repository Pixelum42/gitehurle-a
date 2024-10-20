const rootColors = {
    "--text" :        "#774E24",
    "--background" :  "#FFFFB3",
    "--primary" :     "#6E0D25",
    "--secondary" :   "#DCAB6B",
    "--accent" :      "#6A381F"
};

// Sets the color values globally
const colors = () => {
    for (let value in rootColors) {
        let color = rootColors[value];
        document.documentElement.style.setProperty(value, color, "important");
    }
}
colors();