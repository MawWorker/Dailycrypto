export default {
  name: 'archive',
  title: 'Archive',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'type',
      title: 'Archive Type',
      type: 'string',
      options: {
        list: [
          { title: 'Daily Recap', value: 'daily' },
          { title: 'Weekly Summary', value: 'weekly' },
          { title: 'Monthly Report', value: 'monthly' },
          { title: 'Special Report', value: 'special' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'date',
      title: 'Archive Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(400)
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' }
          ]
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Daily Crypto Recap',
          'Weekly Crypto Summary',
          'Monthly Crypto Report',
          'Special Report'
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(60)
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'storiesCount',
      title: 'Stories Count',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Tagalog', value: 'tl' },
          { title: 'Cebuano', value: 'ceb' },
          { title: 'Ilocano', value: 'ilo' },
          { title: 'Hiligaynon', value: 'hil' },
          { title: 'Waray-Waray', value: 'war' },
          { title: 'Kapampangan', value: 'pam' },
          { title: 'Pangasinan', value: 'pag' },
          { title: 'Bikol', value: 'bcl' },
          { title: 'Maranao', value: 'mrw' }
        ]
      },
      initialValue: 'en',
      validation: (Rule: any) => Rule.required()
    }
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Type',
      name: 'typeGroup',
      by: [
        { field: 'type', direction: 'asc' },
        { field: 'date', direction: 'desc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'featuredImage'
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `${subtitle} archive`
      };
    }
  }
}