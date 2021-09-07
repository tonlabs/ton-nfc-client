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
            checkAvailableVolForNewKey: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu1\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Nfc connection establishing error.\", \"code\": \"220000\", \"status\":\"fail\", \"errorTypeId\": \"22\", \"errorType\": \"Android code fail: NFC error\"}"
                ));
              })),

            checkAvailableVolForNewKeyWithoutDialog: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu1\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"CHECK_AVAILABLE_VOL_FOR_NEW_KEY\", \"apdu\":\"B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 \"}"
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
  checkAvailableVolForNewKey
  */

  test('Test checkAvailableVolForNewKey throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toContain("Unexpected token");
    });  
  });

 test('Test checkAvailableVolForNewKey throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKey throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
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
        expect(error.cardInstruction).toBe('CHECK_AVAILABLE_VOL_FOR_NEW_KEY');
        expect(error.apdu).toBe('B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 ');
    });  
  });

  test('Test checkAvailableVolForNewKey throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKey(32)
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
  checkAvailableVolForNewKeyWithoutDialog
  */

  test('Test checkAvailableVolForNewKeyWithoutDialog: throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toContain("Unexpected token");
    });  
  });

 test('Test checkAvailableVolForNewKeyWithoutDialog throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
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
        expect(error.cardInstruction).toBe('CHECK_AVAILABLE_VOL_FOR_NEW_KEY');
        expect(error.apdu).toBe('B0 B3 00 00 42 00087A23727276A3507F343AA82909F2D83AF05489728FABCBB9196E11C3B51B9899DB24F2972A4D0058804EC6D6FE0C4DAAC4B15D0347BDE9EB91A84621F62C3E62 00 ');
    });  
  });

  test('Test checkAvailableVolForNewKeyWithoutDialog throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().checkAvailableVolForNewKeyWithoutDialog(32)
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








  
  

  
  
 
  

  
  
  
