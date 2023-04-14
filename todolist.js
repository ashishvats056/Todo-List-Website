let ul=document.getElementById('ulist')
let a=document.getElementById('taskinput')
window.onload = function(){
    if (!this.localStorage.getItem("todo")){
        this.localStorage.setItem("todo", JSON.stringify([]))
    }
    else {
        let todos = JSON.parse(this.localStorage.getItem("todo"))
        for (todo of todos){
            let li=this.document.createElement("li")
            li.innerHTML=`<span>${todo}</span>`
            ul.appendChild(li)
            let btn=document.createElement("button")
            btn.innerHTML='<i class="fa-solid fa-trash-can"></i>'
            btn.onclick = function(){
                p=this.parentNode.innerText
                let tod = JSON.parse(localStorage.getItem("todo"))
                tod.splice(tod.indexOf(p), 1)
                localStorage.setItem("todo", JSON.stringify(tod))
                this.parentNode.remove()
            }
            li.appendChild(btn)
        }
    }
}
function enterTodo(e){
    if(e.code === 'Enter'){
        let x=e.target.value
        let li=document.createElement("li")
        li.innerHTML=`<span>${x}</span>`
        ul.appendChild(li)
        let todos = JSON.parse(localStorage.getItem("todo"))
        todos.push(x)
        localStorage.setItem("todo", JSON.stringify(todos))
        a.value=""
        let btn=document.createElement("button")
        btn.innerHTML='<i class="fa-solid fa-trash-can"></i>'
        btn.onclick = function(){
            p=this.parentNode.innerText
            let tod = JSON.parse(localStorage.getItem("todo"))
            tod.splice(tod.indexOf(p), 1)
            localStorage.setItem("todo", JSON.stringify(tod))
            this.parentNode.remove()
        }
        li.appendChild(btn)
    }
}

function addTodo($this){
    var a = $this.previousElementSibling.value
    if(a!==''){
        let li=document.createElement("li")
        li.innerHTML=`<span>${a}</span>`
        ul.appendChild(li)
        let todos = JSON.parse(localStorage.getItem("todo"))
        todos.push(a)
        localStorage.setItem("todo", JSON.stringify(todos))
        $this.previousElementSibling.value = ""
        let btn=document.createElement("button")
        btn.innerHTML='<i class="fa-solid fa-trash-can"></i>'
        btn.onclick = function(){
            p=this.parentNode.innerText
            let tod = JSON.parse(localStorage.getItem("todo"))
            tod.splice(tod.indexOf(p), 1)
            localStorage.setItem("todo", JSON.stringify(tod))
            this.parentNode.remove()
        }
        li.appendChild(btn)
    }
}

function removeAll(){
    let ul=document.getElementById('ulist')
    ul.innerHTML=""
    localStorage.setItem("todo", JSON.stringify([]))
}