const Sname = document.getElementById("name");
const Semail = document.getElementById("email");
const Spassword = document.getElementById("password");
const Scity = document.getElementById("city");
const Sage = document.getElementById("age");
const Scontact = document.getElementById("contact");

function submitData(event) {
    event.preventDefault();
    const form = event.target;

    const name = Sname.value;
    const email = Semail.value;
    const password = Spassword.value;
    const city = Scity.value;
    const age = Sage.value;
    const contact = Scontact.value;

    const formData = {
        name: name,
        email: email,
        password: password,
        city: city,
        age: age,
        contact: contact
    };

    if (formData.password.length <= 6) {
        document.body.innerHTML += '<div style="color: red;">Password length must be greater than 6</div>';
    } else {
        addUser(formData);
    }
}

async function addUser(userData) {
    try {
        let response = await axios.post("http://localhost:3000/add-studentsData/addData", userData);
        console.log(response)
        if (response.status === 200) {
            alert("User Successfully Created!");
            // Clear form fields after successful submission
            Sname.value = '';
            Semail.value = '';
            Spassword.value = '';
            Scity.value = '';
            Sage.value = '';
            Scontact.value = '';
            // Remove any error messages
        }
        console.log(response.data);
    } catch (err) {
        console.log('=====>', err.messsage);
        alert("Bad Parameters, or Email already Exists");
    }
}