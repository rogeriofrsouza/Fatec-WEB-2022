let lightRed = document.getElementById('circleRed');
let lightYellow = document.getElementById('circleYellow');
let lightGreen = document.getElementById('circleGreen');

function changeTrafficLight() {
  if (lightRed.className === 'circle light-red') {
    lightRed.className = 'circle light-off';
    lightYellow.className = 'circle light-yellow';

  } else if (lightYellow.className === 'circle light-yellow') {
    lightYellow.className = 'circle light-off';
    lightGreen.className = 'circle light-green';

  } else {
    lightGreen.className = 'circle light-off';
    lightRed.className = 'circle light-red';
  }
}
