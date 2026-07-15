document.addEventListener(
  "DOMContentLoaded",
  function () {

    //
    // Add digital overlay layers
    //

    const scan =
      document.createElement("div");

    scan.className =
      "cache-scanlines";

    document.body.appendChild(
      scan
    );

    const noise =
      document.createElement("div");

    noise.className =
      "cache-noise";

    document.body.appendChild(
      noise
    );

    //
    // Filename corruption
    //

    const files =
      document.querySelectorAll(
        ".cache-filename"
      );

    function corruptText(
      text
    ) {

      const chars =
        "█▓▒#@%&";

      const index =
        Math.floor(
          Math.random() *
          text.length
        );

      return (
        text.substring(
          0,
          index
        )
        +
        chars[
          Math.floor(
            Math.random() *
            chars.length
          )
        ]
        +
        text.substring(
          index + 1
        )
      );

    }

    setInterval(
      function () {

        if (
          files.length === 0
        ) return;

        const file =
          files[
            Math.floor(
              Math.random() *
              files.length
            )
          ];

        const original =
          file.textContent;

        file.textContent =
          corruptText(
            original
          );

        setTimeout(
          function () {

            file.textContent =
              original;

          },
          350
        );

      },
      18000 +
      Math.random() *
      22000
    );

    //
    // Tiny random page glitches
    //

    setInterval(
      function () {

        document.body.style.transform =
          "translateX(" +
          (
            Math.random() * 2 - 1
          ) +
          "px)";

        setTimeout(
          function () {

            document.body.style.transform =
              "";

          },
          120
        );

      },
      30000 +
      Math.random() *
      30000
    );

    //
    // Rare flash
    //

    setInterval(
      function () {

        noise.style.opacity =
          ".35";

        setTimeout(
          function () {

            noise.style.opacity =
              ".12";

          },
          100
        );

      },
      45000 +
      Math.random() *
      40000
    );

  }
);
