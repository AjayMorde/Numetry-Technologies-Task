const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const busSelect = document.getElementById('bus');
const timeSelect = document.getElementById('time');
const userDate = document.getElementById('date')
const userpayment = document.getElementById('payment')
const user_ac = document.getElementById('ac')
const user_other = document.getElementById('other')
const user_passenger = document.getElementById('passenger')


const buses = {
    Pune: ['Pune-Solapur', 'Pune-Mumbai', 'Pune-Kolhapur', 'Pune-Satara', 'Bus_Not_Present_in_lis'],
    Mumbai: ['Mumbai-Solapur', 'Mumbai-Pune', 'Mumbai-Kolhapur', 'Mumbai-Satara', 'Bus_Not_Present_in_lis'],
    Solapur: ['Solapur-Pune', 'Solapur-Mumbai', 'Solapur-Kolhapur', 'Solapur-Satara', 'Bus_Not_Present_in_lis'],
    Kolhapur: ['Kolhapur-Pune', 'Kolhapur-Mumbai', 'Kolhapur-Solapur', 'Kolhapur-Satara', 'Bus_Not_Present_in_lis'],
    Satara: ['Satara-Pune', 'Satara-Mumbai', 'Satara-Solapur', 'Satara-Kolhapur', 'Bus_Not_Present_in_lis'],
    Bangalore: ['Bangalore-Mysore', 'Bangalore-Hubli', 'Bangalore-Belgaum', 'Bus_Not_Present_in_lis'],
    Mysore: ['Mysore-Bangalore', 'Mysore-Hubli', 'Mysore-Belgaum', 'Bus_Not_Present_in_lis'],
    Hubli: ['Hubli-Bangalore', 'Hubli-Mysore', 'Hubli-Belgaum', 'Bus_Not_Present_in_lis'],
    Belgaum: ['Belgaum-Bangalore', 'Belgaum-Mysore', 'Belgaum-Hubli', 'Bus_Not_Present_in_lis'],
    Ahmedabad: ['Ahmedabad-Surat', 'Ahmedabad-Vadodara', 'Ahmedabad-Rajkot', 'Bus_Not_Present_in_lis'],
    Surat: ['Surat-Ahmedabad', 'Surat-Vadodara', 'Surat-Rajkot'],
    Vadodara: ['Vadodara-Ahmedabad', 'Vadodara-Surat', 'Vadodara-Rajkot', 'Bus_Not_Present_in_lis'],
    Rajkot: ['Rajkot-Ahmedabad', 'Rajkot-Surat', 'Rajkot-Vadodara', 'Bus_Not_Present_in_lis'],
    Raipur: ['Raipur-Bilaspur', 'Raipur-Durg', 'Raipur-Raigarh', 'Bus_Not_Present_in_lis'],
    Bilaspur: ['Bilaspur-Raipur', 'Bilaspur-Durg', 'Bilaspur-Raigarh', 'Bus_Not_Present_in_lis'],
    Durg: ['Durg-Raipur', 'Durg-Bilaspur', 'Durg-Raigarh', 'Bus_Not_Present_in_lis'],
    Raigarh: ['Raigarh-Raipur', 'Raigarh-Bilaspur', 'Raigarh-Durg', 'Bus_Not_Present_in_lis'],
    State_Not_present_in_list: ['-']

};



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

function selectBus() {
    const city = citySelect.value;
    const busList = buses[city];

    busSelect.innerHTML = '';
    busList.forEach(bus => {
        const option = document.createElement('option');

        option.textContent = `${bus}`;


        option.value = bus;
        busSelect.appendChild(option);

    });
}


stateSelect.addEventListener('change', populateCities);
citySelect.addEventListener('change', selectBus);

populateCities();
selectBus();


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
    const prices = {
        'Mumbai-Pune': 400,
        'Mumbai-Solapur': 900,
        'Mumbai-Kolhapur': 800,
        'Mumbai-Satara': 600,

        'Pune-Mumbai': 400,
        'Pune-Solapur': 350,
        'Pune-Satara': 300,
        'Pune-Kolhapur': 400,

        'Solapur-Mumbai': 900,
        'Solapur-Pune': 350,
        'Solapur-Kolhapur': 400,
        'Solapur-Satara': 350,

        'Satara-Mumbai': 600,
        'Satara-Pune': 300,
        'Satara-Solapur': 350,
        'Satara-Kolhapur': 300,

        'Kolhapur-Mumbai': 500,
        'Kolhapur-Pune': 450,
        'Kolhapur-Solapur': 350,
        'Kolhapur-Satara': 300,

        'Bangalore-Mysore': 600,
        'Bangalore-Hubli': 1200,
        'Bangalore-Belgaum': 1500,

        'Mysore-Bangalore': 600,
        'Mysore-Hubli': 1000,
        'Mysore-Belgaum': 1400,

        'Hubli-Bangalore': 1200,
        'Hubli-Mysore': 1000,
        'Hubli-Belgaum': 600,

        'Belgaum-Bangalore': 1500,
        'Belgaum-Mysore': 1400,
        'Belgaum-Hubli': 600,

        'Ahmedabad-Surat': 800,
        'Ahmedabad-Vadodara': 700,
        'Ahmedabad-Rajkot': 1200,

        'Surat-Ahmedabad': 800,
        'Surat-Vadodara': 600,
        'Surat-Rajkot': 1100,

        'Vadodara-Ahmedabad': 700,
        'Vadodara-Surat': 600,
        'Vadodara-Rajkot': 1000,

        'Rajkot-Ahmedabad': 1200,
        'Rajkot-Surat': 1100,
        'Rajkot-Vadodara': 1000,

        'Raipur-Bilaspur': 500,
        'Raipur-Durg': 600,
        'Raipur-Raigarh': 700,

        'Bilaspur-Raipur': 500,
        'Bilaspur-Durg': 400,
        'Bilaspur-Raigarh': 600,

        'Durg-Raipur': 600,
        'Durg-Bilaspur': 400,
        'Durg-Raigarh': 500,

        'Raigarh-Raipur': 700,
        'Raigarh-Bilaspur': 600,
        'Raigarh-Durg': 500,
        'Bus_Not_Present_in_list': 1000
    };

    let userprice = prices[busSelect.value];
    console.log('=========================>', userprice)



    const date = userDate.value;
    const state = stateSelect.value
    const city = citySelect.value
    const bus = busSelect.value
    const time = timeSelect.value
    const payment = userpayment.value
    const other = user_other.value
    const passenger = user_passenger.value
    let price = userprice
    const ac = user_ac.value

    price = price * passenger

    if (ac == "Yes") {
        price = price + 300
    }
    console.log(price)



    console.log('====================================>', date, state, city, bus, time, payment, price, ac, passenger, other)

    const data = {
        date: date,
        state: state,
        city: city,
        bus: bus,
        other: other,
        passenger: passenger,
        time: time,
        payment: payment,
        ac: ac,
        price: price
    }

    sendData(data, price)




}

async function sendData(data, price) {
    try {
        const token = localStorage.getItem("token")
        const res = await axios.post('bus/bus-booking', data, { headers: { "Authorization": token } })
        if (res.status == 200) {

            alert("Booked Succesfully ")
            document.getElementById('bus-booking-form').style.display = 'none';
            document.getElementById('dis').style.display = 'none';
            document.getElementById('dis2').style.display = 'none';

            document.getElementById('booking_details').innerHTML = `
            <p>Your booking is confirmed. Your total payment is: <strong> Rs ${price}</strong>. You can pay on the day of travel.</p>
            <p>If you wish to cancel your bus booking, you can do so by accessing the  <strong>Your Bus Tickets Bookings</strong> options. Feel free to delete your booking now.</p>
            <p>Enjoy your journey!</p>
        `;

        }


    } catch (err) {
        console.log('Error', err)
        console.log('Error is', err.response.data.message)
    }

}