// const containerFull = document.querySelector(".containerFull")

var myCanvas = document.createElement('canvas');
$('.containerFull').prepend(myCanvas);

var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
});

var duration = 20 * 1000;
var end = Date.now() + duration;

(function frame() {
    // launch a few confetti from the left edge
    confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });
    // and launch a few from the right edge
    confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });

    // keep going until we are out of time
    if (Date.now() < end) {
        requestAnimationFrame(frame);

        // $('.containerFull').prepend('~&nbsp;');
    }

}());

myConfetti({
    particleCount: 100,
    spread: 160
    // any other options from the global
    // confetti function
});


const formMain = document.getElementById("formMain");

formMain.addEventListener("submit", submitForm);

async function submitForm(e) {
    // alert("yes")
    e.preventDefault();
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const file = document.getElementById("files");

    const formData = new FormData();

    formData.append("name", name.value);
    formData.append("description", description.value);
    // console.log(files.files[0])
    formData.append("files", file.files[0]);

    fetch("http://localhost:5000/user_data", {
        method: 'post',
        body: formData
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
}