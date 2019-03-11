const ADDAUTHOR = "ADDAUTHOR";
const DELETEAUTHOR = "DELETEAUTHOR";

export const ADD_AUTHOR = () =>{
	const newAuthor = {
      id: 19,
      first_name: "Auhor",
      last_name: "MuthorFace",
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonyous book",
          color: "mysteous color"
        }
      ]
    };
	return {
		type:ADDAUTHOR,
		payload:newAuthor
	}
}

export const DELETE_AUTHOR = (Author) =>{
	return {
		type:DELETEAUTHOR,
		payload:Author
	}
}
