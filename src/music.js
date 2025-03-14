const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");

      let width = canvas.width;
      let height = canvas.height;
      let places = [];
      let saveplaces = [];
      const events = [];
      const eventsc = [];
      const eventscc = [];
      let time = 0;

      let audioContext = null; // Déclarer une instance unique d'AudioContext
      const gains = 0.1;

      // Initialise l'AudioContext après une interaction utilisateur
      document.addEventListener("click", () => {
        if (!audioContext) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          console.log("AudioContext initialisé !");
        }
      });

      function playSound(frequency) {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const amp = audioContext.createGain();
        amp.gain.value = gains;
        oscillator.type = "triangle";
        oscillator.frequency.value = frequency;
        oscillator.connect(amp).connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
      }

      function easeOutSine(x) {
        return Math.sin((x * Math.PI) / 2);
      }

      function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
      }

      function getDistance(a, b) {
        return Math.hypot(a.x - b.x, a.y - b.y);
      }

      function getAngle(a, b) {
        return Math.atan2(b.y - a.y, b.x - a.x);
      }

      function getPointAtAngle(center, angle, distance) {
        return {
          x: center.x + Math.cos(angle) * distance,
          y: center.y + Math.sin(angle) * distance,
        };
      }

      function cadre(a, b) {
        return { x: a, y: b };
      }

      function start() {
        // Initialize grid points
        for (let i = 0; i < 100; i++) {
          for (let j = 0; j < 100; j++) {
            let x = i * 10 + 5;
            let y = j * 10 + 5;
            places.push(cadre(x, y));
            saveplaces.push(cadre(x, y));
          }
        }
        requestAnimationFrame(draw);
      }

      function draw(timestamp) {
        time = timestamp;
        context.clearRect(0, 0, width, height);

        // Draw points
        places.forEach((place) => {
          const dot = new Path2D();
          dot.arc(place.x, place.y, 1, 0, 2 * Math.PI);
          context.fillStyle = "white";
          context.fill(dot);
        });

        // Process events
        events.forEach((event, index) => {
          const progress = (time - event.time) / event.duration;
          if (progress > 1) {
            events.splice(index, 1);
            return;
          }

          let radius = easeOutSine(progress) * 100;
          radius = Math.max(radius, 0); // Empêcher les valeurs négatives

          places.forEach((place) => {
            if (getDistance(event.point, place) < radius) {
              const d = easeOutCubic(
                (getDistance(event.point, place) + 0.25) / 1000
              );
              place.x = getPointAtAngle(
                place,
                getAngle(event.point, place),
                d
              ).x;
              place.y = getPointAtAngle(
                place,
                getAngle(event.point, place),
                d
              ).y;
            }
          });
        });

        // Process eventsc
        eventsc.forEach((event, index) => {
          const progress = (time - event.time) / event.duration;

          if (progress > 1) {
            eventsc.splice(index, 1);
            return;
          }

          let radius = easeOutSine(progress) * 1000;
          radius = Math.max(radius, 0); // Empêcher les valeurs négatives

          const circle = new Path2D();
          circle.arc(event.point.x, event.point.y, radius, 0, 2 * Math.PI, true);
          context.strokeStyle = "rgba(125,200,255," + easeOutCubic(progress) + ")";
          context.stroke(circle);

          places.forEach((place) => {
            if (getDistance(event.point, place) < radius) {
              const d = easeOutCubic(
                (getDistance(event.point, place) + 0.25) / 1000
              );
              place.x = getPointAtAngle(
                place,
                getAngle(event.point, place),
                d
              ).x;
              place.y = getPointAtAngle(
                place,
                getAngle(event.point, place),
                d
              ).y;
            }
          });
        });

        // Process eventscc
        eventscc.forEach((event, index) => {
          const progress = (time - event.time) / event.duration;

          if (progress > 1) {
            eventscc.splice(index, 1);
            return;
          }

          let radius = easeOutCubic(progress) * 500;
          radius = Math.max(radius, 0); // Empêcher les valeurs négatives

          context.beginPath();
          context.arc(event.point.x, event.point.y, radius, 0, 2 * Math.PI);
          context.strokeStyle = `rgba(255,50,50,${1 - progress})`;
          context.stroke();

          places.forEach((place) => {
            if (getDistance(event.point, place) < radius) {
              const d = easeOutCubic(
                (getDistance(event.point, place) + 0.25) / 1000
              );
              place.x = getPointAtAngle(
                place,
                getAngle(event.point, place),
                d
              ).x;
              place.y = getPointAtAngle(
                place,
                getAngle(event.point, place),
                d
              ).y;
            }
          });
        });

        // Restore points to original positions
        saveplaces.forEach((original, index) => {
          let current = places[index];
          if (getDistance(original, current) !== 0) {
            const d = easeOutCubic(-getDistance(original, current) / 100);
            current.x = getPointAtAngle(current, getAngle(original, current), d).x;
            current.y = getPointAtAngle(current, getAngle(original, current), d).y;
          }
        });

        requestAnimationFrame(draw);
      }

      function onMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        events.push({
          point: { x: mouseX, y: mouseY },
          time,
          duration: 2000,
        });
      }

      function simulateRandomKeyPress() {
        const ccX = Math.random() * width;
        const ccY = Math.random() * height;

        eventscc.push({
          point: { x: ccX, y: ccY },
          time: performance.now(),
          duration: 2000,
        });

        setTimeout(simulateRandomKeyPress, 2000);
      }

      function onKeyDown(ev) {
        if (ev.defaultPrevented) return;

        switch (ev.code) {
          case "Numpad2":
            eventsc.push({ point: { x: width / 2, y: height }, time, duration: 2000 });
            playSound(98.1);
            break;
          case "Numpad8":
            eventsc.push({ point: { x: width / 2, y: 0 }, time, duration: 2000 });
            playSound(490.5);
            break;
          case "Numpad4":
            eventsc.push({ point: { x: 0, y: height / 2 }, time, duration: 2000 });
            playSound(228.9);
            break;
          case "Numpad6":
            eventsc.push({ point: { x: width, y: height / 2 }, time, duration: 2000 });
            playSound(359.7);
            break;
          case "Numpad5":
            eventsc.push({ point: { x: width / 2, y: height / 2 }, time, duration: 2000 });
            playSound(294.3);
            break;
          case "Numpad7":
            eventsc.push({ point: { x: 0, y: 0 }, time, duration: 2000 });
            playSound(425.1);
            break;
          case "Numpad9":
            eventsc.push({ point: { x: width, y: 0 }, time, duration: 2000 });
            playSound(523.2);
            break;
          case "Numpad3":
            eventsc.push({ point: { x: width, y: height }, time, duration: 2000 });
            playSound(163.5);
            break;
          case "Numpad1":
            eventsc.push({ point: { x: 0, y: height }, time, duration: 2000 });
            playSound(32.7);
            break;
          case "Numpad0":
            eventsc.push({ point: { x: width / 2, y: height / 2 }, time, duration: 2000 });
            playSound(440.0);
            break;
        }
      }

      // Démarre la première simulation
      simulateRandomKeyPress();

      // Attach event listeners
      canvas.addEventListener("mousemove", onMouseMove);
      document.addEventListener("keydown", onKeyDown);

      // Start animation
      start();