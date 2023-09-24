import Header from "components/header";
import Footer from "components/footer";
import styles from "styles/layout.module.css";

export default function Layout({ children }) {
  // console.log(children.props);
  let backgroundColor;

  if (children.props.name === "HTML") {
    backgroundColor = "#C1E0D0";
  } else if (children.props.name === "CSS") {
    backgroundColor = "#FCDFE3";
  } else if (children.props.name === "JavaScript") {
    backgroundColor = "#F6EEBE";
  } else if (children.props.name === "WebGL") {
    backgroundColor = "#7DBFC2";
  } else if (children.props.name === "Astro") {
    backgroundColor = "#EAA75E";
  } else if (children.props.name === "Accessibility") {
    backgroundColor = "#FAD77B";
  } else if (children.props.name === "Private") {
    backgroundColor = "#D9DFBA";
  } else {
    backgroundColor = "#D5E9ED";
  }
  if (children.props.categories) {
    if (children.props.categories[0].name === "HTML") {
      backgroundColor = "#C1E0D0";
    } else if (children.props.categories[0].name === "CSS") {
      backgroundColor = "#FCDFE3";
    } else if (children.props.categories[0].name === "JavaScript") {
      backgroundColor = "#F6EEBE";
    } else if (children.props.categories[0].name === "WebGL") {
      backgroundColor = "#7DBFC2";
    } else if (children.props.categories[0].name === "Astro") {
      backgroundColor = "#EAA75E";
    } else if (children.props.categories[0].name === "Accessibility") {
      backgroundColor = "#FAD77B";
    } else if (children.props.categories[0].name === "Private") {
      backgroundColor = "#D9DFBA";
    } else {
      backgroundColor = "#D5E9ED";
    }
  }
  const style = {
    backgroundImage: "url('/bg_noise01.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    backgroundPosition: "left top",
    backgroundColor: backgroundColor,
    width: "100%",
  };
  return (
    <>
      <div style={style}>
        <div className={styles.container}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
