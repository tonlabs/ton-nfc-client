import NfcCardModuleWrapper from '../NfcCardModuleWrapper'
import CardResponse from '../CardResponse'
import CardError from '../CardError'
import NfcNativeModuleError from '../NfcNativeModuleError'
import React from 'react'
import { NativeModules } from 'react-native'

jest.mock('react-native', () => {
    return {
        NativeModules: {
            NfcCardModule: {
                getKeyChainInfo: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
                    reject(new Error('aaa'))
                }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"", "status":"fail", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message1":"22223", "status":"fail", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "status":"", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "status1":"fail", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "", "status":"fail", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code1": "30006", "status":"fail", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId": "3", "errorType": ""}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId": "3", "errorType1": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId": "", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId1": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction1":"GET_NUMBER_OF_KEYS", "apdu":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"", "apdu":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"GET_NUMBER_OF_KEYS", "apdu1":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"GET_NUMBER_OF_KEYS", "apdu":""}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"GET_NUMBER_OF_KEYS", "apdu":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        resolve(new Error('{"numberOfKeys1":1,"occupiedSize":1,"freeSize":32767,"status":"ok"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        resolve(new Error('{"numberOfKeys":1,"occupiedSize2":1,"freeSize":32767,"status":"ok"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        resolve(new Error('{"numberOfKeys":1,"occupiedSize":1,"freeSize3":32767,"status":"ok"}',
                        ))
                    }))
                    .mockReturnValue(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Nfc connection establishing error.", "code": "220000", "status":"fail", "errorTypeId": "22", "errorType": "Android code fail: NFC error"}',
                        ))
                    })),

                //

                getKeyChainInfoWithoutDialog: jest.fn().mockReturnValueOnce(new Promise((resolve, reject) => {
                    reject(new Error('aaa'))
                }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"", "status":"fail", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message1":"22223", "status":"fail", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "status":"", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "status1":"fail", "code": "30006", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "", "status":"fail", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code1": "30006", "status":"fail", "errorTypeId": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId": "3", "errorType": ""}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId": "3", "errorType1": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId": "", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"22223", "code": "30006", "status":"fail", "errorTypeId1": "3", "errorType": "Native code fail: incorrect format of input data"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction1":"GET_NUMBER_OF_KEYS", "apdu":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"", "apdu":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"GET_NUMBER_OF_KEYS", "apdu1":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"GET_NUMBER_OF_KEYS", "apdu":""}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Command aborted, No precise diagnosis.", "code": "6F00", "status":"fail", "errorTypeId": "0", "errorType": "Applet fail: card operation error", "cardInstruction":"GET_NUMBER_OF_KEYS", "apdu":"B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        resolve(new Error('{"numberOfKeys1":1,"occupiedSize":1,"freeSize":32767,"status":"ok"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        resolve(new Error('{"numberOfKeys":1,"occupiedSize2":1,"freeSize":32767,"status":"ok"}',
                        ))
                    }))
                    .mockReturnValueOnce(new Promise((resolve, reject) => {
                        resolve(new Error('{"numberOfKeys":1,"occupiedSize":1,"freeSize3":32767,"status":"ok"}',
                        ))
                    }))
                    .mockReturnValue(new Promise((resolve, reject) => {
                        reject(new Error('{"message":"Nfc connection establishing error.", "code": "220000", "status":"fail", "errorTypeId": "22", "errorType": "Android code fail: NFC error"}',
                        ))
                    })),

            },
        },
        Platform: {
            OS: 'android',
        },
    }
})

/*
getKeyChainInfo
*/

test('Test getKeyChainInfo throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toContain('Unexpected token')
        })
})

test('Test getKeyChainInfo throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"message\" field!')
        })
})

test('Test getKeyChainInfo throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"message\" field!')
        })
})

test('Test getKeyChainInfo throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"status\" field!')
        })
})

test('Test getKeyChainInfo throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"status\" field!')
        })
})

test('Test getKeyChainInfo throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"code\" field!')
        })
})

test('Test getKeyChainInfo throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"code\" field!')
        })
})

test('Test getKeyChainInfo throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"errorType\" field!')
        })
})

test('Test getKeyChainInfo throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"errorType\" field!')
        })
})

test('Test getKeyChainInfo throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('\"errorTypeId\" must have value!')
        })
})

test('Test getKeyChainInfo throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"errorTypeId\" field!')
        })
})

test('Test getKeyChainInfo throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"cardInstruction\" field!')
        })
})

test('Test getKeyChainInfo throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"cardInstruction\" field!')
        })
})

test('Test getKeyChainInfo throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"apdu\" field!')
        })
})

test('Test getKeyChainInfo throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"apdu\" field!')
        })
})

test('Test getKeyChainInfo throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Command aborted, No precise diagnosis.')
            expect(error.status).toBe('fail')
            expect(error.errorCode).toBe('6F00')
            expect(error.errorTypeId).toBe('0')
            expect(error.errorType).toBe('Applet fail: card operation error')
            expect(error.cardInstruction).toBe('GET_NUMBER_OF_KEYS')
            expect(error.apdu).toBe('B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02')
        })
})

test('Test getKeyChainInfo throws error if numberOfKeys field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"occupiedSize\", \"freeSize\" and \"numberOfKeys\" fields!')
        })
})

test('Test getKeyChainInfo throws error if occupiedSize field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"occupiedSize\", \"freeSize\" and \"numberOfKeys\" fields!')
        })
})

test('Test getKeyChainInfo throws error if freeSize field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"occupiedSize\", \"freeSize\" and \"numberOfKeys\" fields!')
        })
})

test('Test getKeyChainInfo throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().getKeyChainInfo()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Nfc connection establishing error.')
            expect(error.status).toBe('fail')
            expect(error.errorCode).toBe('220000')
            expect(error.errorTypeId).toBe('22')
            expect(error.errorType).toBe('Android code fail: NFC error')
        })
})


/*
getKeyChainInfoWithoutDialog
*/

test('Test getKeyChainInfoWithoutDialog: throws error if input arg is not json', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toContain('Unexpected token')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if message field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"message\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if message field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"message\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if status field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"status\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if status field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"status\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if code field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"code\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if code field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"code\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if errorType field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"errorType\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if errorType field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"errorType\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if errorTypeId field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('\"errorTypeId\" must have value!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if errorTypeId field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"errorTypeId\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if cardInstruction field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"cardInstruction\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if cardInstruction field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"cardInstruction\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if apdu field is empty', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"apdu\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if apdu field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"apdu\" field!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws CardError if errorTypeId =  0', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Command aborted, No precise diagnosis.')
            expect(error.status).toBe('fail')
            expect(error.errorCode).toBe('6F00')
            expect(error.errorTypeId).toBe('0')
            expect(error.errorType).toBe('Applet fail: card operation error')
            expect(error.cardInstruction).toBe('GET_NUMBER_OF_KEYS')
            expect(error.apdu).toBe('B0 B8 00 00 40 9D7D35526332B85A16C99F21A2111B2CF25BAA1882615EAC07F4B575268C852C3CF637B20E1FAA47BF8E282ADE3E1D30D33112863DFFF2304CB4351F05BCB9E1 02')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if numberOfKeys field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"occupiedSize\", \"freeSize\" and \"numberOfKeys\" fields!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if occupiedSize field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"occupiedSize\", \"freeSize\" and \"numberOfKeys\" fields!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws error if freeSize field is absent', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Json must have \"occupiedSize\", \"freeSize\" and \"numberOfKeys\" fields!')
        })
})

test('Test getKeyChainInfoWithoutDialog throws NfcNativeModuleError if errorTypeId >  0', () => {
    return new NfcCardModuleWrapper().getKeyChainInfoWithoutDialog()
        .then(cardRsponse => {
            expect(true).toBe(false)
        })
        .catch(error => {
            console.log(error.message)
            expect(error.message).toBe('Nfc connection establishing error.')
            expect(error.status).toBe('fail')
            expect(error.errorCode).toBe('220000')
            expect(error.errorTypeId).toBe('22')
            expect(error.errorType).toBe('Android code fail: NFC error')
        })
})








  
  

  
  
 
  

  
  
  

