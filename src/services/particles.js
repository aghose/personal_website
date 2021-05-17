export default () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const particleColor = 'black';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray;

  const mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 100) * (canvas.width / 100),
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  // Creates particles. This is how we will fill our particleArray with indv
  // particles with randomized values

  class Particle {
    constructor(x, y, directionX, directionY, radius, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.radius = radius;
      this.color = color;
    }

    // This will draw the indv particles

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = particleColor;
      ctx.fill();
    }

    // Check particle position, check mouse position, move the particle accordingly,
    // and then draw the particle

    update() {
      // Check for collision detection between mouse point and particle
      const combinedRadius = mouse.radius + this.radius;
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < combinedRadius) {
        // Collision detected!
        // Now we check for which direction the mouse is coming from and
        // dmove the particle to the opposite direction,
        // given that it would still be within the canvas
        if (mouse.x < this.x && this.x < canvas.width + this.radius * 10) {
          this.x += 10;
        }
        if (mouse.x > this.x && this.x > this.radius * 10) {
          this.x -= 10;
        }
        if (mouse.y < this.y && this.y < canvas.width + this.radius * 10) {
          this.y += 10;
        }
        if (mouse.y > this.y && this.y > this.radius * 10) {
          this.y -= 10;
        }

        this.directionX = -this.directionX;
        this.directionY = -this.directionY;
      }

      // Check if particle is within the canvas, if not, reverse the direction of its motion
      if (this.x >= window.innerWidth - this.radius * 5 || this.x <= this.radius * 5) {
        this.directionX = -this.directionX;
      }
      if (this.y >= window.innerHeight - this.radius * 5 || this.y <= this.radius * 5) {
        this.directionY = -this.directionY;
      }

      // This is the normal movement that should continously run and update
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }

  function randomizedSpeed() {
    const speed = Math.random() * 3 - 1.5;

    // if speed is too slow, re-roll randomn number generator
    if (speed > -1 && speed < 1) {
      randomizedSpeed();
    }

    return speed;
  }

  // This is to create and initialize the particlesArray
  function init() {
    // In case it isn't empty for some reason
    particlesArray = [];

    // This is to make the number of particles scale up or down with size of the screen
    const numberOfParticles = (canvas.width * canvas.height) / 9000;

    // Will create i number of particles with randomized values and fill up particlesArray
    for (let i = 0; i < numberOfParticles; i += 1) {
      const radius = Math.random() * 2 + 1;
      const x = Math.random() * (canvas.width - radius * 4) + radius * 4;
      const y = Math.random() * (canvas.height - radius * 4) + radius * 4;
      const directionX = randomizedSpeed();
      const directionY = randomizedSpeed();

      const color = particleColor;

      particlesArray.push(new Particle(x, y, directionX, directionY, radius, color));
    }
  }

  // Check if particles are close enough to connect
  function connect() {
    let opacity = 1;

    for (let i = 0; i < particlesArray.length; i += 1) {
      for (let j = i; j < particlesArray.length; j += 1) {
        const distance = (particlesArray[i].x - particlesArray[j].x) ** 2
          + (particlesArray[i].y - particlesArray[j].y) ** 2;

        if (distance < ((canvas.width / 9) * canvas.height) / 9) {
          opacity = 1 - distance / 10000;
          ctx.strokeStyle = `rgba(140, 85, 35,${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < particlesArray.length; i += 1) {
      particlesArray[i].update();
    }

    connect();
  }

  // re-size event. This is to stop it from looking weird whenever the window is resized
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    mouse.radius = (canvas.height / 100) * (canvas.width / 100);

    init();
  });

  // Mouse out. This is so the particles don't interact with the mouse even when
  // it is out of the screen
  window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
  });

  init();
  animate();
};
