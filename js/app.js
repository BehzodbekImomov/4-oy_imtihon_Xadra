const dark = document.querySelector("#dark");
const togle = document.querySelector("#nav_togle");
const body = document.querySelector("body");
const cardCategory = document.querySelector(".card_category");
const home = document.querySelector(".card_home");
const modal2 = document.querySelector(".modal2");


function darcmode2() {
  dark.addEventListener("click", () => {
    body.classList.toggle("light");
    
  });
 
}
darcmode2();



function navbarTogle(e){
  // body.appendChild(2){
  //   createDocumentFragment('div')
  // }
  modal2.classList.toggle('view')
  
  let resulte=''
  resulte+=`
  
  <ul  class="d-grid justify-content-center">
  <li><a href="./index.html">Home</a></li>
  <li><a href="./blogPost.html">Blog</a></li>
  <li><a href="./about.html">About Us</a></li>
  <li><a href="./registr.html">Register</a></li>
  </ul>
  <a class="login1 " href="./login.html">Login</a>`
  
  modal2.innerHTML=resulte


  
}






togle.addEventListener('click',navbarTogle)




const fetchUser=async()=>{
  let res=await fetch(' https://jsonplaceholder.typicode.com/posts/1/comments');
  let users=await res.json();
  let resulte='';
  users.forEach((user)=>{
    resulte+=`
    <li class="d-grid d-lg-flex justify-content-center gap-4">
                        <img src="./img/sec1.svg" alt="">
                        <div class="desc">
                            <span>${user.id}</span>
                            <h3>${user.name}</h3>
                            <p>${user.body}</p>
                        </div>
                    </li>
    
    `
  });
  cardCategory.innerHTML=resulte
}

fetchUser()


const fetchUser2=async()=>{
  let res=await fetch(' https://jsonplaceholder.typicode.com/photos?_limit=3');
  let users=await res.json();
  let resulte2='';
  users.forEach((user)=>{
    resulte2+=`
    <li class="d-grid  justify-content-center ">
    <img src="./img/sec1.svg" alt="" />
    <p class="text-center text-lg-start">By <span>John Doe </span> l Aug 23, 2021</p>
    <h3 class="text-center text-lg-start">
     ${user.title}
    </h3>
    <p class="text-center text-lg-start">
    ${user.title}
    </p>
  </li>
    
    `
  });
  home.innerHTML=resulte2
}

fetchUser2()