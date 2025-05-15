const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // If the scroll is past the section top minus a little offset (e.g. 150px)
    if (pageYOffset >= sectionTop - 150) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('active');
    }
  });
});

const projects = [
    {
      title: "Robo Car",
      description: "The Robo Car is a Wi-Fi–controlled vehicle built using an <strong>Arduino Uno</strong> and an <strong>ESP32-CAM</strong>.<br><br>The <strong>Arduino Uno</strong> handles motor control using an L298N motor driver, enabling smooth movement in all directions.<br>The <strong>ESP32-CAM</strong> provides real-time video streaming and hosts a web interface that allows users to control the car remotely over Wi-Fi.<br><br>This project eliminates the need for Bluetooth or mobile apps — any browser on a Wi-Fi–connected device can control the car.<br><br><strong>Key Features:</strong><br>- Wi-Fi–based control via web interface<br>- Real-time video feed from ESP32-CAM<br>- Motor control with Arduino Uno and L298N<br><br><strong>Skills Demonstrated:</strong><br>- Embedded systems (Arduino & ESP32)<br>- Web-based IoT control<br>- Real-time video streaming<br>- Circuit design and motor driver integration<br>"
    },
    {
      title: "Sensor System",
    description: "Designed and built a smart alarm system capable of detecting temperature fluctuations and changes in distance.<br><br>This project involved hands-on experience with soldering, circuit design, Arduino programming, and C language.<br><br>It provided practical insight into sensor integration and embedded system development.<br><br><strong>Key Features:</strong><br>- Temperature and distance detection<br>- Real-time alarm triggering based on sensor data<br><br><strong>Skills Demonstrated:</strong><br>- Circuit design and soldering<br>- Arduino and embedded C programming<br>- Sensor integration and data processing<br>"
    },
    {
      title: "Tic Tac Toe",
  description: "Tic Tac Toe is a classic 3×3 grid game implemented in JavaScript with both two-player and single-player modes.<br><br>In single-player mode, the computer opponent makes moves randomly, providing a simple challenge.<br><br>The game includes logic to detect wins, draws, and to switch turns automatically.<br><br><strong>Key Features:</strong><br>- Two-player and single-player with random-move AI<br>- Win and draw detection<br>- Turn-based gameplay logic<br><br><strong>Skills Demonstrated:</strong><br>- JavaScript programming and game logic<br>- Handling game state and player input<br>"
    }
  ];

  function openOverlay(index) {
    const overlay = document.getElementById('overlay');
    document.getElementById('overlay-title').innerHTML = projects[index].title;
    document.getElementById('overlay-description').innerHTML = projects[index].description;
    overlay.style.display = 'flex';
  }

  function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }