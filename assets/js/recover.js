function recover(correctPhrase, destination) {
  const input = document.getElementById("pw").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (input === correctPhrase.toLowerCase()) {
    document.body.innerHTML = `
      <div class="container">
        <h1>RECOVERING...</h1>

        <p>Verifying artifact...</p>
        <div class="bar"><div class="fill"></div></div>

        <p>Decrypting media...</p>
        <div class="bar"><div class="fill"></div></div>

        <p>Restoring projection...</p>
        <div class="bar"><div class="fill"></div></div>

        <p>Projection ready.</p>
      </div>
    `;

    setTimeout(() => {
      window.location.href = destination;
    }, 2800);
  } else {
    error.innerHTML = "Recovery failed.<br>Please examine the artifact again.";
  }
}
