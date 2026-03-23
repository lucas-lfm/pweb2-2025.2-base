import CampusListServer from "./components/CampusListServer";
import "./index.css"; // css import is automatically injected in exported server components

export function Root(props: { url: URL }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Vite + RSC</title>
      </head>
      <body>
        <App {...props} />
      </body>
    </html>
  );
}

function App(props: { url: URL }) {
  return (
    <div id='root'>
      <CampusListServer />
    </div>
  );
}
