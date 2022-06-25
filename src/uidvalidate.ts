import {
  validate as uuidValidate,
  version as uuidVersion,
} from 'uuid';

const idValidate = (uuid: string): boolean => {
  const ret = uuidValidate(uuid) && uuidVersion(uuid) === 4;
  return ret;
};

export default idValidate;
