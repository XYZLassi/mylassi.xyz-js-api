# MyLassiXyz.ImagesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ImagesDocIdGet**](ImagesApi.md#apiV2ImagesDocIdGet) | **GET** /api/v2/images/{doc_id} | 
[**apiV2ImagesGet**](ImagesApi.md#apiV2ImagesGet) | **GET** /api/v2/images | 



## apiV2ImagesDocIdGet

> Image apiV2ImagesDocIdGet(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.ImagesApi();
let docId = "docId_example"; // String | 
apiInstance.apiV2ImagesDocIdGet(docId, (error, data, response) => {
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
 **docId** | **String**|  | 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ImagesGet

> ImageList apiV2ImagesGet()



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.ImagesApi();
apiInstance.apiV2ImagesGet((error, data, response) => {
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

[**ImageList**](ImageList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

