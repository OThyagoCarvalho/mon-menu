interface Menu {
    id: number;
    name?: string;
    banner_pic_profile?: string;
    userId: User;
    categories: Category[];
}
