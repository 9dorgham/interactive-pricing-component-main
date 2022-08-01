let view = document.querySelector('.view'),
  period = document.querySelector('.period'),
  price = document.querySelector('.price'),
  range = document.querySelector('.range'),
  switcher = document.querySelector('.switcher'),
  toggle = document.querySelector('.switcher input');



switcher.onclick =  () => {
  if (toggle.checked == true) {
    period.innerHTML = 'year';
    let amount = getNum(price.textContent);
    price.textContent = `$ ${((amount - (amount * 0.25)) * 12)}`;
  }else {
    update();
    period.innerHTML = 'month';
  }
}


range.addEventListener('input', update);

// update price
function update() {
  if (toggle.checked == true) {
    switch (range.value) {
      case '1':
        price.textContent = `$ ${((4 - (4 * 0.25)) * 12)}`;
        view.textContent = 30 + 'k';
        break;

      case '2':
        price.textContent = `$ ${((8 - (8 * 0.25)) * 12)}`;
        view.textContent = 60 + 'k';
        break;

      case '3':
        price.textContent = `$ ${((16 - (16 * 0.25)) * 12)}`;
        view.textContent = 100 + 'k';
        break;

      case '4':
        price.textContent = `$ ${((32 - (32 * 0.25)) * 12)}`;
        view.textContent = 150 + 'k';
        break;

      case '5':
        price.textContent = `$ ${((64 - (64 * 0.25)) * 12)}`;
        view.textContent = 200 + 'k';
        break;
    }
  }else {
    switch (range.value) {
      case '1':
        price.textContent = '$' + 4;
        view.textContent = 30 + 'k';
      break;
      
      case '2':
        price.textContent = '$' + 8;
        view.textContent = 60 + 'k';
      break;
      
      case '3':
        price.textContent = '$' + 16;
        view.textContent = 100 + 'k';
      break;

      case '4':
        price.textContent = '$' + 32;
        view.textContent = 150 + 'k';
      break;

      case '5':
        price.textContent = '$' + 64;
        view.textContent = 200 + 'k';
      break;
    }
  }
}




function getNum(str) {
  return +[...str.split('.')[0]].filter(x => isNaN(x) === false).join('');
}