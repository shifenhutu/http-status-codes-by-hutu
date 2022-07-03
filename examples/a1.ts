import {is_success, StatusCodes} from "../src";


console.log(StatusCodes.HTTP_200_OK) // 200

console.log(is_success(StatusCodes.HTTP_200_OK)) // true

console.log(is_success(200)) // true


