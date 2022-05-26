function addValueToForm(form: any, key: string, value: any) {
  if (value == null) return
  form.append(key, (value === true) ? '1' : value) // Convert true:boolean -> 1:string
}

function isObject(obj: any) {
  return toString.call(obj).slice(8, -1).toLowerCase() === 'object'
}

function isArray(obj: any) {
  return Array.isArray(obj)
}

function objectToForm(params: any, form: FormData | URLSearchParams, childNode = '', isArrayNode = false) {
  Object.entries(params).forEach(([key, value]) => {
    const node = isArrayNode ? `[${key}]` : key
    if (isObject(value)) objectToForm(params[key], form, `${childNode}${node}.`) // search Object (Recursive call)
    else if (isArray(value)) objectToForm(params[key], form, `${childNode}${node}`, true) // search Array (Recursive call)
    else addValueToForm(form, `${childNode}${node}`, value) // add value
  })
  return form
}

/**
 * オブジェクトをFormData()に変換します.
 * @param params FormDataに変換したいオブジェクト
 * @returns FormDataインスタンス (multipart/form-data)
 */
export function objectToFormData(params: Record<string, any>) {
  return objectToForm(params, new FormData())
}

/**
 * オブジェクトをURLSearchParamsに変換します.
 * @param params FormDataに変換したいオブジェクト
 * @returns URLSearchParamsインスタンス (application/x-www-form-urlencoded)
 */
export function objectToURLSearchParams(params: Record<string, any>) {
  return objectToForm(params, new URLSearchParams())
}