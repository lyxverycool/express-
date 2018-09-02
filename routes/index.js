import poety from './poety';
import list from './list';

export default app => {
  app.use('/poety', poety);
  app.use('/list', list);
}