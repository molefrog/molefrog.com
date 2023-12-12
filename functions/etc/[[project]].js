const rewrites = {
  "pid-neural-network": "https://molefrog.github.io/pidnn-talk",
  "stateful-animations": "https://molefrog.github.io/stateful-animations",
  "rye-js": "https://molefrog.github.io/rye",
  knife: "https://molefrog.github.io/knife",
};

export const onRequest = (context) => {
  const { project } = context.params;
  const [name, ...rest] = String(project).split(",");

  if (!(name in rewrites)) {
    return new Response("(ﾉ´ヮ`)ﾉ*: [404]", { status: 404 });
  }

  const url = new URL(context.request.url);

  if (rest.length === 0 && !url.pathname.endsWith("/")) {
    return new Response("Redirecting...", {
      status: 302,
      headers: {
        Location: url.pathname + "/",
      },
    });
  }

  const path = "/" + rest.join("/");

  const newURL = new URL(rewrites[name] + path);
  newURL.search = url.search;

  const newReq = new Request(String(newURL), context.request);
  return fetch(newReq);
};
