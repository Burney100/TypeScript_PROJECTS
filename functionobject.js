function makingObject(firstname, lastname, email, phonenumber) {
    var userdata = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
    };
    return userdata;
}
console.log(makingObject("Abid", "Burney", "abc@abc.com", "009232121548"));
console.log(makingObject("Abid", "Burney", "abc@abc.com"));
