let search1 = document .querySelector('.search1');
let search_box = document .querySelector('.search-box');
let cross = document .querySelector('.cross');
search1.addEventListener('click',()=>{
    search_box.classList.add('search-active')
})
cross.addEventListener('click',()=>{
    search_box.classList.remove('search-active')
});