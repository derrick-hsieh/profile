// const myWork = document.querySelectorAll(".mywork");
// let workContent = document.querySelector(".work-container");
// myWork.forEach(function (item){
//     console.log(item);
//     const btn = document.querySelector(".mywork-item");
//     console.log(btn);
//      btn.addEventListener("click", function(){
//         myWork.forEach(function (e){
//             console.log(e);
//             if (e !== item){
//                 e.classList.remove("show-text");
//             }

//         })
//         myWork.classList.toggle("show-text");
//     })


// })
const works = document.querySelectorAll(".mywork");
console.log(works);
const btns = document.querySelectorAll(".mywork-item");
btns.forEach(function (btn){
    btn.addEventListener("click", function(){
        const workItem = this.parentElement.parentElement;
        console.log(workItem);
        workItem.classList.toggle("show-text");
        // if(works != workItem){
        //     works.classList.remove("show-text")
        // }
    })
})



// My works are not only about Graphic design but also design website with HTML&CSS and cooperate
                            // with developers, our products include App and website with practical appointment system