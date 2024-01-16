export const GET_DATA = "GET_DATA";

export const fetchData = (URL, query) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(URL + query);

      if (resp.ok) {
        let respData = await resp.json();
        dispatch({
          type: GET_DATA,
          payload: respData,
        });
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
    }
  };
};
