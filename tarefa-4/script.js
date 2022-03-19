function switchOnLamps() {
  let lamps = document.querySelectorAll('.lamp');

  for (let lamp of lamps) {
    if (lamp.className == 'lamp show') {
      lamp.className = 'lamp hide';
    } else {
      lamp.className = 'lamp show';
    }
  }

  let container = document.querySelector('.container');

  if (container.className == 'container dark') {
    container.className = 'container light';
  } else {
    container.className = 'container dark';
  }

  let header = document.querySelector('.header');

  if (header.className == 'header') {
    header.className = 'header light';
  } else {
    header.className = 'header'
  }

}
