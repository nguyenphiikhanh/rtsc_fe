import {instance as http} from "../http.ts";
import {encodeSql} from "../helpers/utils.ts";

export const searchItemBoxes = async (player: string) => {
    const sql = `SELECT player.items_bag FROM player WHERE name = '${player}';`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}