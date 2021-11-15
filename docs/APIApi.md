# MyLassiXyz.APIApi

All URIs are relative to *https://api.mylassi.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2LoginPost**](APIApi.md#apiV2LoginPost) | **POST** /api/v2/login | 



## apiV2LoginPost

> LoginResponseBody apiV2LoginPost(loginRequestBody)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';

let apiInstance = new MyLassiXyz.APIApi();
let loginRequestBody = new MyLassiXyz.LoginRequestBody(); // LoginRequestBody | 
apiInstance.apiV2LoginPost(loginRequestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequestBody** | [**LoginRequestBody**](LoginRequestBody.md)|  | 

### Return type

[**LoginResponseBody**](LoginResponseBody.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

