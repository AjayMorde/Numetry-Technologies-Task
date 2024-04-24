document.addEventListener('DOMContentLoaded', function() {
    getBookings();
});

async function getBookings() {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get('/gettax/getbookings', { headers: { "Authorization": token } });

        if (res.status === 200) {
            const getBookings = res.data.data;
            const username = res.data.name;
            console.log('=======================>', getBookings)
            document.getElementById('username').innerHTML = `

         
           <h1>Hello, ${username}!</h1> <h2> Here are your Cab booking details, payment methods, and more:</h2> 
           If you find any wrong data in your bookings, please update it or delete the booking.<br>

           Also, remember to add new bookings before your bus time expires to ensure your seat is reserved.<br>
       
           Feel free to explore and manage your bookings. Enjoy your journey!
          


            
            `
            const table = document.createElement('table');
            table.classList.add('bookings-table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Date</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pickup Location</th>
                        <th>Dropoff Location</th>
                         <th>Passenger</th>
                        <th>Time</th>
                        <th>payment</th>
                        <th>Price</th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody id="bookings-body"></tbody>
            `;

            const bookingsBody = table.querySelector('#bookings-body');


            getBookings.forEach((booking, index) => {

                const originalDate = booking.date;
                const formattedDate = new Date(originalDate).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }).split('/').join('-');
                console.log('============>', formattedDate)

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${formattedDate}</td>
                    <td>${booking.state}</td>
                    <td>${booking.city}</td>
                    <td>${booking.pickup}</td>
                    <td>${booking.dropoff}</td>
                    <td>${booking.passenger}</td>
                    <td>${booking.time}</td>
                    <td>${booking.payment}</td>
                    <td>${booking.price}</td>
                `;


                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.addEventListener('click', () => deleteBooking(booking.id)); // Call deleteBooking function with booking id


                const deleteCell = document.createElement('td');
                deleteCell.appendChild(deleteBtn);
                row.appendChild(deleteCell);

                bookingsBody.appendChild(row);

                async function deleteBooking(bookingId) {
                    try {
                        const token = localStorage.getItem("token");
                        const res = await axios.delete(`/delete/taxibooking/${bookingId}`, { headers: { "Authorization": token } });
                        console.log('1===?')
                        if (res.status === 200) {
                            console.log('===>2')
                            window.location.reload()
                            const rowToDelete = document.getElementById(`booking-${bookingId}`);
                            rowToDelete.remove();
                            alert('Data delete successfully');

                        }


                    } catch (err) {
                        console.log("Error", err);
                    }
                }
            });





            document.body.appendChild(table);
        }
    } catch (err) {
        console.log(err);
    }
}