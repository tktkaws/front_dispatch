import Header from "components/header";
import Footer from "components/footer";
import styles from "styles/layout.module.css";

export default function Layout({ children }) {
  console.log(children.props);
  let backgroundColor;

  if (children.props.name === "HTML") {
    backgroundColor = "#F6EEBE";
  } else if (children.props.name === "CSS") {
    backgroundColor = "#FCDFE3";
  } else if (children.props.name === "JavaScript") {
    backgroundColor = "#C1E0D0";
  } else {
    backgroundColor = "#D5E9ED";
  }
  if (children.props.categories) {
    if (children.props.categories[0].name === "HTML") {
      backgroundColor = "#F6EEBE";
    } else if (children.props.categories[0].name === "CSS") {
      backgroundColor = "#FCDFE3";
    } else if (children.props.categories[0].name === "JavaScript") {
      backgroundColor = "#C1E0D0";
    } else {
      backgroundColor = "#D5E9ED";
    }
  }
  const style = {
    backgroundColor: backgroundColor,
    position: "absolute",
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
