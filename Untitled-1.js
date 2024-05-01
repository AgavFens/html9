document.addEventListener("DOMContentLoaded", function() {
    const catForm = document.getElementById("cat-form");
    const catList = document.getElementById("cat-list");

    catForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addCat();
    });

    function addCat() {
        const chvetInput = document.getElementById("chvet");
        const porodaInput = document.getElementById("poroda");
        const yearInput = document.getElementById("year");
        const imageInput = document.getElementById("image");

        const chvet = chvetInput.value;
        const poroda = porodaInput.value;
        const year = yearInput.value;
        const image = imageInput.files[0];

        if (chvet === "" || poroda === "" || year === "" || isNaN(year) || !image) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        }

        const catItem = document.createElement("div");
        catItem.classList.add("cat-item");
        catItem.innerHTML = `
            <strong>Цвет:</strong> ${chvet} <br>
            <strong>Порода:</strong> ${poroda} <br>
            <strong>Год выпуска:</strong> ${year} <br>
            <img src="${URL.createObjectURL(image)}" alt="Изображение автомобиля"> <br>
            <button class="delete-btn">Удалить</button>
        `;

        catItem.querySelector(".delete-btn").addEventListener("click", function() {
            catList.removeChild(catItem);
        });

        catList.appendChild(catItem);
    }
});