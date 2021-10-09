import NfcCardModuleWrapper from '../NfcCardModuleWrapper';
import NfcNativeModuleError from '../NfcNativeModuleError';
import {ERR_JSON_MUST_HAVE_MSG_FIELD, 
  ERR_JSON_MUST_HAVE_STATUS_FIELD, 
  ERR_JSON_MUST_HAVE_CODE_FIELD, 
  ERR_JSON_MUST_HAVE_TYPE_FIELD, 
  ERR_JSON_MUST_HAVE_TYPE_ID_FIELD,
  ERR_JSON_TYPE_ID_FIELD_MUST_HAVE_VAL} from '../NfcCardModuleWrapper'

/**
 * Test checkIfNfcSupported method behaviour if the function with the same title in NativeModule throwed a error. 
 * We mock different incorrect error messages from NativeModule and also a correct error message, and check the behaviour.
 */
jest.mock('react-native', () => {
    return {
      NativeModules: {
        NfcCardModule: {
            checkIfNfcSupported: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("aaa"));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                resolve("{\"message\":\"\", \"status\":\"ok\"}"
                )
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                resolve("{\"message1\":\"111\", \"status\":\"ok\"}"
                )
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"\", \"status\":\"fail\", \"code\": \"30006\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
             .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message1\":\"22223\", \"status\":\"fail\", \"code\": \"30006\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                resolve("{\"message\":\"111\", \"status\":\"\"}"
                )
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                resolve("{\"message\":\"111\", \"status1\":\"ok\"}"
                )
              }))
             .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"status\":\"\", \"code\": \"30006\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"status1\":\"fail\", \"code\": \"30006\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"code\": \"\", \"status\":\"fail\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"code1\": \"30006\", \"status\":\"fail\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"code\": \"30006\", \"status\":\"fail\", \"errorTypeId\": \"3\", \"errorType\": \"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"code\": \"30006\", \"status\":\"fail\", \"errorTypeId\": \"3\", \"errorType1\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"code\": \"30006\", \"status\":\"fail\", \"errorTypeId\": \"\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"22223\", \"code\": \"30006\", \"status\":\"fail\", \"errorTypeId1\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"String is null.\", \"code\": \"90030\", \"status\":\"fail\", \"errorTypeId\": \"9\", \"errorType\": \"Android code fail: internal error\"}"
                ));
              })),
        
        }   
      },
      Platform: {
        OS: "android"
      }
    };
  });

  /*
  checkIfNfcSupported
  */

  test('Test checkIfNfcSupported throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe("aaa");
    });  
  });

  test('Test checkIfNfcSupported throws error if message field (in response) is empty',  () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_MSG_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if message field (in response) is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_MSG_FIELD);
    });  
  });

 test('Test checkIfNfcSupported throws error if message field (in error msg) is empty',  () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_MSG_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if message field (in error msg) is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_MSG_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if status field (in response) is empty', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_STATUS_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if status field (in response) is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_STATUS_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if status field (in error msg) is empty', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_STATUS_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if status field (in error msg) is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_STATUS_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_CODE_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_CODE_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_TYPE_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_TYPE_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_TYPE_ID_FIELD_MUST_HAVE_VAL);
    });  
  });

  test('Test checkIfNfcSupported throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe(ERR_JSON_MUST_HAVE_TYPE_ID_FIELD);
    });  
  });

  test('Test checkIfNfcSupported throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().checkIfNfcSupported()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('String is null.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('90030');
        expect(error.errorTypeId).toBe('9');
        expect(error.errorType).toBe('Android code fail: internal error');
        expect(error instanceof NfcNativeModuleError).toBe(true);
    });  
  });









  
  

  
  
 
  

  
  
  

