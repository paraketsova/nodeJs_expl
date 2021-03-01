"use strict";

document.addEventListener('DOMContentLoaded', function (e) {
  var table = document.getElementById('tasklist');

  if (typeof table !== 'underfined') {
    table.addEventListener('click', function (e) {
      //console.log(e.target.innerHTML) //проверили, что клик на таск работает
      var id = e.target.getAttribute('data-id');
      var input = document.createElement('input'); //build input after click

      input.value = e.target.textContent.trim(); //e.target.appendChild(input)//add input in table

      input.addEventListener('blur', function (e) {
        //let new_value = input.value;
        var url = "/edit/".concat(id); // ВНИМАНИЕ НА ОБРАТНЫЕ КАВЫЧКИ В УРЛ!

        var data = "todo_item=".concat(input.value);
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: data
        }).then(function (response) {
          window.location = '/';
        });
      });
      e.target.innerHTML = '';
      e.target.appendChild(input);
      input.focus();
    });
  }
});