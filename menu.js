// EDIT YOUR MENU HERE. No build step or installation needed.
// Add an item: copy one { ... } line into the category you want.
// Delete an item: remove its entire { ... } line.
// Edit an item: change ar, en, price, or image. Keep the commas between lines.
// price: 15 means 15 SAR. price: null leaves the price blank.
// Optional descriptions: descriptionAr: "...", descriptionEn: "..."
// Photos: put your photo in img/, then set image: "img/latte.jpg".
// Leave image: "" for an item without a photo.
const HABH_MENU = {
  categories: [
    {
      id: "hot", ar: "قهوة مقطرة", en: "Drip Coffee",
      items: [
        { ar: "اثيوبي هامبيلا", en: "Ethiopian Hambila", price: 14, image: "assets/trycup.jpg" },
        { ar: "برازيلي موجيانا", en: "Brazilian Mogiana", price: 14, image: "assets/trycup.jpg" },
        { ar: "كولومبي سان غابريل", en: "Colombian San Gabriel", price: 14, image: "assets/trycup.jpg" },
        { ar: "كولومبي كولبري", en: "Colombian Colibri", price: 14, image: "assets/trycup.jpg" },
      ]
    },
    {
      id: "speciality-v60", ar: "قهوة فاخر", en: "Premium Coffee",
      items: [
        { ar: "يمني حراز عتارة", en: "Yemini Attarh", price: 18, image: "assets/trycup.jpg" },
        { ar: "يمني حراز هوزان", en: "Yemini Hawzan", price: 18, image: "assets/trycup.jpg" },
        { ar: "يمني جبال الحيمة", en: "Yemini jibal alhema", price: 20, image: "assets/trycup.jpg" },
        { ar: "مُعزز مانجو", en: "Infused Mango", price: 18, image: "assets/trycup.jpg" },
        { ar: "مُعزز فراولة", en: "Infused Strawberry", price: 18, image: "assets/trycup.jpg" },
        { ar: "مُعزز بطيخ", en: "Infused Watermelon", price: 18, image: "assets/trycup.jpg" },
        { ar: "مُعزز خوخ", en: "Infused Peach", price: 18, image: "assets/trycup.jpg" },
        { ar: "مُعزز زهور", en: "Infused Flowers", price: 18, image: "assets/trycup.jpg" },
      ]
    },
    {
      id: "cold", ar: "قهوة باردة", en: "Cold coffee",
      // Prices include 15% VAT, rounded to two decimals.
      items: [
        { ar: "قهوة اليوم", en: "Coffee of the Day", price: 8, image: "assets/trycup.jpg" },
        { ar: "سبانش لاتيه بارد", en: "Iced Spanish Latte", price: 16, image: "assets/trycup.jpg" },
        { ar: "لاتيه بارد", en: "Iced Latte", price: 14, image: "assets/trycup.jpg" },
        { ar: "كولد برو", en: "Cold Brew", price: 15, image: "assets/trycup.jpg" },
        { ar: "مياه نوفا", en: "Nova Water", price: 1, image: "assets/trycup.jpg" },
      ]
    },
    {
      id: "hot-coffee", ar: "قهوة ساخنة", en: "Hot Coffee",
      // New hot drink prices below include 15% VAT, rounded to two decimals.
      // Espresso is already VAT-inclusive at 8 SAR; speciality price is pending.
      items: [
        { ar: "قهوة اليوم", en: "Coffee of the Day", price: 7, image: "assets/trycup.jpg" },
        { ar: "إسبريسو", en: "Espresso", price: 8, image: "assets/trycup.jpg" },
        { ar: "بيكولو", en: "Piccolo", price: 10, image: "assets/trycup.jpg" },
        { ar: "أمريكانو", en: "Americano", price: 9, image: "assets/trycup.jpg" },
        { ar: "كابتشينو", en: "Cappuccino", price: 14, image: "assets/trycup.jpg" },
        { ar: "لاتيه", en: "Latte", price: 14, image: "assets/trycup.jpg" },
        { ar: "سبانش لاتيه", en: "Spanish Latte", price: 15, image: "assets/trycup.jpg" },
        { ar: "فلات وايت", en: "Flat White", price: 12, image: "assets/trycup.jpg" },
        { ar: "كورتادو", en: "Cortado", price: 11, image: "assets/trycup.jpg" },
        { ar: "إسبريسو فاخر", en: "Speciality Espresso", price: 13, image: "assets/trycup.jpg" },
      ]
    },
    {
      id: "v60", ar: "الحلى", en: "Sweets",
      items: [
        { ar: "كوكيز", en: "Cookies", price: 10, image: "assets/trycup.jpg" },
        { ar: "ليونارو كوكيز", en: "Leonaro Cookies", price: 20, image: "assets/trycup.jpg" },
      ]
    },
  ]
};
