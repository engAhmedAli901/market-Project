async function get_products1(){
    let response = await fetch(`https://dummyjson.com/products/category/beauty`)
    let data = await response.json()
    console.log(data);
    displayProducrts1(data)
}

function displayProducrts1(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("beauty").innerHTML = cartona
}
get_products1()

async function get_products2(){
    let response = await fetch(`https://dummyjson.com/products/category/fragrances`)
    let data = await response.json()
    console.log(data);
    displayProducrts2(data)
}

function displayProducrts2(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("fragrances").innerHTML = cartona
}
get_products2()


async function get_products3(){
    let response = await fetch(`https://dummyjson.com/products/category/furniture`)
    let data = await response.json()
    console.log(data);
    displayProducrts3(data)
}

function displayProducrts3(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("furniture").innerHTML = cartona
}
get_products3()


async function get_products4(){
    let response = await fetch(`https://dummyjson.com/products/category/groceries`)
    let data = await response.json()
    console.log(data);
    displayProducrts4(data)
}

function displayProducrts4(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("groceries").innerHTML = cartona
}
get_products4()



async function get_products5(){
    let response = await fetch(`https://dummyjson.com/products/category/home-decoration`)
    let data = await response.json()
    console.log(data);
    displayProducrts5(data)
}

function displayProducrts5(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("home-decoration").innerHTML = cartona
}
get_products5()

async function get_products6(){
    let response = await fetch(`https://dummyjson.com/products/category/kitchen-accessories`)
    let data = await response.json()
    console.log(data);
    displayProducrts6(data)
}

function displayProducrts6(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("kitchen-accessories").innerHTML = cartona
}
get_products6()


async function get_products7(){
    let response = await fetch(`https://dummyjson.com/products/category/laptops`)
    let data = await response.json()
    console.log(data);
    displayProducrts7(data)
}

function displayProducrts7(data){
    let cartona =``
    let finaldata = data.products

    for(let i=0;i<finaldata.length;i++){
        cartona+=`<div class="col-md-3">
            <div class="card rounded-4 w-100 mt-4" style="width: 18rem;">
  <img src="${finaldata[i].thumbnail}" class="card-img-top w-100 p-2 rounded-5" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">${finaldata[i].title}</h5>
    <span class="text-warning fw-bolder">Rate: ${finaldata[i].rating}</span>
    <h6 class="mt-3">${finaldata[i].description}</h6>
    <span class="text-success fw-bolder">${finaldata[i].price} $</span>
    <br>
    <a href="#" class="btn btn-primary mt-3">add to cart <i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div> 
          </div>`
    }
    document.getElementById("laptops").innerHTML = cartona
}
get_products7()