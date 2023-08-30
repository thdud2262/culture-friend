import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import styles from "../app/components/layoutComp/s_layoutComp.module.css";
import TopScrollBtn from "./components/layoutComp/TopScrollBtn";
import FooterBar from "./components/layoutComp/FooterBar";
import HeaderBar from "./components/layoutComp/HeaderBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, carousel, homeList }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <HeaderBar username={session?.user.name} />
        <div className={styles.contents}>{children}</div>
        <div>{carousel}</div>
        <div>{homeList}</div>
        <div id="modal-root" />
        <FooterBar />
        <TopScrollBtn />
      </body>
    </html>
  );
}
