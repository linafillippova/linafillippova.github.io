import { meals, loadDishes } from "./dishes.js";

let order = {
  soup: null,
  main_course: null,
  drink: null,
  salad: null,
  dessert: null,
};

let totalPrice = 0;

// Функция для добавления блюд в заказ
function addToOrder(meal) {
  order[meal.category] = meal;

  // Сохранение идентификаторов в localStorage
  const selectedIds = Object.values(order)
    .filter(m => m) // Убедимся, что блюдо выбрано
    .map(m => m.id); // Получаем идентификаторы блюд

  localStorage.setItem('selectedMeals', JSON.stringify(selectedIds));

  updateOrderDisplay();
}

// Функция для отображения и подсчета стоимости выбранных блюд
function updateOrderDisplay() {
  const selectedIds = JSON.parse(localStorage.getItem('selectedMeals')) || [];

  const orderSummary = document.getElementById("order-summary");
  orderSummary.innerHTML = "";

  let totalCost = 0;
  let isOrderEmpty = true;

  for (const [category, meal] of Object.entries(order)) {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = getCategoryTitle(category);
    orderSummary.appendChild(categoryTitle);

    if (meal) {
      const mealInfo = document.createElement("p");
      mealInfo.textContent = `${meal.name} - ${meal.price}₽`;
      orderSummary.appendChild(mealInfo);
      totalCost += meal.price;
      isOrderEmpty = false;
    } else {
      const mealInfo = document.createElement("p");
      mealInfo.textContent =
        category === "soup"
          ? "Суп не выбран"
          : category === "main_course"
          ? "Главное блюдо не выбрано"
          : category === "drink"
          ? "Напиток не выбран"
          : category === "salad"
          ? "Салаты и стартеры не выбраны"
          : category === "dessert"
          ? "Десерт не выбран"
          : "-------";

      orderSummary.appendChild(mealInfo);
    }
  }

  if (isOrderEmpty) {
    orderSummary.innerHTML = "<p>Ничего не выбрано</p>";
  } else {
    const totalElement = document.createElement("h3");
    totalElement.textContent = "Стоимость заказа:";
    orderSummary.appendChild(totalElement);

    const totalCostElement = document.createElement("p");
    totalCostElement.textContent = `${totalCost}₽`;
    orderSummary.appendChild(totalCostElement);
  }

  const orderPanel = document.getElementById("order-panel");
  const orderTotal = document.getElementById("order-total");
  const checkoutLink = document.getElementById("checkout-link");

  // Подсчёт суммы стоимости
  totalPrice = Object.values(order).reduce((total, meal) => {
      return total + (meal.price * meal.count);
  }, 0);

  orderTotal.textContent = `Итого: ${totalPrice}₽`;

  // Проверка на соответствие комбо
  const selectedCategories = Object.keys(order);
  const combos = [
      ["soup", "main_course", "salad", "drink"],
      ["soup", "main_course", "drink"],
      ["soup", "salad", "drink"],
      ["main_course", "salad", "drink"],
      ["main_course", "drink"]
  ];

  const isComboValid = combos.some(combo =>
      combo.every(category => selectedCategories.includes(category))
  );

  checkoutLink.style.display = isComboValid ? "block" : "none";
  orderPanel.style.display = totalPrice > 0 ? "flex" : "none";
}

function getCategoryTitle(category) {
  switch (category) {
    case "soup":
      return "Суп";
    case "main_course":
      return "Главное блюдо";
    case "drink":
      return "Напиток";
    case "salad":
      return "Салаты и стартеры";
    case "dessert":
      return "Десерт";
    default:
      return "";
  }
}

// Загрузка блюд на страницу меню
document.addEventListener("DOMContentLoaded", async function () {
  await loadDishes();

  const categories = {
    soup: document.getElementById("soup-grid"),
    main_course: document.getElementById("main_course-grid"),
    salad: document.getElementById("salad-grid"),
    drink: document.getElementById("drink-grid"),
    dessert: document.getElementById("dessert-grid"),
  };

  function displayMeals(category, filter = null) {
    categories[category].innerHTML = "";

    const filteredMeals = filter
      ? meals.filter(
          (meal) => meal.category === category && meal.kind === filter
        )
      : meals.filter((meal) => meal.category === category);

    filteredMeals.sort((a, b) => a.name.localeCompare(b.name));

    filteredMeals.forEach((meal) => {
      const mealElement = document.createElement("div");
      mealElement.classList.add("meal-item");
      mealElement.innerHTML = `
                  <img src="${meal.image}" alt="${meal.name}">
                  <p class="meal-name">${meal.name}</p>
                  <p class="meal-price"> ${meal.price}₽</p>
                  <p class="meal-count"> ${meal.count}</p>
                  <button>Добавить</button>
              `;
      mealElement
        .querySelector("button")
        .addEventListener("click", () => addToOrder(meal));
      categories[category].appendChild(mealElement);
    });
  }

  Object.keys(categories).forEach((category) => displayMeals(category));

  document.querySelectorAll(".filters button").forEach((button) => {
    button.addEventListener("click", function () {
      const categorySection = this.closest("section")
        .querySelector(".meals-grid")
        .id.split("-")[0];
      const kind = this.getAttribute("data-kind");

      this.classList.toggle("active");

      if (this.classList.contains("active")) {
        this.closest(".filters")
          .querySelectorAll("button")
          .forEach((btn) => {
            if (btn !== this) btn.classList.remove("active");
          });

        displayMeals(categorySection, kind);
      } else {
        displayMeals(categorySection);
      }
    });
  });
  
});

// Функция для отображения состава выбранных блюд
document.addEventListener("DOMContentLoaded", async function () {
    await loadDishes();

    // Загрузка идентификаторов из localStorage
    const selectedIds = JSON.parse(localStorage.getItem('selectedMeals')) || [];

    selectedIds.forEach(id => {
        const meal = meals.find(m => m.id === id);
        if (meal) {
            order[meal.category] = meal; // Добавляем блюдо в заказ
        }
    });

    updateOrderDisplay(); // Обновляем отображение
});

async function loadOrder() {
  await loadDishes();

  const orderList = document.getElementById("meals-grid");
  orderList.innerHTML = ""; // Очищаем предыдущий вывод

  const selectedMeals = JSON.parse(localStorage.getItem("selectedMeals")) || [];

  if (selectedMeals.length === 0) {
      orderList.innerHTML = `
          <p>Ничего не выбрано. Чтобы добавить блюда в заказ, перейдите на <a href="menu.html">Собрать ланч</a>.</p>
      `;
      updateOrderDisplay();
      return;
  }

  selectedMeals.forEach(mealId => {
      const meal = meals.find(m => m.id === mealId);
      if (meal) {
      order[meal.category] = meal;
      const mealElement = document.createElement("div");
      mealElement.classList.add("meal-item");
      mealElement.innerHTML = `
          <img src="${meal.image}" alt="${meal.name}">
          <p class="meal-name">${meal.name}</p>
          <p class="meal-price">${meal.price}₽</p>
          <p class="meal-count">${meal.count} </p>
          <button class="remove-button">Удалить</button>
      `;

         // Добавляем обработчик клика для кнопки "Удалить"
         mealElement.querySelector(".remove-button").addEventListener("click", () => {
          removeFromOrder(mealId);
      });

      orderList.appendChild(mealElement);
      }
  });
  updateOrderDisplay();
}

function removeFromOrder(mealId) {
  let selectedMeals = JSON.parse(localStorage.getItem("selectedMeals")) || [];
  selectedMeals = selectedMeals.filter(id => id !== mealId);
  localStorage.setItem("selectedMeals", JSON.stringify(selectedMeals));
  loadOrder(); // Обновляем отображение
}


document.addEventListener("DOMContentLoaded", loadOrder);

export { order };
