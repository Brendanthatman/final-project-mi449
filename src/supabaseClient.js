import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ceblnkulcffmllymuigl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlYmxua3VsY2ZmbWxseW11aWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDIzNTgsImV4cCI6MjA1OTI3ODM1OH0.n2fVk0TWlD53IpVvoB9xyfNNKU4_0l4g1fGxNylP1pk';

export const supabase = createClient(supabaseUrl, supabaseKey);