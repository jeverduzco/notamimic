import defaultResolverFactory from './defaultResolverFactory';

export default {
  Query: {
    ...defaultResolverFactory('Item'),
  }
}
