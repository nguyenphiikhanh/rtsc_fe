export const encodeSql = (sql: string): string => {
    return btoa(unescape(encodeURIComponent(sql)));
};