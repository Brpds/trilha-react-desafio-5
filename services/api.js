import axios from 'axios';

const supabaseUrl = "https://ucnmhgroiujahxmbnges.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbm1oZ3JvaXVqYWh4bWJuZ2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NzE5ODAsImV4cCI6MjA0NTM0Nzk4MH0.EanKmzfGIE9ASZyB9GhUq6uZLO5jivHTO85Bf_YFgfY"

export const api  = axios.create({
    baseURL: `${supabaseUrl}/rest/v1`,
    headers: {
        APIKey: supabaseKey,
    }
})