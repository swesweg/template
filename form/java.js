
        const form = document.getElementById("form");
        const Username = document.getElementById("Username");
        const Email = document.getElementById("Email");
        const Password = document.getElementById("Password");

        form.addEventListener('submit',e=>{
            e.preventDefault();
             checkInput();
        });

    function checkInput(){
        const Usernamevalue = Username.value.trim();
        const Email = Email.value.trim();
        const Password = Password.value.trim();

        if(Usernamevalue === ''){
            setError(Username, 'Username can not be blank');
        }
        else{
            setSuccess(Username);
        }
        if(Emailvalue === ''){
            setError(Email, 'Email can not be blank');
        }
        else if(!isEmail(Emailvalue))
        {
            setError(Email,'not a valid Email');
        }
        else{
            setSuccess(Email);
        }
        if(Passwordvalue === ''){
            setError(Password, 'Password can not be blank');
        }
        else{
            setSuccess(Password);
        }
        function setError(input, message){
            const formcontrol = input.parentElement;
            const small = formcontrol.queryselector('small');
            formcontrol.className='form-control error';
            small.innerText= message;
        }
       function setSuccess(input){
        const formcontrol = input.parentElement;
        formcontrol.className='form-control success';
       }
    }
