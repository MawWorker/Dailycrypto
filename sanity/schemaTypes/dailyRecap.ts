export default {
  name: 'dailyRecap',
  title: 'Daily Recap',
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
      name: 'date',
      title: 'Recap Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(500)
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
      name: 'keyHighlights',
      title: 'Key Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  'Market Milestone',
                  'Regulatory Development',
                  'Technology Innovation',
                  'Security Alert',
                  'Adoption News',
                  'DeFi Growth',
                  'Gaming Revival'
                ]
              }
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'summary',
              title: 'Summary',
              type: 'text',
              rows: 2,
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'impact',
              title: 'Impact Level',
              type: 'string',
              options: {
                list: ['High', 'Medium', 'Low']
              },
              initialValue: 'Medium'
            },
            {
              name: 'relatedTickers',
              title: 'Related Tickers',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                layout: 'tags'
              }
            }
          ]
        }
      ]
    },
    {
      name: 'marketSentiment',
      title: 'Market Sentiment',
      type: 'object',
      fields: [
        {
          name: 'overall',
          title: 'Overall Sentiment',
          type: 'string',
          options: {
            list: ['Extremely Bullish', 'Bullish', 'Neutral', 'Bearish', 'Extremely Bearish']
          }
        },
        {
          name: 'fearGreedIndex',
          title: 'Fear & Greed Index',
          type: 'number',
          validation: (Rule: any) => Rule.min(0).max(100)
        },
        {
          name: 'topGainers',
          title: 'Top Gainers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'symbol', title: 'Symbol', type: 'string' },
                { name: 'change', title: 'Change %', type: 'string' }
              ]
            }
          ]
        },
        {
          name: 'topLosers',
          title: 'Top Losers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'symbol', title: 'Symbol', type: 'string' },
                { name: 'change', title: 'Change %', type: 'string' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'trendingTopics',
      title: 'Trending Topics',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'totalStories',
      title: 'Total Stories Count',
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
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'featuredImage'
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: new Date(subtitle).toLocaleDateString('en-PH')
      };
    }
  }
}