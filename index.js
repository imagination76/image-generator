const { createCanvas } = require('canvas');
const fs = require('fs');

function generateRandomImage(width = 500, height = 500, fileName = 'random.png') {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');




    
    // Fill with a random background color
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(0, 0, width, height);

    // Draw random circles
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * width,
            Math.random() * height,
            Math.random() * (width / 5),
            0,
            Math.PI * 2
        );
        ctx.fillStyle = getRandomColor();
        ctx.fill();
    }

    // Draw random lines
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.lineTo(Math.random() * width, Math.random() * height);
        ctx.strokeStyle = getRandomColor();
        ctx.lineWidth = Math.random() * 5;
        ctx.stroke();
    }

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(fileName, buffer);
    console.log(`Image saved as ${fileName}`);
}

function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

// Generate the image
generateRandomImage();
