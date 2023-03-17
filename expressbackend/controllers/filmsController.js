import FilmyModel from '../models/Filmy.js'

class FilmyController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await FilmyModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
}

export default FilmyController