let btn = document.getElementById("btn")
btn.addEventListener('click', getRoles)

async function getRoles() {
    try {
        const res = await axios.get('/get/getrole')
        if (res.status == 200) {
            console.log(res.data.role)
        }

    } catch (err) {
        console.log(err);

    }
}