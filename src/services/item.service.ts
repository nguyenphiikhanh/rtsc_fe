import {encodeSql} from "../helpers/utils.ts";
import {instance as http} from "../http.ts";
import type {BagItem} from "../interface/BagItem.interface.ts";
import type {ApiResponse} from "../interface/interface.ts";

export const searchItemByIds = async (itemIds: number[]) => {
    const whereInClause = itemIds.length > 0 ? `WHERE id IN (${itemIds.join(',')})` : '';
    const sql = `SELECT id,type,gender,name,description,is_up_to_up FROM item_template ${whereInClause};`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}

export const searchAllItems = async () => {
    const sql = `SELECT *  FROM item_template;`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}

export const updateBagItems = async (player: string, bagItems: BagItem[]): Promise<ApiResponse<any>> => {
    bagItems.map(item => {
        delete item.item_name;
        delete item.is_up_to_up;
    })
    const sql = `UPDATE player SET items_bag = '${JSON.stringify(bagItems)}' WHERE name = '${player}';`;
    const q = encodeSql(sql);
    return http.post('/expose.php', {q} );
}