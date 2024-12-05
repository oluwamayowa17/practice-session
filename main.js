const cardContainer = document.querySelector('.container')
const product = {
  name: 'Bag',
  price: 20000,
  description: 'This is a bag'
}

product.name
const productCard = document.createElement("div");
productCard.classList.add("card");
productCard.style.width = "18rem";
productCard.innerHTML = `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p>Price: &#8358;${product.price}</p>
        <p class="card-text">${product.description}</p>
        <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
`;

cardContainer.appendChild(productCard)

const greet = document.querySelector('#greeting')

function displayName(){
  greet.textContent = 'Welcome User'
}


const numdisplay = document.querySelector('#counter')
let num = 0
function add(){
  num++
  numdisplay.textContent = num
}

function subtract(){
  num--
  numdisplay.textContent = num
}


function reset(){
  num = 0
  numdisplay.textContent = num
}

const myBtns = document.querySelectorAll('#btn')

myBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    e.target.classList.add('btnss')
    console.log(e.target);
  })
})


// myBtn.addEventListener('click', function(e){
//   myBtn.textContent = 'You clicked me'
//   console.log(e.target);
// })

// function changeElementContent(e){

// }

const regForm = document.querySelector('#reg-form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const result = document.getElementById('result')

regForm.addEventListener('submit', handleRegSubmit)

password.addEventListener('input', function(e){
  if(e.target.value.length < 8){
    result.textContent = 'Passwords must be at least 8 characters'
    result.style.display = 'block'
  }
})

function handleRegSubmit(e){
  e.preventDefault()
  if(username.value.length === 0 || email.value.length === 0 || password.value.length === 0 || confirmPassword.value.length === 0){
    result.textContent = 'Required Fields CANNOT be Blank'
    result.style.display = 'block'
  }else if(password.value.length < 8){
    result.textContent = 'Password must be at least 8 characters'
    result.style.display = 'block'
  }else if(password.value !== confirmPassword.value){
    result.textContent = 'Passwords do not match'
    result.style.display = 'block'
  }else{
    result.textContent = 'Registration Successful'
    result.style.display = 'block'
    result.classList.remove('alert-danger')
    result.classList.add('alert-success')
    window.location.href = 'home.html'
    localStorage.setItem('username', username.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
  }
}


let student = {
  name: 'John Doe',
  age: 25,
  grade: '12th',
  subjects: ['Math', 'Science', 'English'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
}

localStorage.setItem('student', JSON.stringify(student))

