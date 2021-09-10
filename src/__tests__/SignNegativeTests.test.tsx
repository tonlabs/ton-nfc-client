import NfcCardModuleWrapper from '../NfcCardModuleWrapper';
import CardResponse from '../CardResponse';
import CardError from '../CardError';
import NfcNativeModuleError from '../NfcNativeModuleError';
import React from 'react';
import { NativeModules} from 'react-native'

/**
 * Tests for sign method validating different cases when it can throw errors.
 */

jest.mock('react-native', () => {
    return {
      NativeModules: {
        NfcCardModule: {
            sign: jest.fn()
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"SIGN_SHORT_MESSAGE\", \"apdu\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE\", \"apdu1\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE\", \"apdu\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Nfc connection establishing error.\", \"code\": \"220000\", \"status\":\"fail\", \"errorTypeId\": \"22\", \"errorType\": \"Android code fail: NFC error\"}"
                ));
              })),

            signWithoutDialog: jest.fn()
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"SIGN_SHORT_MESSAGE\", \"apdu\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE\", \"apdu1\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"SIGN_SHORT_MESSAGE\", \"apdu\":\"B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 \"}"
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
  sign
  */

 test('Test sign throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test sign throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test sign throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test sign throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test sign throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test sign throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test sign throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test sign throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test sign throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test sign throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test sign throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test sign throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test sign throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test sign throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test sign throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
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
        expect(error.cardInstruction).toBe('SIGN_SHORT_MESSAGE');
        expect(error.apdu).toBe('B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 ');
    });  
  });

  test('Test sign throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().sign("123456AF", "2")
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
  signWithoutDialog
  */


 test('Test signWithoutDialog throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test signWithoutDialog throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test signWithoutDialog throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test signWithoutDialog throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
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
        expect(error.cardInstruction).toBe('SIGN_SHORT_MESSAGE');
        expect(error.apdu).toBe('B0 A3 00 00 64 0020C66E9ACB1F645B4DDC330957353213207B084DF62127ABC9278B9FED6598BA8A0130E89F6713652A275A667DC0E27CEA32908649C0B5C422C6BB6FF61F12DB37FF401495A0328684BCF817C438782EB1C80B56C7A77C8FEA97D44677EA36E8EF99A5 40 ');
    });  
  });

  test('Test signWithoutDialog throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().signWithoutDialog("123456AF", "2")
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








  
  

  
  
 
  

  
  
  

