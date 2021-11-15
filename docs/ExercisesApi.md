# MyLassiXyz.ExercisesApi

All URIs are relative to *https://api.mylassi.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ExercisesDocIdDelete**](ExercisesApi.md#apiV2ExercisesDocIdDelete) | **DELETE** /api/v2/exercises/{doc_id} | 
[**apiV2ExercisesDocIdGet**](ExercisesApi.md#apiV2ExercisesDocIdGet) | **GET** /api/v2/exercises/{doc_id} | 
[**apiV2ExercisesDocIdPatch**](ExercisesApi.md#apiV2ExercisesDocIdPatch) | **PATCH** /api/v2/exercises/{doc_id} | 
[**apiV2ExercisesGet**](ExercisesApi.md#apiV2ExercisesGet) | **GET** /api/v2/exercises | 
[**apiV2ExercisesPost**](ExercisesApi.md#apiV2ExercisesPost) | **POST** /api/v2/exercises | 



## apiV2ExercisesDocIdDelete

> apiV2ExercisesDocIdDelete(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.ExercisesApi();
let docId = 56; // Number | 
apiInstance.apiV2ExercisesDocIdDelete(docId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **docId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ExercisesDocIdGet

> Exercise apiV2ExercisesDocIdGet(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';

let apiInstance = new MyLassiXyz.ExercisesApi();
let docId = 56; // Number | 
apiInstance.apiV2ExercisesDocIdGet(docId, (error, data, response) => {
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

[**Exercise**](Exercise.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ExercisesDocIdPatch

> Exercise apiV2ExercisesDocIdPatch(docId, editExerciseOptions)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.ExercisesApi();
let docId = 56; // Number | 
let editExerciseOptions = new MyLassiXyz.EditExerciseOptions(); // EditExerciseOptions | 
apiInstance.apiV2ExercisesDocIdPatch(docId, editExerciseOptions, (error, data, response) => {
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
 **editExerciseOptions** | [**EditExerciseOptions**](EditExerciseOptions.md)|  | 

### Return type

[**Exercise**](Exercise.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ExercisesGet

> ExerciseList apiV2ExercisesGet(opts)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';

let apiInstance = new MyLassiXyz.ExercisesApi();
let opts = {
  'limit': 56, // Number | 
  'page': 56 // Number | 
};
apiInstance.apiV2ExercisesGet(opts, (error, data, response) => {
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

[**ExerciseList**](ExerciseList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ExercisesPost

> Exercise apiV2ExercisesPost(createExerciseOptions)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.ExercisesApi();
let createExerciseOptions = new MyLassiXyz.CreateExerciseOptions(); // CreateExerciseOptions | 
apiInstance.apiV2ExercisesPost(createExerciseOptions, (error, data, response) => {
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
 **createExerciseOptions** | [**CreateExerciseOptions**](CreateExerciseOptions.md)|  | 

### Return type

[**Exercise**](Exercise.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

