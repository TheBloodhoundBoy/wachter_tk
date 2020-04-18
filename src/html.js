import React from 'react';

import favicon from './favicon.ico';
import vanta from 'https://github.com/tengbao/vanta/blob/master/dist/vanta.waves.min.js';

export default class HTML extends React.Component {
  const element = useRef<body>()
  render() {
    useLayoutEffect(() => {
        vanta({
            el: element.current
        })
    })
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <>
            <script src="/static/three.r92.min.js"></script>
            <div ref={element}></div>
           </>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
