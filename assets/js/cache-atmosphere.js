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
      VISIT MEMORY
    */

    const previousVisits =
      Number(
        localStorage.getItem(
          "cacheVisitCount"
        ) || 0
      );

    const currentVisit =
      previousVisits + 1;

    localStorage.setItem(
      "cacheVisitCount",
      String(currentVisit)
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

    function chooseRandom(
      items
    ) {
      return items[
        Math.floor(
          Math.random() *
          items.length
        )
      ];
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

      const validIndexes =
        [];

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
        chooseRandom(
          validIndexes
        );

      const replacement =
        chooseRandom(
          characters.split("")
        );

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
      VISIT-AWARE MESSAGE POOLS
    */

    const commonMessages = [
      "INDEX PARTIAL",
      "RESIDUAL DATA DETECTED",
      "ARCHIVE MISMATCH",
      "SESSION TRACE INCOMPLETE"
    ];

    const returningMessages = [
      "USER NOT RECOGNIZED",
      "UNKNOWN USER",
      "UNAUTHORIZED INDEX",
      "CACHE ACCESS REPEATED"
    ];

    const familiarMessages = [
      "YOU RETURNED",
      "SESSION PATTERN DETECTED",
      "PREVIOUS ACCESS CONFIRMED",
      "ARCHIVE REMEMBERS"
    ];

    const deepMessages = [
      "CONNECTED USERS: 2",
      "SESSION OBSERVED",
      "ARCHITECT PROCESS ACTIVE",
      "THIS FILE SHOULD NOT EXIST"
    ];

    function getMessagePool() {

      let pool =
        [...commonMessages];

      if (
        currentVisit >= 2
      ) {
        pool = pool.concat(
          returningMessages
        );
      }

      if (
        currentVisit >= 4
      ) {
        pool = pool.concat(
          familiarMessages
        );
      }

      if (
        currentVisit >= 7
      ) {
        pool = pool.concat(
          deepMessages
        );
      }

      return pool;
    }

    function showSystemMessage() {

      if (!systemMessage) {
        return;
      }

      const message =
        chooseRandom(
          getMessagePool()
        );

      systemMessage.textContent =
        message;

      systemMessage.style.opacity =
        "0.82";

      setTimeout(
        function () {

          systemMessage.style.opacity =
            "0";

        },
        randomBetween(
          850,
          1600
        )
      );
    }

    /*
      FIRST-VISIT-SPECIFIC EVENT
    */

    if (
      currentVisit === 1
    ) {

      setTimeout(
        function () {

          if (!systemMessage) {
            return;
          }

          systemMessage.textContent =
            "UNAUTHORIZED INDEX";

          systemMessage.style.opacity =
            "0.75";

          setTimeout(
            function () {

              systemMessage.style.opacity =
                "0";

            },
            1100
          );

        },
        18000
      );

    }

    /*
      RETURNING-VISITOR EVENT
    */

    if (
      currentVisit >= 3
    ) {

      setTimeout(
        function () {

          if (!systemMessage) {
            return;
          }

          systemMessage.textContent =
            "YOU RETURNED";

          systemMessage.style.opacity =
            "0.88";

          setTimeout(
            function () {

              systemMessage.style.opacity =
                "0";

            },
            1500
          );

        },
        9000
      );

    }

    /*
      COMMON SYSTEM MESSAGES
    */

    scheduleRandom(
      showSystemMessage,
      30000,
      90000
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
        chooseRandom(
          Array.from(
            filenames
          )
        );

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
      15000,
      45000
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
        "0"
      ];

      missingValue.textContent =
        chooseRandom(
          temporaryValues
        );

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
        "█"
      ];

      indexedValue.textContent =
        chooseRandom(
          temporaryValues
        );

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
      45000,
      120000
    );

    scheduleRandom(
      flickerIndexedCount,
      60000,
      150000
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
      30000,
      90000
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
      90000,
      240000
    );

    /*
      CURSOR INSTABILITY
      DESKTOP / MOUSE ONLY
    */

    if (
      window.matchMedia(
        "(pointer: fine)"
      ).matches
    ) {

      let lastMouseMove =
        Date.now();

      document.addEventListener(
        "mousemove",
        function () {

          lastMouseMove =
            Date.now();

        }
      );

      /*
        Brief cursor change
      */

      scheduleRandom(
        function () {

          body.style.cursor =
            "crosshair";

          setTimeout(
            function () {

              body.style.cursor =
                "";

            },
            140
          );

        },
        90000,
        240000
      );

      /*
        Brief cursor disappearance
      */

      scheduleRandom(
        function () {

          body.style.cursor =
            "none";

          setTimeout(
            function () {

              body.style.cursor =
                "";

            },
            100
          );

        },
        150000,
        360000
      );

      /*
        Slight idle drag
      */

      scheduleRandom(
        function () {

          const idleTime =
            Date.now() -
            lastMouseMove;

          if (
            idleTime < 3500
          ) {
            return;
          }

          body.style.transform =
            "translate(" +
            randomBetween(
              -2,
              2
            ).toFixed(2) +
            "px, " +
            randomBetween(
              -2,
              2
            ).toFixed(2) +
            "px)";

          setTimeout(
            function () {

              body.style.transform =
                "";

            },
            240
          );

        },
        60000,
        180000
      );

    }

  }
);
