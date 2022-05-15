class person{
    constructor(f_name, L_name, email, U_name, Pswd){
        this.f_name = f_name;
        this.L_name = L_name;
        this.email = email;
        this.U_name = U_name;
        this.Pswd = Pswd;
    }
}

var personArray = [];

function  Register(){
    var f_name = document.getElementById('f_name').value;
    var L_name = document.getElementById('l_name').value;
    var email = document.getElementById('email').value;
    var U_name = document.getElementById('u_name').value;
    var Pswd = document.getElementById('pswd').value;

    let usr = new person(f_name, L_name, email, U_name, Pswd);
    
    this.personArray.push(usr);
   
    alert(U_name+' user created');
      
    window.localStorage.setItem("globalObject", JSON.stringify(this.personArray));
    window.location.href = "login.html";
 }