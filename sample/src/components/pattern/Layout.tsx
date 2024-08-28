import "@/App.css";
import { ReactNode } from "react";
import Header from "@/components/pattern/Header";
import Nav from "@/components/pattern/Nav";
import Footer from "@/components/pattern/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
