export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
}

export interface BagItem {
    temp_id: number;
    quantity: number;
    options?: Array<any>;
    is_up_to_up?: number;
    create_time?: string;
    item_name?: string | null;
}

export interface Account {
    id: number;
    username: string;
    password: string;
    vnd: number;
    tongnap: number;
    is_admin: number;
    active: number;
    ban: number;
}

export const DefaultAccountInfo:Account = {
    id: 0,
    username: '',
    password: '',
    vnd: 0,
    tongnap: 0,
    is_admin: 0,
    active: 0,
    ban: 0,
}