<template>
  <div class="notes container">
    <h1>
      Notes
    </h1>
    <ol>
      <li>
        <a href="#introduction">Introduction</a>
        <ul>
          <li><a href="#introduction-http">Regular HTTP</a></li>
          <li><a href="#introduction-short-polling">Short polling </a></li>
          <li><a href="#introduction-long-polling">Long polling </a></li>
          <li><a href="#introduction-sse">Server-sent events </a></li>
          <li><a href="#introduction-websockets">WebSockets </a></li>
        </ul>
      </li>
      <li><a href="#motivation">Motivation</a></li>
      <li><a href="#demo">Demo</a></li>
      <li><a href="#architecture">Architecture</a></li>
      <li><a href="#sources">Sources</a></li>
    </ol>
    <h2 id="introduction">Introduction <a href="#introduction">#</a></h2>
    <p>
      When building real-time web applications in the browser we need to
      consider how we are going to send our data from the server to the client.
      Technologies that enable this have been around for quite some time and are
      limited to two general approaches: <em>client pull</em> or
      <em>server push</em>.
    </p>
    <p>There are a couple of ways to achieve this goal:</p>
    <ul>
      <li>Short polling (client pull)</li>
      <li>Long polling (client pull)</li>
      <li>WebSockets (server push)</li>
      <li>Server-Sent Events (server push)</li>
    </ul>
    <p>
      Client pull— client asking server for updates at certain regular intervals
    </p>
    <p>
      Server push — server is proactively pushing updates to the client (reverse
      of client pull)
    </p>
    <h3 id="introduction-http">
      Regular HTTP <a href="#introduction-http">#</a>
    </h3>
    <ol>
      <li>A client requests a webpage from a server.</li>
      <li>The server calculates the response</li>
      <li>The server sends the response to the client.</li>
    </ol>
    <img class="diagram" alt="Standard HTTP" src="../assets/intro-http.png" />
    <h3 id="introduction-short-polling">
      Short Polling <a href="#introduction-short-polling">#</a>
    </h3>
    <ol>
      <li>
        A client requests a webpage from a server using regular HTTP.
      </li>
      <li>
        The client receives the requested webpage and executes the JavaScript on
        the page which requests a file from the server at regular intervals
        (e.g. 0.5 seconds).
      </li>
      <li>
        The server calculates each response and sends it back, just like normal
        HTTP traffic.
      </li>
    </ol>
    <img
      class="diagram"
      alt="Standard HTTP"
      src="../assets/intro-short-polling.png"
    />
    <h3 id="introduction-long-polling">
      Long Polling <a href="#introduction-long-polling">#</a>
    </h3>
    <ol>
      <li>
        A client requests a webpage from a server using regular HTTP.
      </li>
      <li>
        The client receives the requested webpage and executes the JavaScript on
        the page which requests a file from the server.
      </li>
      <li>
        The server does not immediately respond with the requested information
        but waits until there's new information available.
      </li>
      <li>
        When there's new information available, the server responds with the new
        information.
      </li>
      <li>
        The client receives the new information and immediately sends another
        request to the server, re-starting the process.
      </li>
    </ol>
    <img
      class="diagram"
      alt="Standard HTTP"
      src="../assets/intro-long-polling.png"
    />
    <h3 id="introduction-sse">
      Server Sent Events (SSE) <a href="#introduction-sse">#</a>
    </h3>
    <ol>
      <li>
        A client requests a webpage from a server using regular HTTP.
      </li>
      <li>
        The client receives the requested webpage and executes the JavaScript on
        the page which requests a file from the server.
      </li>
      <li>
        The server does not immediately respond with the requested information
        but waits until there's new information available.
        <ul>
          <li>
            Real-time traffic from server to client, mostly that's what you'll
            need
          </li>
          <li>You'll want to use a server that has an event loop</li>
          <li>
            Connections with servers from other domains are only possible with
            correct CORS settings
          </li>
          <li>
            If you want to read more, I found these very useful: (article),
            (article), (article), (tutorial).
          </li>
        </ul>
      </li>
    </ol>
    <img class="diagram" alt="Standard HTTP" src="../assets/intro-sse.png" />
    <h3 id="introduction-websockets">WebSockets</h3>
    <ol>
      <li>
        A client requests a webpage from a server using regular http (see HTTP
        above).
      </li>
      <li>
        The client receives the requested webpage and executes the JavaScript on
        the page which opens a connection with the server.
      </li>
      <li>
        The server and the client can now send each other messages when new data
        (on either side) is available.
        <ul>
          <li>
            Real-time traffic from the server to the client
            <strong>and</strong> from the client to the server
          </li>
          <li>You'll want to use a server that has an event loop</li>
          <li>
            With WebSockets it is possible to connect with a server from another
            domain.
          </li>
          <li>
            If you want to read more, I found these very useful: (<a
              href="http://www.developerfusion.com/article/143158/an-introduction-to-websockets/"
              rel="noreferrer"
              >article</a
            >),
            <a
              href="https://developer.mozilla.org/en-US/docs/WebSockets/Writing_WebSocket_client_applications"
              rel="noreferrer"
              >(article)</a
            >
            (<a
              href="http://net.tutsplus.com/tutorials/javascript-ajax/start-using-html5-websockets-today/"
              rel="noreferrer"
              >tutorial</a
            >).
          </li>
        </ul>
      </li>
    </ol>
    <img
      class="diagram"
      alt="Standard HTTP"
      src="../assets/intro-websockets.png"
    />
    <h2 id="motivation">Motivation <a href="#motivation">#</a></h2>
    <h2 id="demo">Demo <a href="#demo">#</a></h2>
    <p></p>
    <h2 id="architecture">Architecture <a href="#architecture">#</a></h2>
    <p></p>

    <h2 id="sources">Sources <a href="#sources">#</a></h2>
    <ul>
      <li>
        User Tieme's stackoverflow overview of different technologies:
        https://stackoverflow.com/a/12855533
      </li>
      <li>
        An Introduction To WebSockets:
        https://www.developerfusion.com/article/143158/an-introduction-to-websockets/
      </li>
      <li>
        About WebSocket APIs in API Gateway:
        https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html
      </li>
    </ul>
  </div>
</template>
