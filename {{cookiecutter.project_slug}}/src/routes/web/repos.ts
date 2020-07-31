import express from 'express';
import Repos from '../../components/repos/app';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';
import { getHtml } from '../../utils/template';

const router = express.Router();

router.get('/', async (req, res) => {
  // username value can be passed from the authentication service provider
  const username = 'ardydedase';
  const varBlock = `<script>
    var username = "{{{username}}}"
    </script>`;

  const scriptBlock = `<script src="/repos.js" charset="utf-8"></script>`;
  const theHtml = getHtml(varBlock, scriptBlock);

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(React.createElement(Repos));
  const htmlToSend = hbsTemplate({
    reactele: reactComp,
    username: username,
  });
  res.send(htmlToSend);
});

export default router;
