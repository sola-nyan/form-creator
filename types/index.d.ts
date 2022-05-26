/**
 * オブジェクトをFormData()に変換します.
 * @param params FormDataに変換したいオブジェクト
 * @returns FormDataインスタンス (multipart/form-data)
 */
export declare function objectToFormData(params: Record<string, any>): FormData | URLSearchParams;
/**
 * オブジェクトをURLSearchParamsに変換します.
 * @param params FormDataに変換したいオブジェクト
 * @returns URLSearchParamsインスタンス (application/x-www-form-urlencoded)
 */
export declare function objectToURLSearchParams(params: Record<string, any>): FormData | URLSearchParams;
//# sourceMappingURL=index.d.ts.map