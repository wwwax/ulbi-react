import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>Proin eget tortor risus.</h1>

      <p className={styles.about__text}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus
        convallis quis ac lectus.
      </p>
    </div>
  );
}
