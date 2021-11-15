# MyLassiXyz.FilesApi

All URIs are relative to *https://api.mylassi.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2FilesUploadPost**](FilesApi.md#apiV2FilesUploadPost) | **POST** /api/v2/files/upload | 



## apiV2FilesUploadPost

> File apiV2FilesUploadPost()



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.FilesApi();
apiInstance.apiV2FilesUploadPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

