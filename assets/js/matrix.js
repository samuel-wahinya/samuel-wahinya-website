const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const columns = Math.floor(canvas.width / 10);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // fading trail
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 170, 255, 0.7)";
    ctx.font = "12px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.random() * 94); // random symbols
        ctx.fillText(text, i * 10, drops[i]);

        if (drops[i] * 10 > canvas.height || Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i] += 10;
    }
}

setInterval(drawMatrix, 60);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
