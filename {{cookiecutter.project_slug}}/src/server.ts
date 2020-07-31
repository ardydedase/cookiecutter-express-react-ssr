import express from 'express';
import compression from 'compression';
import home from './routes/web/home';
import repos from './routes/web/repos';
import api from './routes/api';
import healthcheck from './routes/healthcheck';
import { logger } from './utils/logger';


const app = express();

app.use(compression());
app.use(express.static('public'));

// For APIs only
app.use('/api', api);

// Healthcheck
app.use('/healthcheck', healthcheck);

// Web
app.use('/repos', repos);
app.use('/', home);


// eslint-disable-next-line no-undef
const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  logger.info(`Running on ${port}...`);
});
