# http-status
Descriptive HTTP status codes, for code readability.

See RFC 2616 - https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

And RFC 6585 - https://tools.ietf.org/html/rfc6585

And RFC 4918 - https://tools.ietf.org/html/rfc4918



# example

```tsx
import {is_success, StatusCodes} from "../src";


console.log(StatusCodes.HTTP_200_OK) // 200

console.log(is_success(StatusCodes.HTTP_200_OK)) // true

console.log(is_success(200)) // true


```


# thanks to:

https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py

