import {encodeSql} from "../helpers/utils.ts";
import {instance as http} from "../http.ts";

export const searchItemByIds = async (itemIds: number[]) => {
    const whereInClause = itemIds.length > 0 ? `WHERE id IN (${itemIds.join(',')})` : '';
    const sql = `SELECT id,type,gender,name,description,is_up_to_up FROM item_template ${whereInClause};`;
    debugger
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}

export const searchAllItems = async () => {
    const sql = `SELECT *  FROM item_template;`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}