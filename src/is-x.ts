
import {StatusCodes} from "./status-codes";


export function is_informational(code:StatusCodes) {
    return 100 <= code && code <= 199;
}

export function is_success(code:StatusCodes) {
    return 200 <= code && code <= 299;
}

export function is_redirect(code:StatusCodes) {
    return 300 <= code && code <= 399;
}

export function is_client_error(code:StatusCodes) {
    return 400 <= code && code <= 499;
}

export function is_server_error(code:StatusCodes) {
    return 500 <= code && code <= 599;
}

