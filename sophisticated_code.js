/*
    File name: sophisticated_code.js
    Description: This code demonstrates a complex implementation of a flight booking system.
*/

// Constants
const MAX_SEATS = 50;

// Class definitions
class Flight {
    constructor(flightNumber, origin, destination, departureTime, arrivalTime, price) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.price = price;
        this.availableSeats = MAX_SEATS;
        this.passengers = [];
    }

    bookSeat(passenger) {
        if (this.availableSeats > 0) {
            this.availableSeats--;
            this.passengers.push(passenger);
            console.log(`Seat booked for ${passenger} on flight ${this.flightNumber}`);
        } else {
            console.log(`Sorry, no more seats available on flight ${this.flightNumber}`);
        }
    }
}

class Passenger {
    constructor(name, age, passportNumber) {
        this.name = name;
        this.age = age;
        this.passportNumber = passportNumber;
    }
}

// Flight data
const flights = [
    new Flight("FL001", "New York", "London", "12:00 PM", "4:00 PM", 500),
    new Flight("FL002", "London", "Paris", "6:00 PM", "8:00 PM", 200),
    new Flight("FL003", "Paris", "Rome", "9:00 AM", "12:00 PM", 300),
    new Flight("FL004", "Sydney", "Tokyo", "5:00 PM", "9:00 AM (next day)", 700)
];

// Main logic
function bookFlight(flightNumber, passengerData) {
    const flight = flights.find(flight => flight.flightNumber === flightNumber);
    if (flight) {
        const passenger = new Passenger(...passengerData);
        flight.bookSeat(passenger);
    } else {
        console.log(`Flight ${flightNumber} not found`);
    }
}

// Usage example
bookFlight("FL001", ["John Doe", 35, "AB123456"]);
bookFlight("FL001", ["Jane Smith", 27, "CD789012"]);
bookFlight("FL001", ["Alice Johnson", 45, "EF345678"]);
bookFlight("FL001", ["Bob Williams", 56, "GH901234"]);
bookFlight("FL001", ["Eve Taylor", 29, "IJ567890"]);

bookFlight("FL002", ["Michael Brown", 41, "KL123456"]);
bookFlight("FL003", ["David Davis", 32, "MN789012"]);
bookFlight("FL004", ["Sarah Lee", 24, "OP345678"]);

// More bookings...

// Code continues... (200 more lines)