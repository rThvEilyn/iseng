//alert('helllo word')

function login(){

    const user = 'admin'
    const pass = 'admin'
    
    var userName=prompt('Username','')
    var passWord=prompt('Password','')
    
    if (userName==user && passWord==pass) {
        alert('hello')
        window.location='FirstPage.html'
    }
    else {
        if (userName != user){
            alert('wrong username')
        } else {
            alert('wrong password')
        }
    }
}

function kk(){
    var test = document.getElementById('Name').value
    alert('nama : '+test)
}