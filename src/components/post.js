export const post = async function (_,b) {
    try {
      return fetch('https://whale-skin/'+_, {
        method: 'POST',
        body: JSON.stringify(null != b ? b : {}),
        mode: 'no-cors'
      });
    }catch(e){
      return e;
    }
  }
