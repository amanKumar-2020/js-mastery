// How do you select:
// An element by ID?
// Elements by class?
// All <p> tags?
// ---------------XXX-----------------------XXX-----------------------XXX--------------
// let tagId = document.querySelector("#tag")
// tagId.innerHTML = "this is changed"

// let cls = document.querySelectorAll(".name")

// let count =1
// console.log(cls);
// cls.forEach(element => {
//   element.textContent =`it is class ${count}`
//   count++;
// });


// let ptag =document.querySelectorAll("p")

// ptag.forEach(el => {
//   console.dir(el);
  
// });

// create a h1 tag and write hello Aman
let h1 = document.createElement("h1")
h1.textContent = "it is created h1"
h1.classList.add("createdH1");
let parentContainer = document.body
if (parentContainer) {
  parentContainer.appendChild(h1);
}