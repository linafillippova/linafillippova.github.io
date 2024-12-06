import { order } from "/print-dishes.js";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const orderSummary = document.getElementById("order-summary");

  const combos = [
    ["soup", "main_course", "salad", "drink"],
    ["soup", "main_course", "drink"],
    ["soup", "salad", "drink"],
    ["main_course", "salad", "drink"],
    ["main_course", "drink"],
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedCategories = Object.keys(order).filter((key) => order[key]);

    const categoriesWithoutDessert = selectedCategories.filter(
      (category) => category !== "dessert"
    );

    const isValidCombo = combos.some((combo) => {
      return (
        categoriesWithoutDessert.length === combo.length &&
        combo.every((item) => categoriesWithoutDessert.includes(item))
      );
    });

    if (selectedCategories.length === 0) {
      displayNotification("Ничего не выбрано. Выберите блюда для заказа");
    } else if (!selectedCategories.includes("drink")) {
      displayNotification("Выберите напиток");
    } else if (
      selectedCategories.includes("soup") &&
      !selectedCategories.includes("main_course") &&
      !selectedCategories.includes("salad")
    ) {
      displayNotification("Выберите главное блюдо/салат/стартер");
    } else if (
      (selectedCategories.includes("salad") ||
        selectedCategories.includes("dessert")) &&
      !selectedCategories.includes("soup") &&
      !selectedCategories.includes("main_course")
    ) {
      displayNotification("Выберите суп или главное блюдо");
    } else if (
      selectedCategories.includes("drink") &&
      !selectedCategories.includes("main_course")
    ) {
      displayNotification("Выберите главное блюдо");
    } else if (!isValidCombo) {
      displayNotification("Выберите комбо");
    } else {
      form.submit();
    }
  });

  function displayNotification(message) {
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement("div");
    notification.className = "notification";
    
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    notification.appendChild(messageElement);

    const button = document.createElement("button");
    button.textContent = "Окей";
    
    button.addEventListener("mouseover", () => {
      
    });
    button.addEventListener("mouseout", () => {
      
    });

    button.addEventListener("click", () => {
      notification.remove();
    });

    notification.appendChild(button);

    document.body.appendChild(notification);
  }
});
