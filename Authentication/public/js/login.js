let useremail = document.getElementById("email");
let userpassword = document.getElementById("password")

function Login(event) {
    event.preventDefault();
    const email = useremail.value;
    const password = userpassword.value;

    const data = {
        email: email,
        password: password
    }

    sendData(data);


}

async function sendData(data) {
    try {
        const res = await axios.post('/login/data', data)
        if (res.status == 200) {
            alert(res.data.msg)

        }
        useremail.value = ''
        userpassword.value = ''
        window.location.href = '/role'

    } catch (err) {

        console.log('Error', err)

    }
}