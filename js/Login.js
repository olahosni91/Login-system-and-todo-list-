class Users{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.verify = () => { 
            var message = document.getElementById('messageP');
            if(this.username == 'admin' && this.password == '123'){
                message.innerHTML = `Welcome ${this.username}`;
                message.classList.add('text-warning');
                message.classList.remove('text-danger');
            }
            else if(this.username != 'admin' || this.password != '123'){
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

