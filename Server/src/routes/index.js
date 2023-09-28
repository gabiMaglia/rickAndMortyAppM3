const Router = express.Router
const router = new Router();


const getCharByIdController = require('../controllers/GetCharById')
const handleFavoritesController = require('../controllers/handleFavorites')
const loginController = require('../controllers/login')

router.get("/character/:id", getCharByIdController.getCharById);
router.get("/login", loginController.login);
router.post("/fav", handleFavoritesController.postFav);
router.delete("/fav/:id", handleFavoritesController.deleteFav);


module.exports = router