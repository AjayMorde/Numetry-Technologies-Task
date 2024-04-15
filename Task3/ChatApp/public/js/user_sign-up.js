
const signUpLink = document.querySelector('.sign-up-link');
const signUpForm = document.querySelector('.sign-up-form');
const closeBtn = document.querySelector('.close-btn');
const l1 = document.querySelector('.l1');
const name=document.getElementById('name');
const email=document.getElementById('email');
const tel=document.getElementById('tel');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const btn=document.getElementById('btn');

const user_login=document.getElementById('userlogin');

user_login.addEventListener('click', function () {
    

    signUpForm.style.display = 'none';
    loginForm.style.display = 'block';

});



signUpLink.addEventListener('click', function (event) {
    event.preventDefault();

    signUpForm.style.display = 'block';
    loginForm.style.display = 'none';

});
l1.addEventListener('click', function (event) {
    event.preventDefault();

    signUpForm.style.display = 'block';
    loginForm.style.display = 'none';

});

closeBtn.addEventListener('click', function () {
    signUpForm.style.display = 'none';
});




function signup(event){
    event.preventDefault();
    const nameValue1 = name.value; 
    const emailValue1 = email.value; 
    const telValue1 = tel.value;
    const passwordValue1 = password.value;
    // const cpasswordValue = cpassword.value;

    const userData = {
        nameValue: nameValue1,
        emailValue: emailValue1,
        phoneValue: telValue1,
        passwordValue: passwordValue1,
   
        
    };
    sendUserData(userData)

}
    async function sendUserData(userData){
       
    try{
        
        const res = await axios.post('http://localhost:4500/user/signup', userData);

        if(res.status===200){
            alert("user created")
            
            loginForm.style.display = 'block';
            signUpForm.style.display = 'none';
        

        }
      

    }catch (err) {
        console.log(err);
        if (err.response && err.response.data && err.response.data.msg) {
            alert(err.response.data.msg);
        } else {
            alert("something went wrong");
        }
    }
}