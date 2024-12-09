import { myExample } from '@/data/productExample';

export function fetchPages(query) {
    const lowerCaseQuery = query.toLowerCase();
    return myExample.filter(page => page.title.toLowerCase().includes(lowerCaseQuery));
}