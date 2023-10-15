document.addEventListener('DOMContentLoaded', function () {
    submit();
    remove();
    copy();

    function submit () {
        const form = document.querySelector('#registerForm');
        form.addEventListener('submit', function (event) {
                const values = getValues();
                valuesIntoTable(values);

                function getValues() {
                    event.preventDefault();
                    const inputs = document.querySelectorAll('.form-control');
                    let values = [];
                    inputs.forEach((input) => {
                        values.push(input.value);
                    })
                    const maleRadio = document.querySelector('#maleRadio')
                    const femaleRadio = document.querySelector('#femaleRadio')
                    let gender = null;
                    if (maleRadio.checked) {
                        gender = maleRadio.value;
                    } else if (femaleRadio.checked) {
                        gender = femaleRadio.value;
                    }
                    values.splice(3, 0, gender);
                    form.reset();
                    return values;
                }

                function valuesIntoTable(values) {
                    const columns = ['Name', 'Surname', 'Patronymic', 'Gender', 'Date of Birth', 'Phone', 'Email', 'Password', 'Group', 'File']
                    const tbody = document.querySelector('#tbody');
                    const tr = document.createElement('tr');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    const td = document.createElement('td');
                    const span = document.createElement('span');
                    span.textContent = 'Control';
                    td.appendChild(checkbox);
                    td.appendChild(span);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    for (let i = 0; i < values.length; i++) {
                        const td = document.createElement('td');
                        const span = document.createElement('span');
                        span.textContent = columns[i];
                        td.textContent = values[i];
                        td.appendChild(span);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                    }
                }
            }
        );
    }

    function remove () {
        const deleteButton = document.querySelector('.bi-trash');
        deleteButton.addEventListener('click', function (event) {
            event.preventDefault();
            const boxes = document.querySelectorAll('input[type="checkbox"]');
            if (boxes) {
                let removed = false;
                boxes.forEach((checkbox) => {
                    if (checkbox.checked) {
                        const checkboxRow = checkbox.closest('tr');
                        checkboxRow.remove();
                        removed = true;
                    }
                });
                if (!removed) {
                    alert('С початку оберіть поля');
                }
            }
        })
    }

    function copy () {
        const copyButton = document.querySelector('.bi-copy');
        copyButton.addEventListener('click', function (event) {
            event.preventDefault();
            const boxes = document.querySelectorAll('input[type="checkbox"]');
            if (boxes) {
                let copied = false;
                boxes.forEach((checkbox) => {
                    if (checkbox.checked) {
                        const checkboxRow = checkbox.closest('tr');
                        checkbox.checked = false;
                        const copyBlock = checkboxRow.cloneNode(true);
                        checkboxRow.insertAdjacentElement('afterend', copyBlock);
                        copied = true;
                    }
                });
                if (!copied) {
                    alert('С початку оберіть поля');
                }
            }
        })
    }
});