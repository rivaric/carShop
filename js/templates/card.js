export const templateCard = (data) => {
  return `<div class="car-section__card" data-type="${data.type[0].toUpperCase() + data.type.substr(1).toLowerCase()}" data-persons=${data.persons} data-name="${data.title}" data-price="${data.price_per_day_usd}">
        <div class="car-section__image">
          <img src=${data.preview_img} alt="cardcar" />
        </div>
        <div class="car-section__cardinfo">
          <div class="car-section__leftinfo">
            <h2 data-value="name" class="car_name">${data.title}</h2>
            <p data-value="class" class="car_class">${data.type[0].toUpperCase() + data.type.substr(1).toLowerCase()}</p>
            <p data-value="horsepower">${data.max_speed} km/h</p>
            <p data-value="v">2.0 л</p>
            <p data-value="0-100">0-100: ${data["0_100"]}</p>
          </div>
          <div class="car-section__rightinfo">
            <div class="car-section__maxpassengers">
              <p class="car_max_passengers">${data.persons}</p>
              <img src="img/users.svg" alt="maxpassengers" />
            </div>
            <div class="car-section__carprice">
              <button>
                <span class="carprice__arend">Арендовать</span>
                <span class="carprice__price">$${data.price_per_day_usd} / день</span>
              </button>
            </div>
          </div>
        </div>
      </div>`;
};
