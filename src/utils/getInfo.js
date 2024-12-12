import { supabase } from '@/lib/supabase';

export async function getInfo() {    
    let { data: info, error } = await supabase
        .from('info')
        .select('*')

    if (error) {
        console.error('Error fetching data:', error.message)
        return []
    }

    return info
}