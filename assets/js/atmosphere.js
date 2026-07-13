function createDustLayer() {
  if (document.querySelector(".dust-layer")) {
    return;
  }

  const layer = document.createElement("div");
  layer.className = "dust-layer";
  layer.setAttribute("aria-hidden", "true");

  const particleCount = 32;

  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement("span");

    particle.className = "dust-particle";

    const size =
      (Math.random() * 2.4 + 0.7).toFixed(2);

    const opacity =
      (Math.random() * 0.30 + 0.10).toFixed(2);

    const duration =
      (Math.random() * 14 + 14).toFixed(2);

    const delay =
      -(Math.random() * 26).toFixed(2);

    const drift =
      (Math.random() * 140 - 70).toFixed(0);

    particle.style.left =
      `${Math.random() * 100}%`;

    particle.style.setProperty(
      "--dust-size",
      `${size}px`
    );

    particle.style.setProperty(
      "--dust-opacity",
      opacity
    );

    particle.style.setProperty(
      "--dust-duration",
      `${duration}s`
    );

    particle.style.setProperty(
      "--dust-delay",
      `${delay}s`
    );

    particle.style.setProperty(
      "--dust-drift",
      `${drift}px`
    );

    layer.appendChild(particle);
  }

  document.body.prepend(layer);
}

document.addEventListener(
  "DOMContentLoaded",
  createDustLayer
);

/*
  The recovery sequence replaces the body's contents.
  This observer automatically restores the dust afterward.
*/
const atmosphereObserver =
  new MutationObserver(() => {
    if (
      document.body &&
      !document.querySelector(".dust-layer")
    ) {
      createDustLayer();
    }
  });

atmosphereObserver.observe(
  document.documentElement,
  {
    childList: true,
    subtree: true
  }
);
