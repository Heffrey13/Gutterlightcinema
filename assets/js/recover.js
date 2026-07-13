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

  document.body.textContent = "";

  const terminal = document.createElement("div");
  terminal.className = "container recovery-terminal";
  terminal.id = "terminal";

  const heading = document.createElement("h1");
  heading.textContent = "RECOVERING...";
  terminal.appendChild(heading);

  createStage(
    terminal,
    "Verifying artifact...",
    "fill-one"
  );

  const line2 = createStage(
    terminal,
    "",
    "fill-two"
  );
  line2.id = "line2";

  const line3 = createStage(
    terminal,
    "",
    "fill-three"
  );
  line3.id = "line3";

  const finalMessage = document.createElement("p");
  finalMessage.id = "final";
  finalMessage.innerHTML = "&nbsp;";
  terminal.appendChild(finalMessage);

  document.body.appendChild(terminal);

  setTimeout(() => {
    line2.textContent = "Decrypting media...";
  }, 2200);

  setTimeout(() => {
    line3.textContent = "Restoring projection...";
  }, 4600);

  setTimeout(() => {
    finalMessage.textContent = "Projection ready.";
  }, 7400);

  setTimeout(() => {
    terminal.classList.add("screen-flicker");
  }, 8000);

  setTimeout(() => {
    window.location.href = destination;
  }, 9000);
}

function createStage(parent, label, animationClass) {
  const text = document.createElement("p");
  text.textContent = label || "\u00A0";
  parent.appendChild(text);

  const bar = document.createElement("div");
  bar.className = "bar";

  const fill = document.createElement("div");
  fill.className = "fill " + animationClass;

  bar.appendChild(fill);
  parent.appendChild(bar);

  return text;
}
