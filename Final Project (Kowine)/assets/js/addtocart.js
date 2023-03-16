if(localStorage.getItem('products')===null){
    localStorage.setItem('products',JSON.stringify([]))
}

let addBtn=document.querySelectorAll('.fa-bag-shopping');

for(let btn of addBtn){
    btn.onclick=function(){
        this.classList.toggle('active');
        let product_list=JSON.parse(localStorage.getItem('products'));
        let product_img= this.parentElement.previousElementSibling.previousElementSibling.firstChild.src;
        let product_title=this.parentElement.previousElementSibling.children[0].innerHTML;
        let product_pirce=this.parentElement.previousElementSibling.children[1].innerHTML;

        product_list.push({
            Photo:product_img,
            Price:product_pirce,
            Title:product_title,
            Count:1
        })
        console.log(product_list);
        localStorage.setItem('products',JSON.stringify(product_list));
        ShowCount();
    }
}
function ShowCount(){
    let product_list=JSON.parse(localStorage.getItem('products'));
    document.getElementById('count').innerHTML=product_list.length;
}
ShowCount();

function GetItems(){
    let product_list=JSON.parse(localStorage.getItem('products'));
    let products='';
    product_list.forEach(product=>{
        products+=`
        <div class="text-center col-12 col-sm-6 col-md-4 col-lg-3 card_main">
        <div class="card" style="width: 100%;">
          <div>
            <img class="card-img-top" src="${product_img}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h5 class="card-title">${product_title}</h5>
            <span class="card-text">${product_pirce}</span>
          </div>
          <div class="slider_icons row">
            <i class="fa-solid fa-bag-shopping"></i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
    </div>
        `
    })
    document.getElementById('row_list').innerHTML=products
}
GetItems();