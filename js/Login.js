class Users{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.verify = () => { 
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let valpass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9]).{8,}$/gm;

            var message = document.getElementById('messageP');
            if(this.username.match(validRegex) && this.password.match(valpass)){
                message.innerHTML = `Welcome ${this.username}`;
                message.classList.add('text-warning');
                message.classList.remove('text-danger');
            }
            else if(!this.username.match(validRegex) || !this.password.match(valpass)){
                message.innerHTML = ` Not Registered`;
                message.classList.add('text-danger');
            }
            return message;
        }
    }   
}

let submitBtn = document.getElementById('submitBtn');
let trythis = ()=>{
    var userName = document.getElementById('userName').value;
    var userPass = document.getElementById('userPass').value;
    var user1 = new Users(userName, userPass);
    user1.verify(); 
}
submitBtn.addEventListener('click', trythis);

