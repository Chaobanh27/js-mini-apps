const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./assets/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded",() => {
    renderMenuItems(menu)
    displayMenuButton()
})

function renderMenuItems(menuItems) {
  if (menuItems.length > 0) {
    const displayMenu = menuItems.map((value, key) => {
      return `<article class="menu-item">
                <img src=${value.img} alt=${value.title} class="photo" />
                <div class="item-info">
                    <header>
                    <h4>${value.title}</h4>
                    <h4 class="price">$${value.price}</h4>
                    </header>
                    <p class="item-text">
                    ${value.desc}
                    </p>
                </div>
              </article>`
    });
    //console.log(displayMenu)
    sectionCenter.innerHTML = displayMenu.join("");
  }
}

const displayMenuButton = () => {
  const categories = menu.reduce( (value,key) => {
    if(!value.includes(key.category)){
      value.push(key.category)
    }
    return value
  },['all'])
  
  const categoriesBtn = categories.map((value,key) => {
    return (
      `<button type="button" class="filter-btn" data-id=${value}>
          ${value}
        </button>`
    )
  }).join("");

  btnContainer.innerHTML = categoriesBtn

  const filterBtns = btnContainer.querySelectorAll(".filter-btn")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click",(e) => {
      const category = e.currentTarget.dataset.id
      //console.log(category)
      const menuCategory = menu.filter(item => 
        item.category === category
      )
      //console.log(menuCategory)
      category === 'all' ? renderMenuItems(menu) : renderMenuItems(menuCategory)
    })
  })
}