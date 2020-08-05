import config from 'config';

export const getHtml = (varBlock: string, scriptBlock: string) => {
  return `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${config.get('Tracking.gaId')}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.get('Tracking.gaId')}');
    </script>
    <title>${config.get('Static.title')}</title>
    <link
      rel="stylesheet"
      href="${config.get('Static.cssUrl')}"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"/>
    ${varBlock}    
  </head>
  <body>
    <div id="reactele">{{{reactele}}}</div>
    <footer class="text-center" style="padding-top:15px;">
    <small>built by <a href="https://ardy.me" target="_blank">ardy.me</a> in his spare time</small>
    </footer>
    ${scriptBlock}
    <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>`;
};
