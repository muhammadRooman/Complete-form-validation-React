//Regex Method
const userNameCheck = /^[A-Z-a-z. ]{3,15}$/;
const lastNameCheck = /^[A-Z-a-z. ]{3,15}$/;
const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneCheck = /^[0-9-+]{11,14}$/;
const passwordCheck = /^[1-9-a-z-A-Z-!@#$%^&*()_"<?]{8,15}$/;
const conformPasswordCheck = /^[1-9-a-z-A-Z-!@#$%^&*()_"<?]{8,15}$/;

//Function :: (data) is parameter comes in formValidation Components ::: setError({ ...validations(data) });
export const validations = (data) => {
  const errors = {};

  //Name is empty logic
  if (data.names == "") {
    console.log("Name is Empty");
    errors.names = "Name is Empty";
  } else if (!userNameCheck.test(data.names)) {
    errors.names = "Alphabet mint 3 max 15";
  } else {
    errors.names = "";
    console.log("name is not Empty");
  }
  //Last name is empty logic
  if (data.lname == "") {
    console.log("Last Name is Empty");
    errors.lname = "Last Name is Empty";
  } else if (!lastNameCheck.test(data.lnames)) {
    errors.lname = "Alphabet mint 3 max 15";
  } else {
    errors.lname = "";
    console.log("last Name is not Empty");
  }

  //Email is empty logic
  if (data.email == "") {
    console.log("Email is Empty");
    errors.email = "Email is Empty";
  } else if (!emailCheck.test(data.email)) {
    errors.email = "Invalid Email ! @gmail.com";
  } else {
    errors.email = "";
    console.log("Email is not Empty");
  }
  //Phone is empty logic
  if (data.phone == "") {
    console.log("Phone is Empty");
    errors.phone = "Phone is Empty";
  } else if (!phoneCheck.test(data.phone)) {
    errors.phone = "Invalid Phone Number";
  } else {
    errors.phone = "";
    console.log("Phone is not Empty");
  }

  //Age ::: Date of Birth
  if (!data.date || !data.month || !data.year) {
    console.log("All age is empty");
    errors.date = "Date is Empty";
    errors.month = "Month is Empty";
    errors.year = "Year is Empty";
  }

  if (data.date) {
    errors.date = "";
  }
  if (data.month) {
    errors.month = "";
  }
  if (data.year) {
    errors.year = "";
  }

  if (
    (data.month == "January" && data.date <= 31) ||
    (data.month == "March" && data.date <= 31) ||
    (data.month == "May" && data.date <= 31) ||
    (data.month == "July" && data.date <= 31) ||
    (data.month == "August" && data.date <= 31) ||
    (data.month == "October" && data.date <= 31) ||
    (data.month == "December" && data.date <= 31)
  ) {
    console.log("yes month is 31");
    errors.month = "";
  } else if (
    (data.month == "February" && data.date < 30) ||
    (data.month == "April" && data.date < 31) ||
    (data.month == "June" && data.date < 31) ||
    (data.month == "September" && data.date < 31) ||
    (data.month == "November" && data.date < 31)
  ) {
    console.log("yes 30");
    errors.month = "";
  } else {
    console.log("yes month is not 31");
  }

  if (
    (data.month == "February" && 0 == data.year % 4 && 0 != data.year % 100) ||
    (0 == data.year % 400 && data.date == 29)
  ) {
    console.log("i am 29");
  } else if (data.month === "February" && data.date == 28) {
    console.log("yes i am 28");
  } else if (data.month === "February" && data.date > 28) {
    console.log("i am gartr 28");
    errors.month =
      "28 or 29 days in February,this date is not Available in this  year";
    errors.year = "This Month is not Available in this Year ";
  }

  //password is empty logic
  if (data.password == "") {
    console.log("Password is Empty");
    errors.password = "Password is Empty";
  } else if (!passwordCheck.test(data.password)) {
    errors.password = "Invalid Password min 8 ,max 15 ";
  } else {
    errors.password = "";
    console.log("Password is not Empty");
  }

  //conform Password is empty logic
  if (data.conformPassword == "") {
    console.log("conform Password is Empty");
    errors.conformPassword = "Conform Password is Empty";
  } else if (!conformPasswordCheck.test(data.conformPassword)) {
    errors.conformPassword = "Invalid Conform Password min 8 ,max 15 ";
  }

  //Password and Conform Password is match ::: Logic
  if (data.password && data.conformPassword) {
    if (data.password === data.conformPassword) {
      errors.conformPassword = "";
      errors.password = "";
      console.log("match password");
    } else {
      errors.conformPassword = "Not Match";
      errors.password = "Not Match";
      console.log("Conform Password is not Empty");
    }
  }

  return errors;
};
