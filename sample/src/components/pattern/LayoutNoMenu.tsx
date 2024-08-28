import "@/App.css";
import { ReactNode } from "react";
import Header from "@/components/pattern/Header";
import Footer from "@/components/pattern/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
