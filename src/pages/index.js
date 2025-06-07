import ScrollSyncedCarousel from "@/components/slider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scroll Carousel</title>
        <meta name="description" content="Scroll synced carousel demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ minHeight: "100vh", background: "hsl(334, 32%, 30%)" }}>
        <ScrollSyncedCarousel />
      </main>
    </>
  );
}
