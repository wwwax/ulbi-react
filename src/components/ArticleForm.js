import styles from "./ArticleForm.module.css";
import { useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";

export default function ArticleForm({ addArticle }) {
  const [article, setArticle] = useState({
    title: "",
    text: "",
  });

  function onFormSubmit(event) {
    event.preventDefault();

    const newArticle = {
      title: article.title,
      body: article.text,
      id: Date.now(),
    };

    addArticle(newArticle);

    setArticle({
      title: "",
      text: "",
    });
  }

  function onInputChange(value, name) {
    setArticle((article) => ({ ...article, [name]: value }));
  }

  return (
    <form className={styles.form}>
      <CustomInput
        type="text"
        name="title"
        placeholder="title"
        value={article.title}
        onChange={onInputChange}
      />
      <CustomInput
        type="text"
        name="text"
        placeholder="text"
        value={article.text}
        onChange={onInputChange}
      />
      <CustomButton onClick={onFormSubmit}>Create</CustomButton>
    </form>
  );
}
