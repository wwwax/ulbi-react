import styles from "./About.module.css";

export default function About() {
  return (
    <div className="container">
      <div className={styles.about}>
        <h1 className={styles.about__title}>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </h1>

        <p className={styles.about__text}>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Nulla porttitor accumsan tincidunt. Proin eget tortor risus.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
          arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget
          tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis
          ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus. Nulla quis lorem ut libero malesuada feugiat.
        </p>
      </div>
    </div>
  );
}
