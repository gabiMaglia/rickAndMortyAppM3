let myFavorites = []

 const postFav = (req, res) => {
   const newChracter = req.body;
   myFavorites.push(newChracter);
   res.json(myFavorites)

}
 const deleteFav = (req, res) => {
    const {id} = req.param;
    myFavorites = myFavorites.filter(e => e.id !== id)
    res.json(myFavorites)
}


module.exports = {
    postFav,
    deleteFav
}