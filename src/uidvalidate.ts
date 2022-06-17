import {
  validate as uuidValidate,
  version as uuidVersion,
} from 'uuid';

const idValidate = (uuid: string): boolean => {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4; 
};

// export const compressCmd = async (user) => {

export default idValidate;
