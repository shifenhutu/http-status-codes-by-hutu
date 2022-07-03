import {is_success,is_redirect, StatusCodes} from "http-status-codes-by-hutu";


console.log(StatusCodes.HTTP_200_OK) // 200

console.log(is_success(StatusCodes.HTTP_200_OK)) // true

console.log(is_success(200)) // true

console.log(is_redirect(301)) // true


