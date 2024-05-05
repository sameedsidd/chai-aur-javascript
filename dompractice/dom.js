// ============= DOM ====================== //

// document.getElementById('title')
// <h1 class=​"heading" id=​"title">​DOM learning on Chai aur Code​</h1>​

// document.getElementById('title').id
// 'title'

// document.getElementById('title').className
// 'heading'

// document.getElementById('title').getAttribute('id')
// 'title'

// document.getElementById('title').getAttribute('class')
// 'heading'

// document.getElementById('title').getAttribute('title')
// null

// document.getElementById('title').setAttribute('class', 'test')
// undefined

// document.getElementById('title').setAttribute('class', 'test heading')
// undefined

// title.style.backgroundColor = "red"
// 'red'

// title.style.padding = "12px"
// '12px'

// title.style.borderRadius = "12px"
// '12px'

// title.innerText
// 'DOM learning on Chai aur Code'

// title.textContent
// 'DOM learning on Chai aur Code test text'

// title.innerHTML
// 'DOM learning on Chai aur Code <span style="display: none;">test text</span>'

// document.getElementsByClassName('heading')
// HTMLCollection [h1#title.heading, title: h1#title.heading]

// document.querySelector("h2")
// <h2>​Lorem ipsum dolor sit amet.​</h2>​

// document.querySelector("#title")
// <h1 class=​"heading" id=​"title">​…​</h1>​

// document.querySelector(".heading")
// <h1 class=​"heading" id=​"title">​…​</h1>​

// querySelector("input[type=password]")
// <input type=​"password" name id>​


// document.querySelector("ul")
// <ul>​…​</ul>​
// const myUl = document.querySelector("ul")
// undefined
// myUl.querySelector("li")
// <li>​…​</li>​
// const turnGreen = myUl.querySelector("li")
// undefined
// turnGreen.style.backgroundColor = "Green"
// 'Green'
// turnGreen.style.padding = "10px"
// '10px'

// const temLiList = document.querySelectorAll('li')
// undefined
// temLiList
// temLiList[1].style.backgroundColor = "blue"
// 'blue'
// const myH1 = document.querySelectorAll("h1")
// undefined
// myH1
// NodeList [h1#title.heading]
// myH1[0].style.color = "yellow"
// 'yellow'

// const temLiList = document.querySelectorAll('li')
// undefined
// temLiList.forEach(function(item){
//     item.style.color = "red"
// })


// document.getElementsByClassName("list-item")
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: 
// const tempList = document.getElementsByClassName("list-item")
// undefined
// Array.from(tempList)
// (4) [li.list-item, li.list-item, li.list-item, 
// const myConvertedArray = Array.from(tempList)
// undefined
// myConvertedArray
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// myConvertedArray.forEach((item)=>{
//     item.style.color = "yellow"
// })