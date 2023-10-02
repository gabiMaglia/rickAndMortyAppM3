const { default: axios } = require("axios");
const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
      await agent.get("/rickandmorty/character/12").expect(200);
      await agent.get("/rickandmorty/character/123").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" , "image', async () => {
      const response = await agent.get("/rickandmorty/character/12");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    
    it("Si hay un error responde con status: 500", async () => {
        await agent.get("/rickandmorty/character/100000000").expect(500);
        await agent.get("/rickandmorty/character/sad").expect(500);
        await agent.get("/rickandmorty/character/-12").expect(500);
    });
});

describe("GET /rickandmorty/login", () => {
    it('Return true whit correct crendentials',async () => {
        const response = await agent.get("/rickandmorty/login?email=gab.maglia@gmail.com&password=root1234");
        console.log(response.body)
        expect(response.body.access).toBe(true)
        
    });
    it('Return false whit wrong crendentials',async  () => {
        const response = await agent.get("/rickandmorty/login?email=ga@ga.ga&password=abc123");
        expect(response.body.access).toBe(false)
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it('Should return an array', async () => {
        console.log('response')
        const body = {
            id: 734,
            name: 'Amazing Johnathan',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/734.jpeg',
            myFavorites: []
          }
          const response = await axios.post('/rickandmorty/fav', body)
          expect(response).toBeObject()
    });
    
  });
//   describe("DELETE /rickandmorty/fav/:id",  () => {
//     it('', () => {
        
//     });
//   });
});
