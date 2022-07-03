# http-status
Descriptive HTTP status codes, for code readability.

See RFC 2616 - https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

And RFC 6585 - https://tools.ietf.org/html/rfc6585

And RFC 4918 - https://tools.ietf.org/html/rfc4918

# install

`npm i http-status-codes-by-hutu`

`pnpm i http-status-codes-by-hutu`

`yarn add http-status-codes-by-hutu`


# example

```tsx
import {is_success,is_redirect, StatusCodes} from "http-status-codes-by-hutu";

console.log(StatusCodes.HTTP_200_OK) // 200

console.log(is_success(StatusCodes.HTTP_200_OK)) // true

console.log(is_success(200)) // true

console.log(is_redirect(301)) // true
 

```

#todo
```tsx
status[200]  // like array ,obj attr
 
```


# thanks to:

https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py

https://juejin.cn/post/6844903892119977998


https://github.com/prettymuchbryce/http-status-codes


[//]: # (npm publish 发布)
