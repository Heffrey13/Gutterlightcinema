document.addEventListener(
  "DOMContentLoaded",
  function () {

    const body =
      document.body;

    const systemMessage =
      document.getElementById(
        "systemMessage"
      );

    const missingValue =
      document.getElementById(
        "missingValue"
      );

    const indexedValue =
      document.getElementById(
        "indexedValue"
      );

    const filenames =
      document.querySelectorAll(
        ".cache-entry a"
      );

    /*
      DIGITAL OVERLAYS
    */

    const scanlines =
      document.createElement("div");

    scanlines.className =
      "cache-scanlines";

    body.appendChild(
      scanlines
    );

    const noise =
      document.createElement("div");

    noise.className =
      "cache-noise";

    body.appendChild(
      noise
    );

    /*
      HELPERS
    */

    function randomBetween(
      minimum,
      maximum
    ) {
      return (
        Math.random() *
        (
          maximum -
          minimum
        )
        +
        minimum
      );
    }

    function scheduleRandom(
      callback,
      minimumDelay,
      maximumDelay
    ) {
      const delay =
        randomBetween(
          minimumDelay,
          maximumDelay
        );

      setTimeout(
        function () {
          callback();

          scheduleRandom(
            callback,
            minimumDelay,
            maximumDelay
          );
        },
        delay
      );
    }

    function corruptText(
      text
    ) {
      if (!text) {
        return text;
      }

      const characters =
        "█▓▒░#@%&?/";

      const validIndexes = [];

      for (
        let index = 0;
        index < text.length;
        index += 1
      ) {
        if (
          text[index] !== " "
        ) {
          validIndexes.push(
            index
          );
        }
      }

      if (
        validIndexes.length === 0
      ) {
        return text;
      }

      const targetIndex =
        validIndexes[
          Math.floor(
            Math.random() *
            validIndexes.length
          )
        ];

      const replacement =
        characters[
          Math.floor(
            Math.random() *
            characters.length
          )
        ];

      return (
        text.slice(
          0,
          targetIndex
        )
        +
        replacement
        +
        text.slice(
          targetIndex + 1
        )
      );
    }

    /*
      SYSTEM MESSAGES
    */

    const messages = [
      "USER NOT RECOGNIZED",
      "INDEX PARTIAL",
      "RESIDUAL DATA DETECTED",
      "UNKNOWN USER",
      "ARCHIVE MISMATCH",
      "UNAUTHORIZED INDEX",
      "THIS FILE SHOULD NOT EXIST",
      "SESSION TRACE INCOMPLETE"
    ];

    function showSystemMessage() {
      if (!systemMessage) {
        return;
      }

      systemMessage.textContent =
        messages[
          Math.floor(
            Math.random() *
            messages.length
          )
        ];

      systemMessage.style.opacity =
        "0.82";

      setTimeout(
        function () {
          systemMessage.style.opacity =
            "0";
        },
        randomBetween(
          700,
          1450
        )
      );
    }

    scheduleRandom(
      showSystemMessage,
      18000,
      42000
    );

    /*
      FILENAME CORRUPTION
    */

    function glitchFilename() {
      if (
        filenames.length === 0
      ) {
        return;
      }

      const filename =
        filenames[
          Math.floor(
            Math.random() *
            filenames.length
          )
        ];

      const originalText =
        filename.textContent;

      filename.textContent =
        corruptText(
          originalText
        );

      filename.style.textShadow =
        "-1px 0 rgba(255,0,70,.8), 1px 0 rgba(0,210,255,.65)";

      setTimeout(
        function () {
          filename.textContent =
            originalText;

          filename.style.textShadow =
            "";
        },
        randomBetween(
          180,
          420
        )
      );
    }

    scheduleRandom(
      glitchFilename,
      14000,
      36000
    );

    /*
      STAT FLICKERS
    */

    function flickerMissingCount() {
      if (!missingValue) {
        return;
      }

      const original =
        missingValue.textContent;

      const temporaryValues = [
        "83",
        "85",
        "██",
        "?",
        "0",
        "84"
      ];

      missingValue.textContent =
        temporaryValues[
          Math.floor(
            Math.random() *
            temporaryValues.length
          )
        ];

      missingValue.style.color =
        "#d35f6a";

      setTimeout(
        function () {
          missingValue.textContent =
            original;

          missingValue.style.color =
            "";
        },
        randomBetween(
          250,
          650
        )
      );
    }

    function flickerIndexedCount() {
      if (!indexedValue) {
        return;
      }

      const original =
        indexedValue.textContent;

      const temporaryValues = [
        "3",
        "21",
        "1",
        "█",
        "2"
      ];

      indexedValue.textContent =
        temporaryValues[
          Math.floor(
            Math.random() *
            temporaryValues.length
          )
        ];

      setTimeout(
        function () {
          indexedValue.textContent =
            original;
        },
        randomBetween(
          220,
          500
        )
      );
    }

    scheduleRandom(
      flickerMissingCount,
      22000,
      52000
    );

    scheduleRandom(
      flickerIndexedCount,
      30000,
      65000
    );

    /*
      PAGE INSTABILITY
    */

    function pageJolt() {
      body.style.transform =
        "translate(" +
        randomBetween(
          -1.4,
          1.4
        ).toFixed(2) +
        "px, " +
        randomBetween(
          -0.7,
          0.7
        ).toFixed(2) +
        "px)";

      body.style.filter =
        "contrast(1.08)";

      setTimeout(
        function () {
          body.style.transform =
            "";

          body.style.filter =
            "";
        },
        randomBetween(
          70,
          150
        )
      );
    }

    scheduleRandom(
      pageJolt,
      20000,
      48000
    );

    /*
      RARE NOISE FLASH
    */

    function noiseFlash() {
      noise.style.opacity =
        "0.32";

      setTimeout(
        function () {
          noise.style.opacity =
            "0.12";
        },
        randomBetween(
          60,
          130
        )
      );
    }

    scheduleRandom(
      noiseFlash,
      32000,
      72000
    );

  }
);
