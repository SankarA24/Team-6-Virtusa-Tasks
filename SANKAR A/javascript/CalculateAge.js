function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    if (Number.isNaN(birthDate.getTime())) {
        throw new Error("Invalid date. Use YYYY-MM-DD.");
    }
    const today = new Date();
    if (birthDate > today) {
        throw new Error("Date of birth cannot be in the future.");
    }
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthdayNotReached =
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate());

    if (birthdayNotReached) {
        age--;
    }
    return age;
}
const dateOfBirth = process.argv[2];
if (!dateOfBirth) {
    console.log("Please provide your date of birth.");
    console.log("Example: node CalculateAge.js 2002-05-10");
} else {
    try {
        const age = calculateAge(dateOfBirth);
        console.log("Date of Birth:", dateOfBirth);
        console.log("Age:", age);
    } catch (error) {
        console.log(error.message);
    }
}