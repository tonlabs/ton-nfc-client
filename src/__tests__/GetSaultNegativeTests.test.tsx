import NfcCardModuleWrapper from '../NfcCardModuleWrapper';
import CardResponse from '../CardResponse';
import CardError from '../CardError';
import NfcNativeModuleError from '../NfcNativeModuleError';
import React from 'react';
import { NativeModules} from 'react-native'

jest.mock('react-native', () => {
    return {
      NativeModules: {
        NfcCardModule: {
            getSault: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("aaa"));
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
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"GET_SAULT\", \"apdu\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"GET_SAULT\", \"apdu1\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"GET_SAULT\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"GET_SAULT\", \"apdu\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Pin must be a numeric string of length 4.\", \"code\": \"30006\", \"status\":\"fail\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
                ));
              })),

            getSaultWithoutDialog: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("aaa"));
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
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"GET_SAULT\", \"apdu\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"GET_SAULT\", \"apdu1\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"GET_SAULT\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"GET_SAULT\", \"apdu\":\"B0 A2 00 00 44\"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Pin must be a numeric string of length 4.\", \"code\": \"30006\", \"status\":\"fail\", \"errorTypeId\": \"3\", \"errorType\": \"Native code fail: incorrect format of input data\"}"
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
  getSault
  */

  test('Test getSault throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toContain("Unexpected token");
    });  
  });

 test('Test getSault throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test getSault throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test getSault throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test getSault throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test getSault throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test getSault throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test getSault throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test getSault throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test getSault throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test getSault throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test getSault throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test getSault throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test getSault throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test getSault throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test getSault throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Command aborted, No precise diagnosis.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('6F00');
        expect(error.errorTypeId).toBe('0');
        expect(error.errorType).toBe('Applet fail: card operation error');
        expect(error.cardInstruction).toBe('GET_SAULT');
        expect(error.apdu).toBe('B0 A2 00 00 44');
    });  
  });

  test('Test getSault throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().getSault()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Pin must be a numeric string of length 4.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('30006');
        expect(error.errorTypeId).toBe('3');
        expect(error.errorType).toBe('Native code fail: incorrect format of input data');
    });  
  });


  /*
  getSaultWithoutDialog
  */

  test('Test getSaultWithoutDialog: throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toContain("Unexpected token");
    });  
  });

 test('Test getSaultWithoutDialog throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test getSaultWithoutDialog throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Command aborted, No precise diagnosis.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('6F00');
        expect(error.errorTypeId).toBe('0');
        expect(error.errorType).toBe('Applet fail: card operation error');
        expect(error.cardInstruction).toBe('GET_SAULT');
        expect(error.apdu).toBe('B0 A2 00 00 44');
    });  
  });

  test('Test getSaultWithoutDialog throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().getSaultWithoutDialog()
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Pin must be a numeric string of length 4.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('30006');
        expect(error.errorTypeId).toBe('3');
        expect(error.errorType).toBe('Native code fail: incorrect format of input data');
    });  
  });