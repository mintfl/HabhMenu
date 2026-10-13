(() => {
  "use strict";
  const tabs = document.getElementById("menuTabs");
  const panel = document.getElementById("menu-panel");
  const items = document.getElementById("menu-items");
  const formatter = new Intl.NumberFormat("en-SA", {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  });
  function element(tag, className, text, lang) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    if (lang) { node.lang = lang; node.dir = lang === "ar" ? "rtl" : "ltr"; }
    return node;
  }
  function bilingual(node, en, ar) {
    node.append(element("span", "", en, "en"), document.createTextNode(" | "), element("span", "arabic-text", ar, "ar"));
  }
  const buttons = HABH_MENU.categories.map(category => {
    const entry = element("li", "nav-item");
    entry.setAttribute("role", "presentation");
    const button = element("button", "nav-link me-0");
    button.type = "button";
    button.id = category.id + "-tab";
    button.dataset.category = category.id;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "menu-panel");
    button.setAttribute("aria-selected", "false");
    button.tabIndex = -1;
    bilingual(button, category.en, category.ar);
    entry.append(button);
    tabs.append(entry);
    return button;
  });
  function showCategory(id) {
    const category = HABH_MENU.categories.find(category => category.id === id);
    if (!category) return;
    buttons.forEach(button => {
      const active = button.dataset.category === id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", id + "-tab");
    const fragment = document.createDocumentFragment();
    category.items.forEach(item => {
      const column = element("div", "col-md-6 mb-4");
      const card = element("article", "menu-card d-flex p-3 rounded position-relative");
      if (item.image && item.image.trim()) {
        const photo = element("img", "menu-photo img-fluid rounded me-3");
        photo.alt = item.en + " | " + item.ar;
        photo.width = 80;
        photo.height = 80;
        photo.loading = "lazy";
        // Hide a missing photo without showing a broken-image icon.
        photo.addEventListener("error", () => photo.remove());
        photo.src = item.image;
        card.append(photo);
      }
      const copy = element("div", "item-copy flex-grow-1 d-flex flex-column justify-content-between");
      const name = element("h2", "item-name fw-bold mb-2");
      bilingual(name, item.en, item.ar);
      copy.append(name);
      if (item.descriptionAr || item.descriptionEn) {
        const description = element("p", "item-description");
        if (item.descriptionEn) description.append(element("span", "d-block", item.descriptionEn, "en"));
        if (item.descriptionAr) description.append(element("span", "d-block arabic-text", item.descriptionAr, "ar"));
        copy.append(description);
      }
      if (typeof item.price === "number" && Number.isFinite(item.price) && item.price >= 0) {
        const price = element("small", "price-label fw-bold");
        const currency = element("img", "riyal-icon");
        currency.src = "assets/riyal.png";
        currency.alt = "ريال سعودي";
        currency.width = 16;
        currency.height = 16;
        price.append(currency, element("span", "", formatter.format(item.price), "en"));
        copy.append(price);
      }
      card.append(copy);
      column.append(card);
      fragment.append(column);
    });
    items.replaceChildren(fragment);
  }
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => showCategory(button.dataset.category));
    button.addEventListener("keydown", event => {
      let target;
      if (event.key === "ArrowRight") target = (index + 1) % buttons.length;
      if (event.key === "ArrowLeft") target = (index - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = buttons.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      showCategory(buttons[target].dataset.category);
      buttons[target].focus();
      buttons[target].scrollIntoView({ block: "nearest", inline: "nearest" });
    });
  });
  if (buttons.length) showCategory(buttons[0].dataset.category);
})();
