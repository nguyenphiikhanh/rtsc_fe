import {instance as http} from "../http.ts";
import {encodeSql} from "../helpers/utils.ts";
import type {ApiResponse} from "../interface/interface.ts";

export const excuse = async (sql: string): Promise<ApiResponse<any>> => {
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}