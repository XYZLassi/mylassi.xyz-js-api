# MyLassiXyz.LessonsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2LessonsDocIdGet**](LessonsApi.md#apiV2LessonsDocIdGet) | **GET** /api/v2/lessons/{doc_id} | 
[**apiV2LessonsDocIdMultiplexTokenGet**](LessonsApi.md#apiV2LessonsDocIdMultiplexTokenGet) | **GET** /api/v2/lessons/{doc_id}/multiplexToken | 
[**apiV2LessonsDocIdPageIdDelete**](LessonsApi.md#apiV2LessonsDocIdPageIdDelete) | **DELETE** /api/v2/lessons/{doc_id}/{page_id} | 
[**apiV2LessonsDocIdPageIdPatch**](LessonsApi.md#apiV2LessonsDocIdPageIdPatch) | **PATCH** /api/v2/lessons/{doc_id}/{page_id} | 
[**apiV2LessonsDocIdPost**](LessonsApi.md#apiV2LessonsDocIdPost) | **POST** /api/v2/lessons/{doc_id} | 
[**apiV2LessonsGet**](LessonsApi.md#apiV2LessonsGet) | **GET** /api/v2/lessons | 
[**apiV2LessonsPost**](LessonsApi.md#apiV2LessonsPost) | **POST** /api/v2/lessons | 
[**apiV2LessonsPublicIdPublicGet**](LessonsApi.md#apiV2LessonsPublicIdPublicGet) | **GET** /api/v2/lessons/{public_id}/public | 



## apiV2LessonsDocIdGet

> Lesson apiV2LessonsDocIdGet(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let docId = 56; // Number | 
apiInstance.apiV2LessonsDocIdGet(docId, (error, data, response) => {
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

[**Lesson**](Lesson.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2LessonsDocIdMultiplexTokenGet

> LessonMultiplexToken apiV2LessonsDocIdMultiplexTokenGet(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let docId = 56; // Number | 
apiInstance.apiV2LessonsDocIdMultiplexTokenGet(docId, (error, data, response) => {
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

[**LessonMultiplexToken**](LessonMultiplexToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2LessonsDocIdPageIdDelete

> apiV2LessonsDocIdPageIdDelete(docId, pageId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let docId = 56; // Number | 
let pageId = 56; // Number | 
apiInstance.apiV2LessonsDocIdPageIdDelete(docId, pageId, (error, data, response) => {
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
 **pageId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2LessonsDocIdPageIdPatch

> LessonPage apiV2LessonsDocIdPageIdPatch(docId, pageId, lessonPageOption)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let docId = 56; // Number | 
let pageId = 56; // Number | 
let lessonPageOption = new MyLassiXyz.LessonPageOption(); // LessonPageOption | 
apiInstance.apiV2LessonsDocIdPageIdPatch(docId, pageId, lessonPageOption, (error, data, response) => {
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
 **pageId** | **Number**|  | 
 **lessonPageOption** | [**LessonPageOption**](LessonPageOption.md)|  | 

### Return type

[**LessonPage**](LessonPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2LessonsDocIdPost

> LessonPage apiV2LessonsDocIdPost(docId, createLessonPageOption)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let docId = 56; // Number | 
let createLessonPageOption = new MyLassiXyz.CreateLessonPageOption(); // CreateLessonPageOption | 
apiInstance.apiV2LessonsDocIdPost(docId, createLessonPageOption, (error, data, response) => {
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
 **createLessonPageOption** | [**CreateLessonPageOption**](CreateLessonPageOption.md)|  | 

### Return type

[**LessonPage**](LessonPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2LessonsGet

> LessonList apiV2LessonsGet(opts)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let opts = {
  'limit': 56, // Number | 
  'page': 56 // Number | 
};
apiInstance.apiV2LessonsGet(opts, (error, data, response) => {
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

[**LessonList**](LessonList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2LessonsPost

> Lesson apiV2LessonsPost(createLesson)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let createLesson = new MyLassiXyz.CreateLesson(); // CreateLesson | 
apiInstance.apiV2LessonsPost(createLesson, (error, data, response) => {
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
 **createLesson** | [**CreateLesson**](CreateLesson.md)|  | 

### Return type

[**Lesson**](Lesson.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2LessonsPublicIdPublicGet

> LessonPublic apiV2LessonsPublicIdPublicGet(publicId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonsApi();
let publicId = "publicId_example"; // String | 
apiInstance.apiV2LessonsPublicIdPublicGet(publicId, (error, data, response) => {
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
 **publicId** | **String**|  | 

### Return type

[**LessonPublic**](LessonPublic.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

