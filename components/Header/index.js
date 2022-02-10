import headerStyles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={`${headerStyles.title}`}>
        <span>Saeed</span> <span className="news">News</span>
      </h1>

      <p className={headerStyles.description}>
        lorem ipsum is a testy text ...
      </p>

      <style jsx>
        {`
          .title {
            color: #2ecc71;
          }
        `}
      </style>
    </div>
  );
}
