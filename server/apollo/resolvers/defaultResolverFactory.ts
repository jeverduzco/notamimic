import * as models from '../../database';
import pluralize from 'pluralize';

export default name => {
  const plural = pluralize(name).toLowerCase();

  return {
    [plural](obj, args, context, info) {
      return models[name].find(args.filter);
    },
  };
};

