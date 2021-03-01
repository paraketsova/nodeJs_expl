document.addEventListener('DOMContentLoaded', e => {
  let table = document.getElementById('tasklist')

  if (typeof table !== 'underfined') {
    table.addEventListener('click', e => {
      //console.log(e.target.innerHTML) //проверили, что клик на таск работает
      let id = e.target.getAttribute('data-id');
      let input = document.createElement('input'); //build input after click
      input.value = e.target.textContent.trim()
      //e.target.appendChild(input)//add input in table

      input.addEventListener('blur', e => {
        //let new_value = input.value;
        let url = `/edit/${id}` // ВНИМАНИЕ НА ОБРАТНЫЕ КАВЫЧКИ В УРЛ!
        let data = `todo_item=${input.value}`;

        fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: data
        })
        .then(response => {
          window.location = '/';
        })

      })

      e.target.innerHTML =''
      e.target.appendChild(input)
      input.focus()
    })
  }
})