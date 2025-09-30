export default {
  name: 'weeklySummary',
  title: 'Weekly Summary',
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
      name: 'weekStartDate',
      title: 'Week Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'weekEndDate',
      title: 'Week End Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'summary',
      title: 'Weekly Summary',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().max(800)
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
      name: 'mainTheme',
      title: 'Main Theme',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100)
    },
    {
      name: 'keyDevelopments',
      title: 'Key Developments',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(3).max(10)
    },
    {
      name: 'topStories',
      title: 'Top Stories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'rank',
              title: 'Rank',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(1).max(10)
            },
            {
              name: 'title',
              title: 'Story Title',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'impact',
              title: 'Impact Description',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'significance',
              title: 'Significance',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'editorsPicks',
      title: "Editor's Picks",
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Article Title',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'reason',
              title: 'Why We Picked It',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'author',
              title: 'Author Name',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'marketSentiment',
      title: 'Weekly Market Sentiment',
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
          name: 'weeklyTrend',
          title: 'Weekly Trend',
          type: 'string'
        },
        {
          name: 'topPerformers',
          title: 'Top Performers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'symbol', title: 'Symbol', type: 'string' },
                { name: 'change', title: 'Change %', type: 'string' },
                { name: 'reason', title: 'Reason', type: 'string' }
              ]
            }
          ]
        },
        {
          name: 'weeklyVolume',
          title: 'Weekly Volume',
          type: 'string'
        },
        {
          name: 'marketCapGrowth',
          title: 'Market Cap Growth',
          type: 'string'
        }
      ]
    },
    {
      name: 'trendingTopics',
      title: 'Trending Topics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'topic',
              title: 'Topic/Hashtag',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'mentions',
              title: 'Mentions Count',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'sentiment',
              title: 'Sentiment',
              type: 'string',
              options: {
                list: [
                  'Extremely Positive',
                  'Very Positive', 
                  'Positive',
                  'Neutral',
                  'Negative',
                  'Very Negative',
                  'Extremely Negative'
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'nextWeekPreview',
      title: 'Next Week Preview',
      type: 'object',
      fields: [
        {
          name: 'upcomingEvents',
          title: 'Upcoming Events',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'watchList',
          title: 'What to Watch',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'totalStories',
      title: 'Total Stories This Week',
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
      title: 'Week Start Date, New',
      name: 'weekStartDesc',
      by: [{ field: 'weekStartDate', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'weekStartDate',
      media: 'featuredImage'
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `Week of ${new Date(subtitle).toLocaleDateString('en-PH')}`
      };
    }
  }
}