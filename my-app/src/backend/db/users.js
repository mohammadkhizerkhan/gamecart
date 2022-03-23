import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "test",
    lastName: "gamecart",
    email: "testGameCart@gmail.com",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];


// {
//   "email": "testGameCart@gmail.com",
//      "password": "test123"
//   }


// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "email": "johndoe@gmail.com",
//   "password":"1234"
//   }

// key:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5MTBkZGIxNi01MDk5LTQ0NGItODkwYS1hYzlmY2ZiY2M2NDEiLCJlbWFpbCI6InRlc3RHYW1lQ2FydEBnbWFpbC5jb20ifQ.mLKPXJxTuiqRq7x3x073fSBYGH762NLQbHgg4rQXIZE

// {"title": "NBA-2K22",
//     "img":"nba2k22",
//     "price": "5000",
//     "original_price":"6500",
//     "isPopular":"true",
//     "rating":"4.7"
// }