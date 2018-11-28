import Document, { Head, Main, NextScript } from "next/document";

const isProduction = true;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-48.png"
            sizes="48x48"
          />

          <AnalyticsScripts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/*
 * This component is used to include external analytics scripts
 * to the website. Works only in Production.
 */
const AnalyticsScripts = () => {
  if (!isProduction) {
    return null;
  }

  const metrikaId = "23429869";
  const metrikaTag = `
   (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter${metrikaId} = new Ya.Metrika2({
                    id:${metrikaId},
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks2");
  `;

  return (
    <React.Fragment>
      {!!metrikaId && (
        <script
          key="yandex-metrika"
          dangerouslySetInnerHTML={{ __html: metrikaTag }}
        />
      )}
    </React.Fragment>
  );
};
