document.addEventListener('DOMContentLoaded', function () {
    task1();
    task2();
    task3();
    task4();

    function task1() {
        const lengthElement = document.querySelector('#length');
        const widthElement = document.querySelector('#width');

        lengthElement.addEventListener('input', updateValue);
        widthElement.addEventListener('input', updateValue);

        function updateValue() {
            const length = parseFloat(lengthElement.value);
            const width = parseFloat(widthElement.value);
            const perimeterElement = document.querySelector('#perimeter');
            const areaElement = document.querySelector('#area');
            const diagonalElement = document.querySelector('#diagonal');
            if (length <= 0 || width <= 0) {
                perimeterElement.textContent = 'Введіть коректні дані';
                areaElement.textContent = '';
                diagonalElement.textContent = ' ';
                return;
            }
            const perimeter = (length + width) * 2;
            const area = length * width;
            const diagonal = Math.sqrt(length ** 2 + width ** 2);

            perimeterElement.textContent = perimeter || '';
            areaElement.textContent = area || '';
            diagonalElement.textContent = diagonal || '';
        }
    }

    function task2() {
        const form1 = document.querySelector('#form1');
        const form2 = document.querySelector('#form2');

        form1.addEventListener('submit', function (event) {
            event.preventDefault();
            const messageElement = document.querySelector('#message1');
            const messagesAreaElement = document.querySelector('.messagesArea')
            const message = messageElement.value;
            if (!message) {
                return;
            }
            const divFormGroup = document.createElement('div');
            divFormGroup.classList.add('message');
            divFormGroup.classList.add('messageUser1');
            const pNameUser = document.createElement('p');
            pNameUser.classList.add('nameUser1');
            pNameUser.textContent = 'USER1';
            divFormGroup.appendChild(pNameUser);
            const pText = document.createElement('p');
            pText.classList.add('text');
            pText.textContent = message;
            divFormGroup.appendChild(pText);
            messagesAreaElement.appendChild(divFormGroup);
            form1.reset();
        })

        form2.addEventListener('submit', function (event) {
            event.preventDefault();
            const messageElement = document.querySelector('#message2');
            const messagesAreaElement = document.querySelector('.messagesArea')
            const message = messageElement.value;
            if (!message) {
                return;
            }
            const divFormGroup = document.createElement('div');
            divFormGroup.classList.add('message');
            divFormGroup.classList.add('messageUser2');
            const pNameUser = document.createElement('p');
            pNameUser.classList.add('nameUser2');
            pNameUser.textContent = 'USER2';
            divFormGroup.appendChild(pNameUser);
            const pText = document.createElement('p');
            pText.classList.add('text');
            pText.textContent = message;
            divFormGroup.appendChild(pText);
            messagesAreaElement.appendChild(divFormGroup);
            form2.reset();
        })
    }

    function task3() {
        const ukrainianInputElement = document.querySelector('#UkrainianInput');
        const transliterationOutputElement = document.querySelector('#transliterationOutput');

        ukrainianInputElement.addEventListener('input', function () {
            const ukrainianInput = ukrainianInputElement.value;
            transliterationOutputElement.textContent = translate(ukrainianInput);

            function translate(text) {
                const transliterationMap = {
                    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh',
                    'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
                    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
                    'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': "'", 'ю': 'iu', 'я': 'ia',
                    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'IE', 'Ж': 'ZH',
                    'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'I', 'Й': 'I', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
                    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS',
                    'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ь': "'", 'Ю': 'IU', 'Я': 'IA'
                };
                return text.replace(/[а-яА-ЯґҐєЄіІїЇь]/g, function (char) {
                    return transliterationMap[char] || char;
                });
            }
        });
    }

    function task4() {
        const form = document.querySelector('#form4');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const dateElement = document.querySelector('#date');
            const resultElement = document.querySelector('#result');
            const dateValue = dateElement.value;
            const date = new Date(dateValue);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const a = Math.floor((14 - month) / 12);
            const y = year - a;
            const m = month + 12 * a - 2;
            const dayOfTheWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
            const days = {
                0: "Sunday",
                1: "Monday",
                2: "Tuesday",
                3: "Wednesday",
                4: "Thursday",
                5: "Friday",
                6: "Saturday",
            }
            resultElement.textContent = days[dayOfTheWeek];
        });
    }
});