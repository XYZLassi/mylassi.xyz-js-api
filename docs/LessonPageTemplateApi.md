# MyLassiXyz.LessonPageTemplateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2LessonsPageTemplatesDocIdGet**](LessonPageTemplateApi.md#apiV2LessonsPageTemplatesDocIdGet) | **GET** /api/v2/lessons/pageTemplates/{doc_id} | 
[**apiV2LessonsPageTemplatesDocIdPatch**](LessonPageTemplateApi.md#apiV2LessonsPageTemplatesDocIdPatch) | **PATCH** /api/v2/lessons/pageTemplates/{doc_id} | 
[**apiV2LessonsPageTemplatesGet**](LessonPageTemplateApi.md#apiV2LessonsPageTemplatesGet) | **GET** /api/v2/lessons/pageTemplates | 
[**apiV2LessonsPageTemplatesPost**](LessonPageTemplateApi.md#apiV2LessonsPageTemplatesPost) | **POST** /api/v2/lessons/pageTemplates | 



## apiV2LessonsPageTemplatesDocIdGet

> LessonPageTemplate apiV2LessonsPageTemplatesDocIdGet(docId)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonPageTemplateApi();
let docId = 56; // Number | 
apiInstance.apiV2LessonsPageTemplatesDocIdGet(docId, (error, data, response) => {
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

[**LessonPageTemplate**](LessonPageTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2LessonsPageTemplatesDocIdPatch

> LessonPageTemplate apiV2LessonsPageTemplatesDocIdPatch(docId, lessonPageTemplateOption)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonPageTemplateApi();
let docId = 56; // Number | 
let lessonPageTemplateOption = new MyLassiXyz.LessonPageTemplateOption(); // LessonPageTemplateOption | 
apiInstance.apiV2LessonsPageTemplatesDocIdPatch(docId, lessonPageTemplateOption, (error, data, response) => {
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
 **lessonPageTemplateOption** | [**LessonPageTemplateOption**](LessonPageTemplateOption.md)|  | 

### Return type

[**LessonPageTemplate**](LessonPageTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2LessonsPageTemplatesGet

> LessonPageTemplateList apiV2LessonsPageTemplatesGet(opts)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonPageTemplateApi();
let opts = {
  'limit': 56, // Number | 
  'page': 56 // Number | 
};
apiInstance.apiV2LessonsPageTemplatesGet(opts, (error, data, response) => {
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

[**LessonPageTemplateList**](LessonPageTemplateList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2LessonsPageTemplatesPost

> LessonPageTemplate apiV2LessonsPageTemplatesPost(createLessonPageTemplate)



### Example

```javascript
import MyLassiXyz from 'my_lassi_xyz';
let defaultClient = MyLassiXyz.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MyLassiXyz.LessonPageTemplateApi();
let createLessonPageTemplate = new MyLassiXyz.CreateLessonPageTemplate(); // CreateLessonPageTemplate | 
apiInstance.apiV2LessonsPageTemplatesPost(createLessonPageTemplate, (error, data, response) => {
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
 **createLessonPageTemplate** | [**CreateLessonPageTemplate**](CreateLessonPageTemplate.md)|  | 

### Return type

[**LessonPageTemplate**](LessonPageTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

