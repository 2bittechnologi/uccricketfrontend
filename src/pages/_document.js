import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cricket Player Profile</title>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body className="bg-[#ECF2FD] text-gray-800">
        <Main />
        <NextScript />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <script src="/assets/js/script.js"></script>
      </body>
    </Html>
  );
}
