export const updateObject = (
  oldObject: Object,
  updatedProperties: Object
) => ({
  ...oldObject,
  ...updatedProperties
});