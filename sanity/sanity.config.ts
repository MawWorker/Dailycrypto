import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'   // ✅ add this
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'DailyCrypto',

  projectId: 'uiu9mgqs',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // News & Articles
            S.listItem()
              .title('News Posts')
              .child(
                S.documentTypeList('newsPost')
                  .title('News Posts')
                  .filter('_type == "newsPost"')
                  .defaultOrdering([{ field: 'datePublished', direction: 'desc' }])
              ),

            // Daily Content
            S.listItem()
              .title('Daily Recaps')
              .child(
                S.documentTypeList('dailyRecap')
                  .title('Daily Recaps')
                  .filter('_type == "dailyRecap"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),

            // Weekly Content
            S.listItem()
              .title('Weekly Summaries')
              .child(
                S.documentTypeList('weeklySummary')
                  .title('Weekly Summaries')
                  .filter('_type == "weeklySummary"')
                  .defaultOrdering([{ field: 'weekStartDate', direction: 'desc' }])
              ),

            // Archives
            S.listItem()
              .title('Archives')
              .child(
                S.documentTypeList('archive')
                  .title('Archives')
                  .filter('_type == "archive"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),

            S.divider(),

            // Reference Data
            S.listItem()
              .title('Authors')
              .child(
                S.documentTypeList('author')
                  .title('Authors')
                  .filter('_type == "author"')
              ),

            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category')
                  .title('Categories')
                  .filter('_type == "category"')
              ),
          ])
    }),
    visionTool(),
    cloudinarySchemaPlugin()   // ✅ enable Cloudinary custom type: cloudinary.asset
  ],

  schema: {
    types: schemaTypes,
  },
})
