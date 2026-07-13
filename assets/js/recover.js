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
        <div id="bar1" class="fill"></div>
      </div>

      <p id="line2">&nbsp;</p>
      <div class="bar">
        <div id="bar2" class="fill"></div>
      </div>

      <p id="line3">&nbsp;</p>
      <div class="bar">
        <div id="bar3" class="fill"></div>
      </div>

      <p id="final">&nbsp;</p>

    </div>
  `;

  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  function animateBar(bar, duration) {
    return bar.animate(
      [
        { width: "0%" },
        { width: "11%", offset: 0.12 },
        { width: "11%", offset: 0.20 },

        { width: "29%", offset: 0.34 },
        { width: "29%", offset: 0.43 },

        { width: "52%", offset: 0.57 },
        { width: "52%", offset: 0.66 },

        { width: "73%", offset: 0.78 },
        { width: "73%", offset: 0.85 },

        { width: "91%", offset: 0.94 },
        { width: "100%" }
      ],
      {
        duration: duration,
        easing: "steps(20, end)",
        fill: "forwards"
      }
    );
  }

  setTimeout(() => {
    animateBar(bar1, 1800);
  }, 300);

  setTimeout(() => {
    document.getElementById("line2").textContent =
      "Decrypting media...";

    animateBar(bar2, 2100);
  }, 2400);

  setTimeout(() => {
    document.getElementById("line3").textContent =
      "Restoring projection...";

    animateBar(bar3, 2400);
  }, 5000);

  setTimeout(() => {
    document.getElementById("final").textContent =
      "Projection ready.";
  }, 7700);

  setTimeout(() => {
    document
      .getElementById("terminal")
      .classList.add("screen-flicker");
  }, 8300);

  setTimeout(() => {
    window.location.href = destination;
  }, 9300);
}
