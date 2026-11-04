let parkingSlots = [

    { id: "p1", status: "available" },

    { id: "p2", status: "occupied" },

    { id: "p3", status: "available" },

    { id: "p4", status: "available" },

    { id: "p5", status: "occupied" }

];




let savedSlots = localStorage.getItem("parkingSlots");

if (savedSlots !== null) {

    try {

        let parsedSlots = JSON.parse(savedSlots);

        if (Array.isArray(parsedSlots) &&
            parsedSlots.length === 5) {

            parkingSlots = parsedSlots;

        } else {

            localStorage.setItem(
                "parkingSlots",
                JSON.stringify(parkingSlots)
            );

        }

    } catch (error) {

        localStorage.setItem(
            "parkingSlots",
            JSON.stringify(parkingSlots)
        );

    }

} else {

    localStorage.setItem(
        "parkingSlots",
        JSON.stringify(parkingSlots)
    );

}




const parkingRate = 30;

let calculatedCost = 0;




function saveParkingData() {

    localStorage.setItem(
        "parkingSlots",
        JSON.stringify(parkingSlots)
    );

}




function checkTotalSlots() {

    return parkingSlots.length;

}




function checkAvailableSlots() {

    return parkingSlots.filter(function(slot) {

        return slot.status === "available";

    });

}




function checkOccupiedSlots() {

    return parkingSlots.filter(function(slot) {

        return slot.status === "occupied";

    });

}




function displayDashboard() {

    document.getElementById("totalCount").textContent =
        checkTotalSlots();

    document.getElementById("availableCount").textContent =
        checkAvailableSlots().length;

    document.getElementById("occupiedCount").textContent =
        checkOccupiedSlots().length;

}




function displayAllSlots() {

    let container =
        document.getElementById("allSlotsContainer");

    container.innerHTML = "";

    parkingSlots.forEach(function(slot) {

        let color =
            slot.status === "available" ? "success" : "danger";

        container.innerHTML += `

            <div class="col-6 col-md-4 col-lg-2">

                <div class="card mt-3 text-center">

                    <div class="card-body">

                        <h5>${slot.id.toUpperCase()}</h5>

                        <span class="badge bg-${color}">

                            ${slot.status.toUpperCase()}

                        </span>

                    </div>

                </div>

            </div>

        `;

    });

}




function displayAvailableSlots() {

    let container =
        document.getElementById("availableContainer");

    container.innerHTML = "";

    let availableSlots = checkAvailableSlots();

    availableSlots.forEach(function(slot) {

        container.innerHTML += `

            <div class="col-6 col-md-4">

                <div class="card mt-2">

                    <div class="card-body text-center">

                        <h5>${slot.id.toUpperCase()}</h5>

                        <p class="text-success">Available</p>

                    </div>

                </div>

            </div>

        `;

    });

    if (availableSlots.length === 0) {

        container.innerHTML =
            "<p>No Available Slots!</p>";

    }

}




function displayOccupiedSlots() {

    let container =
        document.getElementById("occupiedContainer");

    container.innerHTML = "";

    let occupiedSlots = checkOccupiedSlots();

    occupiedSlots.forEach(function(slot) {

        container.innerHTML += `

            <div class="col-6 col-md-4">

                <div class="card mt-2">

                    <div class="card-body text-center">

                        <h5>${slot.id.toUpperCase()}</h5>

                        <p class="text-danger">Occupied</p>

                        <button class="btn btn-warning"

                            onclick="releaseSlot('${slot.id}')">

                            Release Slot

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

    if (occupiedSlots.length === 0) {

        container.innerHTML =
            "<p>No Occupied Slots!</p>";

    }

}




function updateSlotDropdown() {

    let dropdown =
        document.getElementById("selectedSlot");

    let selectedValue = dropdown.value;

    dropdown.innerHTML =
        '<option value="">Select Parking Slot</option>';

    let availableSlots = checkAvailableSlots();

    availableSlots.forEach(function(slot) {

        let option = document.createElement("option");

        option.value = slot.id;

        option.textContent = slot.id.toUpperCase();

        dropdown.appendChild(option);

    });

    if (availableSlots.some(function(slot) {
        return slot.id === selectedValue;
    })) {

        dropdown.value = selectedValue;

    }

}




function updateDisplay() {

    displayDashboard();

    displayAllSlots();

    displayAvailableSlots();

    displayOccupiedSlots();

    updateSlotDropdown();

}




function calculateParkingFee(hours) {

    return hours * parkingRate;

}




function showParkingCost() {

    let hours = Number(
        document.getElementById("parkingHours").value
    );

    if (!Number.isInteger(hours) || hours <= 0) {

        alert("Please enter valid parking hours!");

        return;

    }

    calculatedCost = calculateParkingFee(hours);

    document.getElementById("costResult").textContent =

        "Total Parking Cost: ₹" + calculatedCost;

}




function confirmBooking() {

    let vehicleNumber =
        document.getElementById("vehicleNumber").value.trim();

    let slotId =
        document.getElementById("selectedSlot").value;

    let hours = Number(
        document.getElementById("parkingHours").value
    );

    if (vehicleNumber === "" || slotId === "" ||
        !Number.isInteger(hours) || hours <= 0) {

        alert("Please enter all booking details!");

        return;

    }

    let slot = parkingSlots.find(function(item) {

        return item.id === slotId;

    });

    if (!slot || slot.status !== "available") {

        alert("Sorry! This slot is not available!");

        updateDisplay();

        return;

    }

    calculatedCost = calculateParkingFee(hours);

    document.getElementById("costResult").textContent =

        "Total Parking Cost: ₹" + calculatedCost;


    let summary =

        "Vehicle Number: " + vehicleNumber +
        "\nParking Slot: " + slotId.toUpperCase() +
        "\nParking Hours: " + hours +
        "\nCost per Hour: ₹" + parkingRate +
        "\nTotal Cost: ₹" + calculatedCost;

    document.getElementById("bookingSummary").textContent =
        summary;

    document.getElementById("confirmationBox").style.display =
        "block";

}




function completeBooking() {

    let vehicleNumber =
        document.getElementById("vehicleNumber").value.trim();

    let slotId =
        document.getElementById("selectedSlot").value;

    let hours = Number(
        document.getElementById("parkingHours").value
    );

    let slot = parkingSlots.find(function(item) {

        return item.id === slotId;

    });

    if (!slot || slot.status !== "available") {

        alert("Sorry! This slot is no longer available!");

        cancelBooking();

        updateDisplay();

        return;

    }

    let totalCost = calculateParkingFee(hours);

    

    slot.status = "occupied";



    let bookings = JSON.parse(

        localStorage.getItem("bookingDetails") || "{}"

    );

    bookings[slotId] = {

        vehicleNumber: vehicleNumber,

        hours: hours,

        cost: totalCost

    };

    localStorage.setItem(

        "bookingDetails",

        JSON.stringify(bookings)

    );

    

    saveParkingData();

    alert(

        "BOOKING SUCCESSFUL!" +

        "\nVehicle Number: " + vehicleNumber +

        "\nParking Slot: " + slotId.toUpperCase() +

        "\nParking Hours: " + hours +

        "\nTotal Cost: ₹" + totalCost

    );

    

    document.getElementById("confirmationBox").style.display =
        "none";

    

    document.getElementById("vehicleNumber").value = "";

    document.getElementById("selectedSlot").value = "";

    document.getElementById("parkingHours").value = "";

    document.getElementById("costResult").textContent =
        "Total Parking Cost: ₹0";

    

    updateDisplay();

}




function cancelBooking() {

    document.getElementById("confirmationBox").style.display =
        "none";

    alert("Booking Cancelled!");

}




function releaseSlot(slotId) {

    let slot = parkingSlots.find(function(item) {

        return item.id === slotId;

    });

    if (!slot) {

        alert("Invalid Parking Slot!");

        return;

    }

    if (slot.status === "occupied") {

        let bookings = JSON.parse(

            localStorage.getItem("bookingDetails") || "{}"

        );

        delete bookings[slotId];

        localStorage.setItem(

            "bookingDetails",

            JSON.stringify(bookings)

        );

        slot.status = "available";

        saveParkingData();

        alert(slotId.toUpperCase() + " released successfully!");

        updateDisplay();

    } else {

        alert("This slot is already available!");

    }

}




document.addEventListener("DOMContentLoaded", function() {

    updateDisplay();

});
