import {instance as http} from "../http.ts";
import {encodeSql} from "../helpers/utils.ts";
import type {Account, ApiResponse} from "../interface/interface.ts";

export const getAccountInfo = async (username: string): Promise<ApiResponse<any>> => {
    const sql = `SELECT * FROM account WHERE username = '${username}';`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}

export const updateAccountInfo = async (account: Account): Promise<ApiResponse<any>> => {
    const sql = `UPDATE account SET
                   is_admin = ${account.is_admin},
                   tongnap = ${account.tongnap},
                   ban = ${account.ban},
                   vnd = ${account.vnd},
                   active = ${account.active}
               WHERE id = ${account.id};`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}