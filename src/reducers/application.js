const SET_APPLICATION_DATA = "SET_APPLICATION_DATA"
const SET_ACCOUNT = "SET_ACCOUNT"

const handlers = {
  [SET_APPLICATION_DATA]: (prevState, action) => {
    return {
      ...prevState, 
      web3: action.data.web3, 
      contract: action.data.contract,
      setAccount: action.data.setAccount
    }
  },
  [SET_ACCOUNT]: (prevState, action) => {
    return {
      ...prevState,
      account: action.account
    }
  }
}

export default function reducer(prevState, action) {
  const handler = handlers[action.type]
  if (handler) {
    return handler(prevState, action);
  } else {
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`)
    return prevState;
  }
}


