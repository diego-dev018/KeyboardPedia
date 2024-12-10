import { getInfo } from '@/utils/get_info'

export async function fetchPagesForCategory(params) {
    const lowerCaseParam = params.toLowerCase();
    const info = await getInfo();

    return info.filter(page => page.category.toLowerCase() == lowerCaseParam);
}