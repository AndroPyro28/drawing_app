import "./style.css";

window.addEventListener("load", (_) => {
  const canvas = document.querySelector("#canvas")! as HTMLCanvasElement;

  const ctx = canvas.getContext("2d")!;

  //resizing

  canvas.height = window.innerHeight;
  canvas.width = 800;
  ctx.strokeStyle = 'yellow'

  // x, y, width, height strokeRectangle
  // ctx.strokeStyle = 'blue'
  // ctx.fillStyle = 'red'
  // ctx.strokeRect(50, 50, 200, 200);

  // line x and y

  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200, 100);
  // ctx.lineTo(200, 150);
  // ctx.closePath()
  // ctx.stroke()

  let painting = false;

  // event listener

  const startPosition = (e: MouseEvent): void => {
    ctx.beginPath();
    painting = true;
    draw(e);
  };

  const finishPosition = (): void => {
    painting = false;
  };

  const draw = (e: MouseEvent) => {
    if (painting) {

      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      const coordX = e.clientX;
      const coordY = e.clientY - 40;
      ctx.lineTo(coordX, coordY);
      ctx.stroke();

      ctx.moveTo(coordX, coordY);
    }
  };

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishPosition);
  canvas.addEventListener("mousemove", draw);
  const buttonPrint = document.querySelector("#putImageBtn")!;
  const buttonClear = document.querySelector("#clearCanvasBtn")!;
  const img = document.querySelector("#img")! as HTMLImageElement;

  const btnBlue = document.querySelector("#btnBlue");
  const btnRed = document.querySelector("#btnRed");
  const btnGreen = document.querySelector("#btnGreen");
  const btnYellow = document.querySelector("#btnYellow");
  const btnWhite = document.querySelector("#btnWhite");
  const btnBrown = document.querySelector("#btnBrown");

  btnBlue?.addEventListener("click", () => {
     ctx.strokeStyle = 'blue'
  });
  btnRed?.addEventListener("click", () => {
     ctx.strokeStyle = 'red'
  });
  btnGreen?.addEventListener("click", () => {
     ctx.strokeStyle = 'green'
  });
  btnYellow?.addEventListener("click", () => {
     ctx.strokeStyle = 'yellow'
  });

  btnWhite?.addEventListener("click", () => {
    ctx.strokeStyle = 'white'
 });
  btnBrown?.addEventListener("click", () => {
     ctx.strokeStyle = 'brown'
  });

  buttonPrint.addEventListener("click", () => {
    // const imgData = ctx.getImageData(0,0, 1000, 1000);

    const dataURL = canvas.toDataURL();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    img.src = dataURL;
    // ctx.putImageData(dataURL, 100, 100);
  });

  buttonClear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    img.src = "";
  });
});
