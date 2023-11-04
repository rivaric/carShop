import { templateCard } from "./templates/card.js";
import { templateModal } from "./templates/modal.js";

// Get data
const getData = async () => {
  const res = await fetch("http://37.46.129.49:8008/cars");
  const obj = res.json();
  return obj;
};

const getCarById = async (id) => {
  const res = await fetch(`http://37.46.129.49:8008/car/${id + 1}`);
  const obj = res.json();
  return obj;
};

const getFilterOptions = async () => {
  const res = await fetch(`http://37.46.129.49:8008/filter_options`);
  const obj = res.json();
  return obj;
};

const createCards = (data) => {
  let html = "";

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      html += templateCard(data[i]);
    }
  } else {
    for (let key in data) {
      const element = data[key];

      html += templateCard(element);
    }
  }

  return html;
};

getFilterOptions().then((data) => {
  const selectClass = document.querySelector(".class");
  const selectPassengers = document.querySelector(".passengers");
  let optionsTypeHTML = '<option value="all" data-filter="all">Класс</option>';
  let optionsPersonsHTML =
    '<option value="all" data-filter="all">Количество пассажиров</option>';

  data.types.forEach((type) => {
    optionsTypeHTML += `<option value="${type}" data-filter=".${type}">${type}</option>`;
  });

  data.persons.forEach((type) => {
    optionsPersonsHTML += `<option value="${type}" data-filter=".${type}">${type}</option>`;
  });

  selectClass.innerHTML = optionsTypeHTML;
  selectPassengers.innerHTML = optionsPersonsHTML;
});

const wrapperCars = document.querySelector(".car-section__box");
getData().then((data) => {
  var curData = data;
  const html = createCards(curData);

  wrapperCars.innerHTML = html;

  Modal();

  // Filters
  const serchInput = document.querySelector("#search__car");
  const selectClass = document.querySelector(".class");
  const selectPassengers = document.querySelector(".passengers");
  const selectSortPrice = document.querySelector(".sortprice");

  const filterCards = () => {
    const serchInput = document.querySelector("#search__car").value;
    const selectClass = document.querySelector(".class").value;
    const selectPassengers = document.querySelector(".passengers").value;

    const carCards = document.querySelectorAll(".car-section__card");

    carCards.forEach((car) => {
      const name = car.dataset.name;
      const type = car.dataset.type;
      const persons = car.dataset.persons;

      let shouldShow = true;

      if (
        selectClass &&
        type.toLowerCase() !== selectClass.toLowerCase() &&
        selectClass !== "all"
      ) {
        shouldShow = false;
      }

      if (
        selectPassengers &&
        persons !== selectPassengers &&
        selectPassengers !== "all"
      ) {
        shouldShow = false;
      }

      if (name && !name.toLowerCase().includes(serchInput.toLowerCase())) {
        shouldShow = false;
      }

      if (shouldShow) {
        car.style.display = "flex"; // или установите стиль, который вам нужен для отображения
      } else {
        car.style.display = "none";
      }
    });
  };

  function compareByPrice(a, b) {
    // Извлеките цены из элементов
    const priceA = a.dataset.price;
    const priceB = b.dataset.price;

    // Сравните цены
    return priceA - priceB;
  }

  const carCards = document.querySelectorAll(".car-section__card");
  const carCardArray = Array.from(carCards);
  const carStandardArray = Array.from(carCards);
  const sectionBox = document.querySelector(".car-section__box");

  carCardArray.sort(compareByPrice);
  const carSortedArray = Array.from(carCardArray);
  carCardArray.sort(compareByPrice).reverse();
  const carReversedArray = Array.from(carCardArray);

  function sort() {
    let carArray = [];
    sectionBox.innerHTML = "";

    if (selectSortPrice.value == "up") {
      carArray = carSortedArray;
    } else if (selectSortPrice.value == "down") {
      carArray = carReversedArray;
    } else {
      carArray = carStandardArray;
    }

    carArray.forEach((carCard) => {
      sectionBox.appendChild(carCard);
    });
  }

  serchInput.addEventListener("input", filterCards);

  selectClass.addEventListener("change", filterCards);

  selectPassengers.addEventListener("change", filterCards);

  selectSortPrice.addEventListener("change", sort);
});

// Burger menu
const menubtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Modal
const Modal = () => {
  const carCards = document.querySelectorAll(".car-section__card");
  const bgModal = document.querySelector(".modal-background");
  const modal = document.querySelector(".modal");

  bgModal.addEventListener("click", (e) => {
    if (e.target === bgModal) {
      document.body.classList.remove("no-scroll");
      bgModal.classList.remove("show_modal");
    }
  });

  carCards.forEach((card, id) => {
    card.addEventListener("click", () => {
      getCarById(id).then((data) => {
        const modalHTML = templateModal(data);

        if (modal.classList.contains("show_modal")) {
          bgModal.classList.remove("show_modal");
        } else {
          modal.innerHTML = modalHTML;

          bgModal.classList.add("show_modal");
          document.body.classList.add("no-scroll");
        }

        // Slider
        const images = document.querySelectorAll(".car__img");
        const arrowLeft = document.querySelector(".button-left");
        const arrowRigth = document.querySelector(".button-rigth");
        let initialActiveImg = 0;

        const show = (index) => {
          images[initialActiveImg]?.classList?.remove("active");
          images[index]?.classList?.add("active");
          initialActiveImg = index;
        };

        show(initialActiveImg);

        arrowLeft?.addEventListener("click", () => {
          const index =
            initialActiveImg - 1 < 0 ? images.length - 1 : initialActiveImg - 1;

          show(index);
        });

        arrowRigth?.addEventListener("click", () => {
          const index =
            initialActiveImg + 1 > images.length - 1 ? 0 : initialActiveImg + 1;

          show(index);
        });
      });
    });
  });
};

// Отправка формы
const form = document.querySelector(".contacts_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("[name=name]");
  const phone = form.querySelector("[name=phone]");
  const message = form.querySelector("[name=message]");

  const data = {
    name: name.value,
    phone: phone.value, 
    message: message.value,
  }

  fetch("http://37.46.129.49:8008/send_message", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(() => {
    const btn = document.querySelector(".btn_submit");
    btn.textContent = "Форма отправлена";

    setTimeout(() => {
      btn.textContent = "Отправить";
    }, 5000);

    name.value = "";
    phone.value = "";
    message.value = "";
  })
})
