import {instance as http} from "../http.ts";
import {encodeSql} from "../helpers/utils.ts";
import type {ApiResponse} from "../interface/interface.ts";

export const getLinkActiveStatus = async (): Promise<ApiResponse<any>> => {
    const sql = `SELECT * FROM settings where config_key = 'active_link';`;
    const q = encodeSql(sql);
    return http.post( `${import.meta.env.VITE_API_BASE_CONTROL_URL}/expose.php`, {q} );
}

export const setLinkActiveStatus = async (status: boolean): Promise<ApiResponse<any>> => {
    const sql = `UPDATE settings SET value=${Number(status)} WHERE config_key = 'active_link';`;
    const q = encodeSql(sql);
    return http.post( `${import.meta.env.VITE_API_BASE_CONTROL_URL}/expose.php`, {q} );
}

// export const getLinks = async (): Promise<ApiResponse<any>> => {
//     const sql = `SELECT domain FROM audit_domains where domain != 'localhost';`;
//     const q = encodeSql(sql);
//     return http.post( `${import.meta.env.VITE_API_BASE_CONTROL_URL}/expose.php`, {q} );
// }