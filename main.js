function predictCategory() {
    const age = document.getElementById("ageInput").value;
    let category;

    if (age < 0 || age === "") {
        category = "Please enter a valid age.";
    } else if (age <= 12) {
        category = "Child";
    } else if (age <= 19) {
        category = "Teenager";
    } else if (age <= 35) {
        category = "Young Adult";
    } else if (age <= 55) {
        category = "Adult";
    } else if (age <= 65) {
        category = "Middle-aged Adult";
    } else {
        category = "Senior";
    }

    document.getElementById("result").innerHTML = "You are in the: " + category + " category.";
}