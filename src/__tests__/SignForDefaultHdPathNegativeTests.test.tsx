import NfcCardModuleWrapper from '../NfcCardModuleWrapper';
import CardResponse from '../CardResponse';
import CardError from '../CardError';
import NfcNativeModuleError from '../NfcNativeModuleError';
import React from 'react';
import { NativeModules} from 'react-native'

/**
 * Tests for signForDefaultHdPath method validating different cases when it can throw errors.
 */

jest.mock('react-native', () => {
    return {
      NativeModules: {
        NfcCardModule: {
            signForDefaultHdPath: jest.fn()
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu1\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Nfc connection establishing error.\", \"code\": \"220000\", \"status\":\"fail\", \"errorTypeId\": \"22\", \"errorType\": \"Android code fail: NFC error\"}"
                ));
              })),

            signForDefaultHdPathWithoutDialog: jest.fn()
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu1\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH\", \"apdu\":\"B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40\"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Nfc connection establishing error.\", \"code\": \"220000\", \"status\":\"fail\", \"errorTypeId\": \"22\", \"errorType\": \"Android code fail: NFC error\"}"
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
  signForDefaultHdPath
  */

 test('Test signForDefaultHdPath throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test signForDefaultHdPath throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test signForDefaultHdPath throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
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
        expect(error.cardInstruction).toBe('SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH');
        expect(error.apdu).toBe('B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40');
    });  
  });

  test('Test signForDefaultHdPath throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPath("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Nfc connection establishing error.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('220000');
        expect(error.errorTypeId).toBe('22');
        expect(error.errorType).toBe('Android code fail: NFC error');
    });  
  });


  /*
  signForDefaultHdPathWithoutDialog
  */

 test('Test signForDefaultHdPathWithoutDialog throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
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
        expect(error.cardInstruction).toBe('SIGN_SHORT_MESSAGE_WITH_DEFAULT_HD_PATH');
        expect(error.apdu).toBe('B0 A5 00 00 62 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A762F6431700FBA98059E42BC1A5F14F7649F00509611E0DEF312A53FAE5458039563000C1A4F75B7C72338B69EF26033A1C831E44BA1D70AF6175D3271FA719B 40');
    });  
  });

  test('Test signForDefaultHdPathWithoutDialog throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().signForDefaultHdPathWithoutDialog("123456AF")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Nfc connection establishing error.');
        expect(error.status).toBe('fail');
        expect(error.errorCode).toBe('220000');
        expect(error.errorTypeId).toBe('22');
        expect(error.errorType).toBe('Android code fail: NFC error');
    });  
  });








  
  

  
  
 
  

  
  
  

