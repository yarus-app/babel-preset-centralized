import merge from 'lodash.merge';
import defaults from './defaults';

function getOptions(props = {}) {
  const options = {
    env: props.env
  };

  return merge(defaults, options);
}

export default getOptions;
