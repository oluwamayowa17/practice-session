// const username = localStorage.getItem('username')
// const email = localStorage.getItem('email')
// // const student = JSON.parse(localStorage.getItem('student'))

// console.log(username);
// // console.log(student);

// document.getElementsByTagName('h1')[0].textContent = `Welcome, ${username}`

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function(){
//     localStorage.removeItem('email')
//     document.getElementsByTagName('h1')[0].textContent = 'Student deleted successfully'
// })

// const namesOfStudent = ['Olaide', 'Basit', 'Mayowa', 'Favour', 'Janet']

// function displayStudent(students){
//     students.forEach(function(student){
//         const nameElement = document.createElement('p')
//         nameElement.textContent = student
//         nameElement.classList.add('bg-warning')
//         nameElement.classList.add('mt-2')
//         document.body.appendChild(nameElement)
//     })
// }

// console.log(`${name} ${surname} ${age + 1}`);

let products = [
  {
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
    description:
      "A sleek and ergonomic wireless mouse with adjustable DPI settings.",
  },
  {
    name: "Bluetooth Headphones",
    price: 59.99,
    category: "Electronics",
    description:
      "Noise-canceling over-ear headphones with up to 20 hours of battery life.",
  },
  {
    name: "Standing Desk",
    price: 199.99,
    category: "Furniture",
    description:
      "Adjustable height standing desk with a sturdy build and modern design.",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    category: "Kitchen",
    description:
      "Programmable coffee maker with a 12-cup capacity and built-in grinder.",
  },
  {
    name: "Yoga Mat",
    price: 24.99,
    category: "Fitness",
    description:
      "Eco-friendly yoga mat with non-slip surface and extra cushioning.",
  },
  {
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    description:
      "Latest model smartphone with a high-resolution display and advanced camera system.",
  },
  {
    name: "Gaming Chair",
    price: 149.99,
    category: "Furniture",
    description:
      "Ergonomic gaming chair with adjustable armrests and lumbar support.",
  },
  {
    name: "Blender",
    price: 89.99,
    category: "Kitchen",
    description:
      "High-powered blender with multiple speed settings and a large capacity jar.",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    category: "Fitness",
    description:
      "Lightweight and breathable running shoes with excellent cushioning and support.",
  },
];

const cardContainer = document.querySelector(".row");
const buttons = document.querySelectorAll(".btn-secondary");



function displayProducts(products) {
  products.map(function (product) {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-3");
    productCard.dataset.category = product.category;
    productCard.style.width = "18rem";
    productCard.innerHTML = `
      <div class="card mb-3">
      <img src="${product.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p>Price: &#8358;${product.price}</p>
          <p class="card-text">${product.description}</p>
          <a href="#" class="btn btn-primary">Add To Cart</a>
      </div>
      
      </div>
  `;
    cardContainer.appendChild(productCard);
  });
}

// displayProducts(products)

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let btnText = e.target.textContent;
    const products = document.querySelectorAll(".col-md-3");
    products.forEach(function (product) {
      const category = product.dataset.category;
      if (category === btnText.toLowerCase() || btnText === "All") {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}); 


const BASE_URL = 'https://fakestoreapi.com'

// Asynchronous Function

async function getProducts(){
  try{

    const response = await fetch(`${BASE_URL}/products`)
    const data = await response.json()
    console.log(data);
    displayProducts(data)
  }catch(err){
    console.error(`Failure Occured: ${err}`);
    return [] 
  }
}

getProducts()

async function getUsers(){
  const response = await fetch(`${BASE_URL}/users`)
  const data = await response.json()
  console.log(data);
}

getUsers()

//usesr

//cart

//wishlist


// fetch('https://fakestoreapi.com/products/')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err => console.error(`Failure Occured: ${err}`))
// .finally(()=>console.log('Operation complete'))





