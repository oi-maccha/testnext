import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - 404</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          なんだい？
        </p>
      </section>
    </Layout>
  );
}