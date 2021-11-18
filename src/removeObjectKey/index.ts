type Key = string | number
const removeObjectKey = (obj: GenericObject, key: Key | Key[]) => {
  const listKey = Array.isArray(key) ? key : [key]

  return listKey.reduce((acc, k) => {
    const { [k]: _, ...picked } = acc
    return { ...picked }
  }, obj as GenericObject)
}

export default removeObjectKey
