export interface BagItem {
    temp_id: number;
    quantity: number;
    options?: Array<any>;
    is_up_to_up?: number;
    create_time?: string;
    item_name?: string | null;
}