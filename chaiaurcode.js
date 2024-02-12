// genrate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // Start changing color
  let intervalId;
  const startChangingColor = function () {
    intervalId = setInterval(changBGcolor, 1000);
  
    function changBGcolor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  //stop changing color
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; //clearing interval id because of rapid over right
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  