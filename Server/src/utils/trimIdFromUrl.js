const trimId = (url) => {
      let id = "";
      for (let index = 0; index < url.length; index++) {
        const character = url[index];
        if (!isNaN(character)) id += character;
      }
      return id
}

module.exports ={ trimId }