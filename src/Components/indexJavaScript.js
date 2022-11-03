const userNameCheck = /^[A-Z-a-z. ]{3,15}$/;
const lastNameCheck = /^[A-Z-a-z. ]{3,15}$/;
const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneCheck = /^[0-9-+]{11,14}$/;
const passwordCheck = /^[1-9-a-z-A-Z-!@#$%^&*()_"<?]{8,15}$/;
const conformPasswordCheck = /^[1-9-a-z-A-Z-!@#$%^&*()_"<?]{8,15}$/;

export const validations = (data) => {
  const errors = {};

  //name is empty logic
  if (data.names == "") {
    console.log("Name is Empty");
    errors.names = "Name is Empty";
  } else if (!userNameCheck.test(data.names)) {
      errors.names = "Alphabet mint 3 max 15";
   
  } else {
    errors.names = "";
    console.log("name is not Empty");
  }
  //last name is empty logic
  if (data.lname == "") {
    console.log("Last Name is Empty");
    errors.lname = "Last Name is Empty";
  } else if (!lastNameCheck.test(data.lnames)) {
    errors.lname = "Alphabet mint 3 max 15";
  } else {
    errors.lname = "";
    console.log("last Name is not Empty");
  }

  //email is empty logic
  if (data.email == "") {
    console.log("Email is Empty");
    errors.email = "Email is Empty";
  } else if (!emailCheck.test(data.email)) {
    errors.email = "Invalid Email ! @gmail.com";
  } else {
    errors.email = "";
    console.log("Email is not Empty");
  }
  //phone is empty logic
  if (data.phone == "") {
    console.log("Phone is Empty");
    errors.phone = "Phone is Empty";
  } else if (!phoneCheck.test(data.phone)) {
    errors.phone = "Invalid Phone Number";
  } else {
    errors.phone = "";
    console.log("Phone is not Empty");
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
  } else {
    errors.conformPassword = "";
    console.log("Conform Password is not Empty");
  }

  return errors;
};
