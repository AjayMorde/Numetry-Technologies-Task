const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const timeSelect = document.getElementById('time');
const userDate = document.getElementById('date')
const userpayment = document.getElementById('payment')
const user_ac = document.getElementById('ac')
const user_passenger = document.getElementById('passenger')
const pickupLocation = document.getElementById('pickup')
const dropoffLocation = document.getElementById('dropoff')






const citiesByState = {
    Maharashtra: ['Mumbai', 'Solapur', 'Pune', 'Kolhapur', 'Satara', 'City_Not_present_in_list'],
    Karnataka: ['Bangalore', 'Mysore', 'Hubli', 'Belgaum', 'City_Not_present_in_list'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'City_Not_present_in_list'],
    Chhattisgarh: ['Raipur', 'Bilaspur', 'Durg', 'Raigarh', 'City_Not_present_in_list'],
    State_Not_present_in_list: ['-']
};

function populateCities() {
    const selectedState = stateSelect.value;
    const cities = citiesByState[selectedState];
    citySelect.innerHTML = '';
    cities.forEach(city => {
        const option = document.createElement('option');
        option.textContent = city;
        option.value = city;
        citySelect.appendChild(option);
    });
}



stateSelect.addEventListener('change', populateCities);


populateCities();



// -----------------------------Date-----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById('date');
    const dateError = document.getElementById('dateerror');

    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(dateInput.value);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            dateError.textContent = 'Please select a future date.';
            dateInput.value = '';
        } else {
            dateError.textContent = '';
        }
    });
});




function submitData(event) {
    event.preventDefault();

    const date = userDate.value;
    const state = stateSelect.value
    const city = citySelect.value
    const pickup = pickupLocation.value
    const dropoff = dropoffLocation.value
    const time = timeSelect.value
    const payment = userpayment.value
    const passenger = user_passenger.value
    let price = 1400

    price = price * passenger





    console.log('====================================>', date, state, city, time, payment, price, dropoff, pickup, passenger)

    const data = {
        date: date,
        state: state,
        city: city,
        pickup: pickup,
        dropoff: dropoff,
        passenger: passenger,
        time: time,
        payment: payment,
        price: price
    }

    sendData(data, price)




}

async function sendData(data, price) {
    try {
        const token = localStorage.getItem("token")
        const res = await axios.post('taxi/tax-booking', data, { headers: { "Authorization": token } })
        if (res.status == 200) {

            alert("Booked Succesfully ")
            document.getElementById('taxi-booking-form').style.display = 'none';
            document.getElementById('dis').style.display = 'none';
            // document.getElementById('dis2').style.display = 'none';

            document.getElementById('booking_details').innerHTML = `
            <p>Your booking is confirmed. Your total payment is: <strong> Rs ${price}</strong>. You can pay on the day of travel.</p>
            <p>If you wish to cancel your taxi booking, you can do so by accessing the  <strong>Your taxi Tickets Bookings</strong> options. Feel free to delete your booking now.</p>
            <p>Enjoy your journey!</p>
        `;

        }


    } catch (err) {
        console.log('Error', err)
        console.log('Error is', err.response.data.message)
    }

}