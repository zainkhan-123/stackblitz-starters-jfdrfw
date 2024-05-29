const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // select the overall body throught querry selector

buttons.forEach(function (button) {
  console.log('button');
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    } else {
      // body.style.backgroundColor = 'blue';
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
