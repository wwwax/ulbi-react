import axios from "axios";

export default class ArticleService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/pffosts"
    );

    return response.data;
  }
}
