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

      <p id="line1">Verifying artifact...</p>
      <div class="bar">
        <div id="fill1" class="fill"></div>
      </div>

      <p id="line2">&nbsp;</p>
      <div class="bar">
        <div id="fill2" class="fill"></div>
      </div>

      <p id="line3">&nbsp;</p>
      <div class="bar">
        <div id="fill3" class="fill"></div>
      </div>

      <p id="final">&nbsp;</p>
    </div>
  `;

  const fill1 = document.getElementById("fill1");
  const fill2 = document.getElementById("fill2");
  const fill3 = document.getElementById("fill3");

  // Start the first bar after the empty bars appear.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill1.style.width = "100%";
    });
  });

  setTimeout(() => {
    document.getElementById("line2").textContent =
      "Decrypting media...";
    fill2.style.width = "100%";
  }, 1500);

  setTimeout(() => {
    document.getElementById("line3").textContent =
      "Restoring projection...";
    fill3.style.width = "100%";
  }, 3000);

  setTimeout(() => {
    document.getElementById("final").textContent =
      "Projection ready.";
  }, 4400);

  setTimeout(() => {
    document
      .getElementById("terminal")
      .classList.add("screen-flicker");
  }, 5000);

  setTimeout(() => {
    window.location.href = destination;
  }, 5800);
}
