function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerOverSpeed = 5;
    const pointsThresholdForSuspension = 12;

    // Check if the speed is less than the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerOverSpeed);

    // Display the result
    console.log("Points: " + demeritPoints);

    // Check if the driver's license is suspended
    if (demeritPoints > pointsThresholdForSuspension) {
        console.log("License suspended");
    }
}

// Example usage: replace 80 with the actual speed input
calculateDemeritPoints(80);