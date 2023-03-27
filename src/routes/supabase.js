import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hajungfdeftklhwstonr.supabase.co";
const supabaseAnonKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhanVuZ2ZkZWZ0a2xod3N0b25yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODM4MjgzMSwiZXhwIjoxOTkzOTU4ODMxfQ.RRE0GE4D5oZcjgJUdhMTDgpG4pdo7iFZq2qxB_NKYiE"; 

const supabase = createClient(supabaseUrl, supabaseAnonKey );


export default supabase;
// npm install @supabase/supabase-js 