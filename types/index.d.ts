/**
 * オブジェクトをFormData()に変換します.
 * @param params FormDataに変換したいオブジェクト
 * @returns FormDataインスタンス (multipart/form-data)
 */
declare function objectToFormData(params: Record<string, object>): FormData | URLSearchParams;
/**
 * オブジェクトをURLSearchParamsに変換します.
 * @param params FormDataに変換したいオブジェクト
 * @returns URLSearchParamsインスタンス (application/x-www-form-urlencoded)
 */
declare function objectToURLSearchParams(params: Record<string, object>): FormData | URLSearchParams;
declare const _default: {
    objectToFormData: typeof objectToFormData;
    objectToURLSearchParams: typeof objectToURLSearchParams;
};
export default _default;
//# sourceMappingURL=index.d.ts.map