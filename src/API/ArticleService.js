import axios from "axios";

export default class ArticleService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return response.data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  }
}
