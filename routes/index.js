import poety from './poety';
import list from './list';
import crawler from './crawler';

export default app => {
  app.use('/poety', poety);
  app.use('/list', list);
  app.use('/crawler', crawler);
}