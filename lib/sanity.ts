@@ .. @@
 import { createClient } from 'next-sanity'

 export const client = createClient({
 }
 )
-  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uiu9mgqs',
+  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uiu9mgqs',
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
   apiVersion: '2024-01-01',
   useCdn: false,