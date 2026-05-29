import sharp from "sharp";

async function analyze(p) {
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let rightBright = 0;
  let rightDark = 0;
  let leftBright = 0;
  let leftDark = 0;
  for (let y = 0; y < height; y++) {
    for (let x = Math.floor(width * 0.55); x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      if (r > 200) rightBright++;
      else if (r < 50) rightDark++;
    }
    for (let x = 0; x < Math.floor(width * 0.35); x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      if (r > 200) leftBright++;
      else if (r < 50) leftDark++;
    }
  }
  const r0 = data[0];
  const g0 = data[1];
  const b0 = data[2];
  console.log(
    p.split(/[/\\]/).pop(),
    `${width}x${height}`,
    `corner=${r0},${g0},${b0}`,
    `left bright=${leftBright} dark=${leftDark}`,
    `right bright=${rightBright} dark=${rightDark}`
  );
}

for (const p of process.argv.slice(2)) {
  await analyze(p);
}
