function setClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate rotation angles
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360/12 = 30deg per hour
  const minuteDeg = minutes * 6 + seconds * 0.1; // 360/60 = 6deg per minute
  const secondDeg = seconds * 6; // 360/60 = 6deg per second

  // Apply rotations
  document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
}

// Update immediately
setClock();

// Update every second
setInterval(setClock, 1000);
