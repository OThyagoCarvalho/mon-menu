interface User {
    id: number;
    name: string;
    motto?: string;
    email: string;
    profile_pic_url?: string;
    is_premium: boolean;
    menu_list: Menu[];
}

interface Menu {
    id: number;
    name?: string;
    banner_pic_url?: string;
    userId: User;
    categories: Category[];
}
