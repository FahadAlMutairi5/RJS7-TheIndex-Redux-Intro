import authors from ".././data";

const initialState = {
  authors: authors,
  newAuthorId:5
}


const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADDAUTHOR':
            return {
                ...state,
                authors: state.authors.concat(action.payload),
                newAuthorId: state.newAuthorId+1,
            }
        case 'DELETEAUTHOR':
            return {
                ...state,
                authors: state.authors.filter(author => author !== action.payload),
                newAuthorId: state.newAuthorId-1,
            }
        default:
            return state;
    }
}

export default reducer;