// Function to fetch data from the API
async function getData() {
    try {
        const res = await axios.get('http://localhost:3000/data/getdata');
        if (res.status === 200) {
            const studentData = res.data.data;
            const dataContainer = document.getElementById('data');
            dataContainer.innerHTML = ''; // Clear previous data
            studentData.forEach(student => {
                const studentDiv = document.createElement('div');
                studentDiv.classList.add('student-info'); // Add class for styling
                studentDiv.innerHTML = `
                    <p><strong>Name:</strong> ${student.Name}</p>
                    <p><strong>Email:</strong> ${student.Email}</p>
                    <p><strong>City:</strong> ${student.City}</p>
                    <p><strong>Age:</strong> ${student.Age}</p>
                    <p><strong>Contact:</strong> ${student.Contact}</p>
                    <button class="delete-btn" ">Delete</button>
                `;
                dataContainer.appendChild(studentDiv);
            });
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', async() => {

                    try {
                        const res = await axios.delete(`http://localhost:3000/data/delete/${studentData.id}`);
                        if (res.status === 200) {
                            studentDiv.remove()
                            getData(); // Refresh data after deletion
                        }
                    } catch (err) {
                        console.error('==============>', err);
                    }
                });
            });
        }

    } catch (err) {
        console.error(err);
    }
}

// Function to add event listeners for delete buttons

// Event listener to trigger data fetching and display when DOM content is loaded
document.addEventListener('DOMContentLoaded', getData);