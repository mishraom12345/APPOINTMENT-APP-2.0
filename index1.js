let form = document.getElementById('farm')

form.addEventListener("submit",getitem)


function getitem(e){
    let email = e.target.emailtype.value;
    let name = e.target.nametype.value;

    var obj = {
        email,name
    }
    // let objtostr = JSON.stringify(obj)
    // localStorage.setItem(obj.email,objtostr)

    axios.post("https://crudcrud.com/api/ae4a7015fb16436c923f76ac4aeed011/appointmentdata",obj)
            .then((response)=>{
                displayonsreen(response.data)
                console.log(response)

            }).catch((err)=>{
                document.body.innerHTML = document.body.innerHTML + "<h3> something went wrong </h3>"
                console.log(err)
            })
        


}

for (let i = 0; i < localStorage.length; i++) {
    var keys = localStorage.key(i)
    var data = localStorage.getItem(keys)

    var strtoobj = JSON.parse(data)

    displayonsreen(strtoobj)
    
}

function displayonsreen(obj){
    var li = `<li id = '${obj.email}'> ${obj.email} ${obj.name} <button onclick = "deleting('${obj.email}')" >delete</button> <button onclick = "editing('${obj.email}')">Edit</button></li>`
    var ul = document.getElementById('ul')
    ul.innerHTML = ul.innerHTML+li

    
}

function deleting(e){
    localStorage.removeItem(e)
    deletefromscreen(e)
}

function deletefromscreen(e){
    var parent = document.getElementById('ul')
    var child = document.getElementById(e)
    parent.removeChild(child)
}

function editing(e){
    var emailvalue = JSON.parse(localStorage.getItem(e)).email;
    var namevalue = JSON.parse(localStorage.getItem(e)).name;

    document.getElementById("emailtype").value =emailvalue ;
    document.getElementById("nametype").value = namevalue;

}
