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
          resetKeyChain: jest.fn( () => {
            return new Promise((resolve, reject) => {
              resolve("{\"message\":\"done\", \"status\":\"ok\"}");
            })
          }),
          resetKeyChainWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"done\", \"status\":\"ok\"}");
                })
          }), 

          getOccupiedStorageSize: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"20\", \"status\":\"ok\"}");
              })
          }),
          getOccupiedStorageSizeWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"20\", \"status\":\"ok\"}");
                })
          }), 

          getFreeStorageSize: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"20\", \"status\":\"ok\"}");
              })
          }),
          getFreeStorageSizeWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"20\", \"status\":\"ok\"}");
                })
          }), 

          getKeyFromKeyChain: jest.fn( (keyHmac: string) => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"1111\", \"status\":\"ok\"}");
              })
          }),
          getKeyFromKeyChainWithoutDialog: jest.fn( (keyHmac: string) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"1111\", \"status\":\"ok\"}");
                })
          }), 

          getKeyChainInfo: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"numberOfKeys\":1,\"occupiedSize\":1,\"freeSize\":32767,\"status\":\"ok\"}");
              })
          }),
          getKeyChainInfoWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"numberOfKeys\":1,\"occupiedSize\":1,\"freeSize\":32767,\"status\":\"ok\"}");
                })
          }), 

          getNumberOfKeys: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"20\", \"status\":\"ok\"}");
              })
          }),
          getNumberOfKeysWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"20\", \"status\":\"ok\"}");
                })
          }),

          addKeyIntoKeyChain: jest.fn( (newKey: string) => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"D31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C\", \"status\":\"ok\"}");
              })
          }),
          addKeyIntoKeyChainWithoutDialog: jest.fn( (newKey: string) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"D31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C\", \"status\":\"ok\"}");
                })
          }),
          
          deleteKeyFromKeyChain: jest.fn( (keyHmac: string) => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"done\", \"status\":\"ok\"}");
              })
          }),
          deleteKeyFromKeyChainWithoutDialog: jest.fn( (keyHmac: string) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"done\", \"status\":\"ok\"}");
                })
          }), 

          finishDeleteKeyFromKeyChainAfterInterruption: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"done\", \"status\":\"ok\"}");
              })
          }),
          finishDeleteKeyFromKeyChainAfterInterruptionWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"done\", \"status\":\"ok\"}");
                })
          }), 

          changeKeyInKeyChain: jest.fn( (newKey: string,
              oldKeyHmac: string) => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"A31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C\", \"status\":\"ok\"}");
              })
          }),
          changeKeyInKeyChainWithoutDialog: jest.fn( (newKey: string,
              oldKeyHmac: string) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"A31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C\", \"status\":\"ok\"}");
                })
          }),

          checkAvailableVolForNewKey: jest.fn( (keySize: number) => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"done\", \"status\":\"ok\"}");
              })
          }),
          checkAvailableVolForNewKeyWithoutDialog: jest.fn( (keySize: number) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"done\", \"status\":\"ok\"}");
                })
          }),

          checkKeyHmacConsistency: jest.fn( (keyHmac: string) => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"done\", \"status\":\"ok\"}");
              })
          }),
          checkKeyHmacConsistencyWithoutDialog: jest.fn( (keyHmac: string) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"done\", \"status\":\"ok\"}");
                })
          }), 

          getHmac: jest.fn( (index: string) => {
              return new Promise((resolve, reject) => {
                resolve("{\"hmac\":\"EFBF24AC1563B34ADB0FFE0B0A53659E72E26765704C109C95346EEAA1D4BEAF\",\"length\":32,\"status\":\"ok\"}");
              })
          }),
          getHmacWithoutDialog: jest.fn( (index: string) => {
                return new Promise((resolve, reject) => {
                  resolve("{\"hmac\":\"EFBF24AC1563B34ADB0FFE0B0A53659E72E26765704C109C95346EEAA1D4BEAF\",\"length\":32,\"status\":\"ok\"}");
                })
          }), 

          getDeleteKeyRecordNumOfPackets: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"2\", \"status\":\"ok\"}");
              })
          }),
          getDeleteKeyRecordNumOfPacketsWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"2\", \"status\":\"ok\"}");
                })
          }), 

          getDeleteKeyChunkNumOfPackets: jest.fn( () => {
              return new Promise((resolve, reject) => {
                resolve("{\"message\":\"2\", \"status\":\"ok\"}");
              })
          }),
          getDeleteKeyChunkNumOfPacketsWithoutDialog: jest.fn( () => {
                return new Promise((resolve, reject) => {
                  resolve("{\"message\":\"2\", \"status\":\"ok\"}");
                })
          }), 
        } 
      },
      Platform: {
        OS: "android"
      }
    };
  });

  //Todo: skipped getIndexAndLenOfKeyInKeyChain and getKeyChainDataAboutAllKeys for now

  /**
   * getDeleteKeyChunkNumOfPackets
   */

   test('Positive test getDeleteKeyChunkNumOfPacketsWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getDeleteKeyChunkNumOfPacketsWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("2");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getDeleteKeyChunkNumOfPackets', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getDeleteKeyChunkNumOfPackets().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("2");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * getDeleteKeyRecordNumOfPackets
   */

   test('Positive test getDeleteKeyRecordNumOfPacketsWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getDeleteKeyRecordNumOfPacketsWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("2");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getDeleteKeyRecordNumOfPackets', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getDeleteKeyRecordNumOfPackets().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("2");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * getHmac
   */

   test('Positive test getHmacWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getHmacWithoutDialog("1").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("EFBF24AC1563B34ADB0FFE0B0A53659E72E26765704C109C95346EEAA1D4BEAF");
      expect(cardRsponse.length).toBe(32);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getHmac', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getHmac("1").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("EFBF24AC1563B34ADB0FFE0B0A53659E72E26765704C109C95346EEAA1D4BEAF");
      expect(cardRsponse.length).toBe(32);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * checkKeyHmacConsistency
   */

   test('Positive test checkKeyHmacConsistencyWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.checkKeyHmacConsistencyWithoutDialog("A31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test checkKeyHmacConsistency', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.checkKeyHmacConsistency("A31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

   /**
   * checkAvailableVolForNewKey
   */

    test('Positive test checkAvailableVolForNewKeyWithoutDialog', () => {
        let nfcCardModuleWrapper = new NfcCardModuleWrapper();
        return nfcCardModuleWrapper.checkAvailableVolForNewKeyWithoutDialog(100).then(cardRsponse => {
          console.log(cardRsponse.message);
          expect(cardRsponse.message).toBe("done");
          expect(cardRsponse.status).toBe("ok");
          expect(cardRsponse.ecsHash).toBe("");
          expect(cardRsponse.epHash).toBe("");
          expect(cardRsponse.freeSize).toBe(-1);
          expect(cardRsponse.hmac).toBe("");
          expect(cardRsponse.length).toBe(-1);
          expect(cardRsponse.numberOfKeys).toBe(-1);
          expect(cardRsponse.occupiedSize).toBe(-1);
          expect(cardRsponse.sn).toBe("");
          expect(cardRsponse.serialNumbers.length).toBe(0);
        })
        .catch(error => {
          console.log(error.message);
          expect(true).toBe(false);
        }); 
      });
    
      test('Positive test checkAvailableVolForNewKey', () => {
        let nfcCardModuleWrapper = new NfcCardModuleWrapper();
        return nfcCardModuleWrapper.checkAvailableVolForNewKey(100).then(cardRsponse => {
          console.log(cardRsponse.message);
          expect(cardRsponse.message).toBe("done");
          expect(cardRsponse.status).toBe("ok");
          expect(cardRsponse.ecsHash).toBe("");
          expect(cardRsponse.epHash).toBe("");
          expect(cardRsponse.freeSize).toBe(-1);
          expect(cardRsponse.hmac).toBe("");
          expect(cardRsponse.length).toBe(-1);
          expect(cardRsponse.numberOfKeys).toBe(-1);
          expect(cardRsponse.occupiedSize).toBe(-1);
          expect(cardRsponse.sn).toBe("");
          expect(cardRsponse.serialNumbers.length).toBe(0);
        })
        .catch(error => {
          console.log(error.message);
          expect(true).toBe(false);
        }); 
      });

  /**
   * changeKeyInKeyChain
   */

   test('Positive test changeKeyInKeyChainWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.changeKeyInKeyChainWithoutDialog("1111","D7E0DFB66A2F72AAD7D66D897C805D307EE1F1CB8077D3B8CF1A942D6A5AC2FF").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("A31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test changeKeyInKeyChain', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.changeKeyInKeyChain("1111", "D7E0DFB66A2F72AAD7D66D897C805D307EE1F1CB8077D3B8CF1A942D6A5AC2FF").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("A31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * finishDeleteKeyFromKeyChainAfterInterruption
   */

   test('Positive test finishDeleteKeyFromKeyChainAfterInterruptionWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.finishDeleteKeyFromKeyChainAfterInterruptionWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test finishDeleteKeyFromKeyChainAfterInterruption', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.finishDeleteKeyFromKeyChainAfterInterruption().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * deleteKeyFromKeyChain
   */

   test('Positive test deleteKeyFromKeyChainWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.deleteKeyFromKeyChainWithoutDialog("D7E0DFB66A2F72AAD7D66D897C805D307EE1F1CB8077D3B8CF1A942D6A5AC2FF").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test deleteKeyFromKeyChain', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.deleteKeyFromKeyChain("D7E0DFB66A2F72AAD7D66D897C805D307EE1F1CB8077D3B8CF1A942D6A5AC2FF").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });


  /**
   * addKeyIntoKeyChain
   */

   test('Positive test addKeyIntoKeyChainWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.addKeyIntoKeyChainWithoutDialog("3333").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("D31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test addKeyIntoKeyChain', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.addKeyIntoKeyChain("3333").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("D31D1D600F8E5B5951275B9C6DED079011FD852ABB62C14A2EECA2E6924452C");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });



  /**
   * getKeyFromKeyChain
   */

   test('Positive test getKeyFromKeyChainWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getKeyFromKeyChainWithoutDialog("D7E0DFB66A2F72AAD7D66D897C805D307EE1F1CB8077D3B8CF1A942D6A5AC2FF").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("1111");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getKeyFromKeyChain', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getKeyFromKeyChain("D7E0DFB66A2F72AAD7D66D897C805D307EE1F1CB8077D3B8CF1A942D6A5AC2FF").then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("1111");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });
  

  /**
   * getFreeStorageSize
   */

   test('Positive test getFreeStorageSizeWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getFreeStorageSizeWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("20");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getFreeStorageSize', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getFreeStorageSize().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("20");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * getOccupiedStorageSize
   */

   test('Positive test getOccupiedStorageSizeWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getOccupiedStorageSizeWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("20");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getOccupiedStorageSize', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getOccupiedStorageSize().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("20");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });


  /**
   * getNumberOfKeys
   */

   test('Positive test getNumberOfKeysWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getNumberOfKeysWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("20");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getNumberOfKeys', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getNumberOfKeys().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("20");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  /**
   * getKeyChainInfo
   */

   test('Positive test getKeyChainInfoWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getKeyChainInfoWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(32767);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(1);
      expect(cardRsponse.occupiedSize).toBe(1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test getKeyChainInfo', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.getKeyChainInfo().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(32767);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(1);
      expect(cardRsponse.occupiedSize).toBe(1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  


  /**
   * resetKeyChain
   */

   test('Positive test resetKeyChainWithoutDialog', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.resetKeyChainWithoutDialog().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });

  test('Positive test resetKeyChain', () => {
    let nfcCardModuleWrapper = new NfcCardModuleWrapper();
    return nfcCardModuleWrapper.resetKeyChain().then(cardRsponse => {
      console.log(cardRsponse.message);
      expect(cardRsponse.message).toBe("done");
      expect(cardRsponse.status).toBe("ok");
      expect(cardRsponse.ecsHash).toBe("");
      expect(cardRsponse.epHash).toBe("");
      expect(cardRsponse.freeSize).toBe(-1);
      expect(cardRsponse.hmac).toBe("");
      expect(cardRsponse.length).toBe(-1);
      expect(cardRsponse.numberOfKeys).toBe(-1);
      expect(cardRsponse.occupiedSize).toBe(-1);
      expect(cardRsponse.sn).toBe("");
      expect(cardRsponse.serialNumbers.length).toBe(0);
    })
    .catch(error => {
      console.log(error.message);
      expect(true).toBe(false);
    }); 
  });