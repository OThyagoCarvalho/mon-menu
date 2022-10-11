export function NormalizeCategories(categories: string) {
    let categoriesList = categories.split(',');
    for (let i = 0; i < categoriesList.length; i++) {
        categoriesList[i] = categoriesList[i].toLowerCase();
        categoriesList[i] = categoriesList[i].trim();
    }
    return categoriesList;
}

export const FormatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
