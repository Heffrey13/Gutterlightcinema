function recover(correctPhrase, destination) {
  const input = document
    .getElementById("pw")
    .value
    .trim()
    .toLowerCase();

  const error = document.getElementById("error");

  if (input !== correctPhrase.toLowerCase()) {
    error.innerHTML =
      "Recovery failed.<br>Please examine the artifact again.";
    return;
  }

  document.body.innerHTML = `
    <div class="container recovery-terminal" id="terminal">
      <h1>RECOVERING...</h1>

      <p>Verifying artifact...</p>
      <div class="bar">
        <div class="fill fill-one"></div>
      </div>

      <p id="line2">&nbsp;</p>
      <div class="bar">
        <div class="fill fill-two"></div>
      </div>

      <p id="line3">&nbsp;</p>
      <div class="bar">
        <div class="fill fill-three"></div>
      </div>

      <p id="final">&nbsp;</p>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("line2").textContent =
      "Decrypting media...";
  }, 2200);

  setTimeout(() => {
    document.getElementById("line3").textContent =
      "Restoring projection...";
  }, 4600);

  setTimeout(() => {
    document.getElementById("final").textContent =
      "Projection ready.";
  }, 7400);

  setTimeout(() => {
    document
      .getElementById("terminal")
      .classList.add("screen-flicker");
  }, 8000);

  setTimeout(() => {
    window.location.href = destination;
  }, 9000);
}
