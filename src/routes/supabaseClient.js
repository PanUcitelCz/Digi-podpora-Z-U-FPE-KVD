import {createClient} from '@supabase/supabase-js'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobGVmZGd0Z3V6b2NkdXZia2ZuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTQ0ODYwMCwiZXhwIjoyMDE1MDI0NjAwfQ.layc4_xAZ_xMhdqKnmqRgauYIp4z2qu7x5WQHW-4u7Q'
const SUPABASE_URL = 'https://lhlefdgtguzocduvbkfn.supabase.co'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase