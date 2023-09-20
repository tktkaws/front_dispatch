import Header from "components/header";
import Footer from "components/footer";
import styles from "styles/layout.module.css";

export default function Layout({ children }) {
  // console.log(children.props);
  // let backgroundColor;

  // if (children.props.name === "HTML") {
  //   backgroundColor = "#C1E0D0";
  // } else if (children.props.name === "CSS") {
  //   backgroundColor = "#FCDFE3";
  // } else if (children.props.name === "JavaScript") {
  //   backgroundColor = "#F6EEBE";
  // } else {
  //   backgroundColor = "#D5E9ED";
  // }
  // if (children.props.categories) {
  //   if (children.props.categories[0].name === "HTML") {
  //     backgroundColor = "#C1E0D0";
  //   } else if (children.props.categories[0].name === "CSS") {
  //     backgroundColor = "#FCDFE3";
  //   } else if (children.props.categories[0].name === "JavaScript") {
  //     backgroundColor = "#F6EEBE";
  //   } else {
  //     backgroundColor = "#D5E9ED";
  //   }
  // }
  // const style = {
  //   backgroundImage: "url('/bg_noise01.png')",
  //   backgroundRepeat: "repeat",
  //   backgroundSize: "64px 64px",
  //   backgroundPosition: "left top",
  //   backgroundColor: backgroundColor,
  //   width: "100%",
  // };
  return (
    <>
      <div>
        <div className={styles.container}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
