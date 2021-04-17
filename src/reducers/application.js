const SET_APPLICATION_DATA = "SET_APPLICATION_DATA"
const UPDATE_ACCOUNT = "UPDATE_ACCOUNT"

const handlers = {
  [SET_APPLICATION_DATA]: (prevState, action) => {
    return {
      ...prevState, 
      web3: action.data.web3, 
      contract: action.data.contract,
      account: action.data.account,
      mintableNotes: action.data.mintableNotes,
      noteSupply: action.data.noteSupply,
      userNotes: action.data.userNotes
    }
  },
  [UPDATE_ACCOUNT]: (prevState, action) => {
    return {
      ...prevState,
      account: action.data.account,
      userNotes: action.data.userNotes
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


