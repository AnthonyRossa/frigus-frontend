import "./PageLayout.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <Nav />
      <main className="page-layout__content">{children}</main>
    </div>
  );
}
