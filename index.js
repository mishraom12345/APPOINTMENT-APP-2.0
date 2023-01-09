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
    
        axios.post("https://crudcrud.com/api/708dc7dc27834e86877d8be970ce7689/appointmentdata",obj)
            .then((response)=>{
                displayonsreen(response.data)
                console.log(response)

            }).catch((err)=>{
                document.body.innerHTML = document.body.innerHTML + "<h3> something went wrong </h3>"
                console.log(err)
            })
        

    
    


}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/708dc7dc27834e86877d8be970ce7689/appointmentdata")
            .then((response)=>{
                
                console.log(response)

                for (let i = 0; i < response.data.length; i++) {
                    displayonsreen(response.data[i])
                    
                }

            }).catch((err)=>{
                document.body.innerHTML = document.body.innerHTML + "<h3> something went wrong </h3>"
                console.log(err)
            })
    for (let i = 0; i < localStorage.length; i++) {
        var keys = localStorage.key(i)
        var data = localStorage.getItem(keys)
    
        var strtoobj = JSON.parse(data)
    
        displayonsreen(strtoobj)
        
    }
    
})

function displayonsreen(obj){
    var li = `<li id = '${obj.email}'> ${obj.email} ${obj.name} <button onclick = "deleting('${obj.email}')" >delete</button> <button onclick = "editing('${obj.email}')">Edit</button></li>`
    var ul = document.getElementById('ul')
    ul.innerHTML = ul.innerHTML+li

    
}

function deleting(e){
    
}
function deletefromscreen(e){
    
}

function editing(e){
    var emailvalue = JSON.parse(localStorage.getItem(e)).email;
    var namevalue = JSON.parse(localStorage.getItem(e)).name;

    document.getElementById("emailtype").value =emailvalue ;
    document.getElementById("nametype").value = namevalue;

}
