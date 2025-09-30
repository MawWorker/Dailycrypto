export default {
  name: 'newsPost',
  title: 'News Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(120)
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300)
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 2,
      description: 'Short excerpt for cards and previews'
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
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
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
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required()
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
      name: 'tickers',
      title: 'Related Crypto Tickers',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Cryptocurrency symbols mentioned in the article (e.g., BTC, ETH)'
    },
    {
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'dateModified',
      title: 'Date Modified',
      type: 'datetime'
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(60)
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'premium',
      title: 'Premium Content',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'exclusive',
      title: 'Exclusive Content',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Article', value: 'standard' },
          { title: 'Breaking News', value: 'breaking' },
          { title: 'Long-form Analysis', value: 'analysis' },
          { title: 'Technical Analysis', value: 'technical' },
          { title: 'Exclusive Interview', value: 'interview' },
          { title: 'Investigative Report', value: 'investigation' },
          { title: 'Feature Analysis', value: 'feature' },
          { title: 'Industry Analysis', value: 'industry' },
          { title: 'Innovation Feature', value: 'innovation' },
          { title: 'Global Feature', value: 'global' }
        ]
      },
      initialValue: 'standard'
    },
    {
      name: 'impact',
      title: 'Market Impact',
      type: 'string',
      options: {
        list: [
          { title: 'High', value: 'high' },
          { title: 'Medium', value: 'medium' },
          { title: 'Low', value: 'low' }
        ]
      },
      initialValue: 'medium'
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
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule: any) => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          validation: (Rule: any) => Rule.max(160)
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          }
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  orderings: [
    {
      title: 'Date Published, New',
      name: 'datePublishedDesc',
      by: [{ field: 'datePublished', direction: 'desc' }]
    },
    {
      title: 'Date Published, Old',
      name: 'datePublishedAsc',
      by: [{ field: 'datePublished', direction: 'asc' }]
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'datePublished', direction: 'desc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'coverImage',
      category: 'category.name',
      featured: 'featured'
    },
    prepare(selection: any) {
      const { title, subtitle, media, category, featured } = selection;
      return {
        title: title,
        subtitle: `${subtitle} • ${category}${featured ? ' • Featured' : ''}`,
        media: media
      };
    }
  }
}