import {instance as http} from "../http.ts";
import {encodeSql} from "../helpers/utils.ts";
import type {ApiResponse} from "../interface/interface.ts";

export const searchItemBoxes = async (player: string): Promise<ApiResponse<any>> => {
    const sql = `SELECT player.items_bag FROM player WHERE name = '${player}';`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}