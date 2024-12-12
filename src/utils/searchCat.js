import { getInfo } from '@/utils/getInfo'

export async function fetchPagesForCategory(params) {
    const lowerCaseParam = params.toLowerCase();
    const info = await getInfo();

    return info.filter(page => page.category.toLowerCase() == lowerCaseParam);
}