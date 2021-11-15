# MyLassiXyz.PollsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2PollsDocIdGet**](PollsApi.md#apiV2PollsDocIdGet) | **GET** /api/v2/polls/{doc_id} | 
[**apiV2PollsDocIdPatch**](PollsApi.md#apiV2PollsDocIdPatch) | **PATCH** /api/v2/polls/{doc_id} | 
[**apiV2PollsDocIdSessionNameGet**](PollsApi.md#apiV2PollsDocIdSessionNameGet) | **GET** /api/v2/polls/{doc_id}/{session_name} | 
[**apiV2PollsDocIdSessionNameStartPost**](PollsApi.md#apiV2PollsDocIdSessionNameStartPost) | **POST** /api/v2/polls/{doc_id}/{session_name}/start | 
[**apiV2PollsDocIdSessionNameStopPost**](PollsApi.md#apiV2PollsDocIdSessionNameStopPost) | **POST** /api/v2/polls/{doc_id}/{session_name}/stop | 
[**apiV2PollsDocIdSessionNameVoteLabelNamePost**](PollsApi.md#apiV2PollsDocIdSessionNameVoteLabelNamePost) | **POST** /api/v2/polls/{doc_id}/{session_name}/vote/{label_name} | 
[**apiV2PollsGet**](PollsApi.md#apiV2PollsGet) | **GET** /api/v2/polls | 
[**apiV2PollsPost**](PollsApi.md#apiV2PollsPost) | **POST** /api/v2/polls | 



## apiV2PollsDocIdGet

> Poll apiV2PollsDocIdGet(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let docId = 56; // Number | 
apiInstance.apiV2PollsDocIdGet(docId, (error, data, response) => {
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
 **docId** | **Number**|  | 

### Return type

[**Poll**](Poll.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PollsDocIdPatch

> Poll apiV2PollsDocIdPatch(docId, patchPollOptions)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let docId = 56; // Number | 
let patchPollOptions = new MyLassiXyz.PatchPollOptions(); // PatchPollOptions | 
apiInstance.apiV2PollsDocIdPatch(docId, patchPollOptions, (error, data, response) => {
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
 **docId** | **Number**|  | 
 **patchPollOptions** | [**PatchPollOptions**](PatchPollOptions.md)|  | 

### Return type

[**Poll**](Poll.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2PollsDocIdSessionNameGet

> PollSession apiV2PollsDocIdSessionNameGet(docId, sessionName)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let docId = 56; // Number | 
let sessionName = "sessionName_example"; // String | 
apiInstance.apiV2PollsDocIdSessionNameGet(docId, sessionName, (error, data, response) => {
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
 **docId** | **Number**|  | 
 **sessionName** | **String**|  | 

### Return type

[**PollSession**](PollSession.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PollsDocIdSessionNameStartPost

> PollSession apiV2PollsDocIdSessionNameStartPost(docId, sessionName)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let docId = 56; // Number | 
let sessionName = "sessionName_example"; // String | 
apiInstance.apiV2PollsDocIdSessionNameStartPost(docId, sessionName, (error, data, response) => {
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
 **docId** | **Number**|  | 
 **sessionName** | **String**|  | 

### Return type

[**PollSession**](PollSession.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PollsDocIdSessionNameStopPost

> PollSession apiV2PollsDocIdSessionNameStopPost(docId, sessionName)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let docId = 56; // Number | 
let sessionName = "sessionName_example"; // String | 
apiInstance.apiV2PollsDocIdSessionNameStopPost(docId, sessionName, (error, data, response) => {
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
 **docId** | **Number**|  | 
 **sessionName** | **String**|  | 

### Return type

[**PollSession**](PollSession.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PollsDocIdSessionNameVoteLabelNamePost

> PollSession apiV2PollsDocIdSessionNameVoteLabelNamePost(docId, sessionName, labelName)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let docId = 56; // Number | 
let sessionName = "sessionName_example"; // String | 
let labelName = "labelName_example"; // String | 
apiInstance.apiV2PollsDocIdSessionNameVoteLabelNamePost(docId, sessionName, labelName, (error, data, response) => {
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
 **docId** | **Number**|  | 
 **sessionName** | **String**|  | 
 **labelName** | **String**|  | 

### Return type

[**PollSession**](PollSession.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PollsGet

> PollList apiV2PollsGet(opts)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let opts = {
  'limit': 56, // Number | 
  'page': 56 // Number | 
};
apiInstance.apiV2PollsGet(opts, (error, data, response) => {
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
 **limit** | **Number**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**PollList**](PollList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PollsPost

> Poll apiV2PollsPost(createPollOptions)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.PollsApi();
let createPollOptions = new MyLassiXyz.CreatePollOptions(); // CreatePollOptions | 
apiInstance.apiV2PollsPost(createPollOptions, (error, data, response) => {
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
 **createPollOptions** | [**CreatePollOptions**](CreatePollOptions.md)|  | 

### Return type

[**Poll**](Poll.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

