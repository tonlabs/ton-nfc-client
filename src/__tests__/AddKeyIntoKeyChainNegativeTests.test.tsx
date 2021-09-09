import NfcCardModuleWrapper from '../NfcCardModuleWrapper';
import CardResponse from '../CardResponse';
import CardError from '../CardError';
import NfcNativeModuleError from '../NfcNativeModuleError';
import React from 'react';
import { NativeModules} from 'react-native'

/**
 *
 */

jest.mock('react-native', () => {
    return {
      NativeModules: {
        NfcCardModule: {
            addKeyIntoKeyChain: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"ADD_KEY_CHUNK\", \"apdu\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"ADD_KEY_CHUNK\", \"apdu1\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"ADD_KEY_CHUNK\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"ADD_KEY_CHUNK\", \"apdu\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValue(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Nfc connection establishing error.\", \"code\": \"220000\", \"status\":\"fail\", \"errorTypeId\": \"22\", \"errorType\": \"Android code fail: NFC error\"}"
                ));
              })),

            addKeyIntoKeyChainWithoutDialog: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
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
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction1\":\"ADD_KEY_CHUNK\", \"apdu\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"\", \"apdu\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"ADD_KEY_CHUNK\", \"apdu1\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"ADD_KEY_CHUNK\", \"apdu\":\"\"}"
                ));
              }))
              .mockReturnValueOnce(new Promise((resolve, reject) => {
                reject(new Error("{\"message\":\"Command aborted, No precise diagnosis.\", \"code\": \"6F00\", \"status\":\"fail\", \"errorTypeId\": \"0\", \"errorType\": \"Applet fail: card operation error\", \"cardInstruction\":\"ADD_KEY_CHUNK\", \"apdu\":\"B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02\"}"
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
  addKeyIntoKeyChain
  */

  test('Test addKeyIntoKeyChain throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toContain("Unexpected token");
    });  
  });

 test('Test addKeyIntoKeyChain throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test addKeyIntoKeyChain throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
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
        expect(error.cardInstruction).toBe('ADD_KEY_CHUNK');
        expect(error.apdu).toBe('B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02');
    });  
  });

  test('Test addKeyIntoKeyChain throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChain("1111")
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
  addKeyIntoKeyChainWithoutDialog
  */

  test('Test addKeyIntoKeyChainWithoutDialog: throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toContain("Unexpected token");
    });  
  });

 test('Test addKeyIntoKeyChainWithoutDialog throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"message\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"status\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"code\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorType\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('\"errorTypeId\" must have value!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"errorTypeId\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"cardInstruction\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
    .then(cardRsponse => {
        expect(true).toBe(false);
    })
    .catch(error => {
        console.log(error.message)
        expect(error.message).toBe('Json must have \"apdu\" field!');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
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
        expect(error.cardInstruction).toBe('ADD_KEY_CHUNK');
        expect(error.apdu).toBe('B0 B4 02 00 60 3DB4D5C9BEB64FD40D8DC03C8E0E83F1D21E237803D9F755C5E139DE7C2026D6986A887CFC592D9D1535C50B1C2A26C8DBAC204E17E0685F256709EB7B90189893F7685F71EC46BAD26609975ACDE1B9C2CE0CABF89592FD3CC2CD9FCD77D0BE 02');
    });  
  });

  test('Test addKeyIntoKeyChainWithoutDialog throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().addKeyIntoKeyChainWithoutDialog("1111")
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








  
  

  
  
 
  

  
  
  

