export function validateByParameter(values, parameter, error) {
  if (values.indexOf(parameter) === -1) {
    throw new Error(error);
  }
}
