let data = {
    id:432,
    val:24.123456
};

inpt = document.querySelector('input');
data2 = document.querySelector('.data');
console.log(inpt);

// записываем значение из объекта
inpt.value = data.val.toFixed(2);

inpt.onfocus = function(evt) {
    evt.target.value = data.val;
    inpt.classList.add('wid');
};

inpt.onblur = function(e) {
    inpt.classList.remove('wid');
    // тут применяем математику
    avg = e.target.value * 10;
    e.target.value = Number(e.target.value).toFixed(2);
    data2.innerHTML = `Итоговый результат ${avg}`;
};

inpt.onchange = function(e) {
    inpt.classList.add('wid');
    data.val = e.target.value;
};


let one;