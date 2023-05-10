import "@styles/global.css";
import Nav from "@components/nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptly",
  description: "Discover & Share AI Promtps.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
