// const nodeList=document.getElementsByName('abc')
// console.log(nodeList)


// const tagList=document.getElementsByTagName('p')
// console.log(tagList)

// const classList=document.getElementsByClassName('demo')
// console.log(classList)

// const querySelector=document.querySelectorAll('.demo')
// console.log(querySelector)

// function changeText()
// {
//     document.getElementById('demo').innerHTML='Hello'
// }

// let element=document.createElement('div')
// element.innerHTML='<h2>Hello</h2>'
// document.body.appendChild(element)
// let textOfList=document.getElementById('demo').textContent
// document.getElementById('demo').innerHTML=textOfList



// let divParent=document.querySelector('#container')
// let para=document.createElement('p')
// para.textContent='With createElement()'
// divParent.appendChild(para)


// let element=document.querySelector('#container')
// element.innerHTML+='<h2>Hello</h2>'

// let languages=['Java','Javascript','HTML','CSS']
// let parentDiv=document.querySelector('#container')
//document fragment
// let domFragment1=new DocumentFragment()
// languages.forEach((lang)=>{
//     let list=document.createElement('li')
//     list.innerHTML=lang
//     domFragment1.appendChild(list)
// })
// parentDiv.appendChild(domFragment1)


//before()
//single node
// let para=document.querySelector('p')
// let heading2=document.createElement('h2')
// heading2.innerHTML='Hello from heading2 which is before p'
// para.before(heading2)

//multiple nodes
// let olList=document.querySelector('ol')
// let languages=['Java','Javascript','HTML','CSS']

// let items=languages.map((value)=>{
//     let list=document.createElement('li')
//     list.innerHTML=value
//     return list
// })

// olList.firstChild.before(...items)

//after()
//single

// let para=document.querySelector('p')
// let heading2=document.createElement('h2')
// heading2.innerHTML='Hello from heading2 which is after p'
// para.after(heading2)

//multiple nodes

// let olList=document.querySelector('ol')
// let languages=['Java','Javascript','HTML','CSS']

// let items=languages.map((value)=>{
//     let list=document.createElement('li')
//     list.innerHTML=value
//     return list
// })

// olList.lastChild.after(...items)

//prepend()

// let olList=document.querySelector('ol')
// let languages=['Java','Javascript','HTML','CSS']

// let items=languages.map((value)=>{
//     let list=document.createElement('li')
//     list.innerHTML=value
//     return list
// })

// olList.prepend(...items)

//prepend text
// let para=document.querySelector('p')
// para.prepend('Some prepend text')
// console.log(para)

//inseradjacentHTML()

// let olList=document.querySelector('#demo')
// olList.insertAdjacentHTML('beforebegin','<p>hello</p>')
// olList.insertAdjacentHTML('afterbegin','<h3>We</h3>')
// olList.insertAdjacentHTML('beforeend','<li>Learning Dom</li>')
// olList.insertAdjacentHTML('afterend','<h1>Enjoying learning</h1>')

//replaceChild

// let olList=document.getElementById('demo')
// let newElement=document.createElement('li')
// newElement.textContent='Apple'
// let oldElement=document.getElementById('b2')
// olList.replaceChild(newElement,oldElement)



//cloneNode()

// let para=document.querySelector('p')
// let clonedPara=para.cloneNode(true)
// document.body.appendChild(clonedPara)



//removeChild()-single child node
// let olList=document.getElementById('demo')
// olList.removeChild(olList.firstElementChild)

//removechild()-all the nodes removal
// let olList=document.getElementById('demo')
// while(olList.firstChild)
// {
// olList.removeChild(olList.firstChild)
// }


//insertBefore


// let olList=document.querySelector('ol')
// let listItem=document.createElement('li')
// listItem.innerHTML='Hello from heading2 which is before p'
// olList.insertBefore(listItem,olList.lastElementChild)

//setAttribute
// let buttonType=document.querySelector('#btn')
// if(buttonType)
// {
//     buttonType.setAttribute('name','click')
//     buttonType.setAttribute('disabled','true')
// }

// let disabledValue=buttonType.getAttribute('disabled')
// console.log(disabledValue)

// buttonType.removeAttribute('name')

// if(buttonType.hasAttribute('disabled'))
// {
//     console.log("The button is still disabled")
// }

//Style events

//let para=document.getElementById('paraStyle')
//para.setAttribute('style','background-color:red')
//para.style.backgroundColor='yellow'
//para.style.cssText+='color:yellow;background-color:red'
//css(para,{background:'yellow',border:'dotted 5px red'})
// para.style.borderStyle='dotted'
// para.style.color='blue'

//computedStyle

// let computedStyle=getComputedStyle(para)
// console.log('color:',computedStyle.color)
// let computedStyle2=getComputedStyle(para,'::first-letter')
// console.log(computedStyle2.fontSize)


//className and classlist
// for(let listOfClasses of para.classList)
// console.log(listOfClasses)




// para.classList.add('hello')

// para.classList.remove('hello')
// for(let listOfClasses of para.classList)
// console.log(listOfClasses)


//getting width and height of element

// let width=para.offsetWidth
// let height=para.offsetHeight

// console.log(`The width is ${width} and height is ${height}` )

// let width2=para.clientWidth
// let height2=para.clientHeight

// console.log(`The width is ${width2} and height is ${height2}`) 



//addEventListener and removeEventListener

// document.getElementById('btn').addEventListener('click',todayDate)
// document.getElementById('btn').addEventListener('click',alertFunction)
// function todayDate()
// {
//     document.getElementById('displayDate').innerHTML=Date()
// }
// function alertFunction()
// {
//     alert('2nd eventListener is added to same element')
// }
// function removeEvent()
// {
//     document.getElementById('btn').removeEventListener('click',todayDate)
// }

document.write("Hello from document.write")



















