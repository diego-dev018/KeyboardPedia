import { getInfo } from '@/utils/get_info'

export async function fetchPages(query) {
    const lowerCaseQuery = query.toLowerCase();
    const info = await getInfo();

    return info.filter(page => {
        for (let tag of page.search_tags) {
            if (tag.toLowerCase().includes(lowerCaseQuery) && lowerCaseQuery.length >= 4) {
                return true
            }
        }
    });
}


// tag.toLowerCase().includes(lowerCaseQuery)