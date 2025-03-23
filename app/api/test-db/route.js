import { NextResponse } from 'next/server';
import supabase from '@/lib/supabaseClient'; // ✅ Correct default import

export async function GET() {
    try {
        const { data, error } = await supabase.from('users').select('*');
        if (error) throw error;
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}