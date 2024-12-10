import { myExample } from '@/data/productExample';

export function fetchPages(query) {
    const lowerCaseQuery = query.toLowerCase();
    return myExample.filter(page => {
        for (let tag of page.search_tags) {
            if (tag.toLowerCase() === lowerCaseQuery) {
                return true
            }
        }
    });
}

// tag.toLowerCase().includes(lowerCaseQuery)