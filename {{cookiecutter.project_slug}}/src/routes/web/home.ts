import express from 'express';
import Home from '../../components/home/app';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';
import { getHtml } from '../../utils/template';

const router = express.Router();

router.get('/', async (req, res) => {
  // can be passed as a url param
  const username = 'ardydedase';
  const varBlock = `<script>
    var username = "{{{username}}}"
    </script>`;

  const scriptBlock = `<script src="/home.js" charset="utf-8"></script>`;
  const theHtml = getHtml(varBlock, scriptBlock);

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(React.createElement(Home));
  const htmlToSend = hbsTemplate({
    reactele: reactComp,
    username: username,
  });
  res.send(htmlToSend);
});

export default router;
