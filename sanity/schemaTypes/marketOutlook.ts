export default {
  name: 'marketOutlook',
  title: 'Market Outlook',
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
      title: 'Outlook Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'timeframe',
      title: 'Outlook Timeframe',
      type: 'string',
      options: {
        list: [
          { title: '1 Week', value: '1W' },
          { title: '1 Month', value: '1M' },
          { title: '3 Months', value: '3M' },
          { title: '6 Months', value: '6M' },
          { title: '1 Year', value: '1Y' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().max(600)
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
      name: 'marketPredictions',
      title: 'Market Predictions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'asset',
              title: 'Asset Name',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'symbol',
              title: 'Symbol',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'currentPrice',
              title: 'Current Price (PHP)',
              type: 'number',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'targetPrice',
              title: 'Target Price (PHP)',
              type: 'number',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'timeframe',
              title: 'Timeframe',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'confidence',
              title: 'Confidence %',
              type: 'number',
              validation: (Rule: any) => Rule.min(0).max(100)
            },
            {
              name: 'reasoning',
              title: 'Analysis Reasoning',
              type: 'text',
              rows: 3,
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'analyst',
              title: 'Analyst Name',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'direction',
              title: 'Direction',
              type: 'string',
              options: {
                list: ['bullish', 'bearish', 'neutral']
              },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'riskLevel',
              title: 'Risk Level',
              type: 'string',
              options: {
                list: ['Low', 'Medium', 'High']
              },
              validation: (Rule: any) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'marketTrends',
      title: 'Market Trends',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Trend Title',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'impact',
              title: 'Impact',
              type: 'string',
              options: {
                list: ['Positive', 'Negative', 'Neutral']
              },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'timeframe',
              title: 'Timeframe',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'probability',
              title: 'Probability %',
              type: 'number',
              validation: (Rule: any) => Rule.min(0).max(100)
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  'Institutional',
                  'Regulatory',
                  'Technology',
                  'Gaming',
                  'Environmental',
                  'DeFi',
                  'NFT',
                  'Payments'
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'overallSentiment',
      title: 'Overall Market Sentiment',
      type: 'string',
      options: {
        list: ['Extremely Bullish', 'Bullish', 'Neutral', 'Bearish', 'Extremely Bearish']
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'confidenceLevel',
      title: 'Confidence Level %',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0).max(100)
    },
    {
      name: 'riskLevel',
      title: 'Overall Risk Level',
      type: 'string',
      options: {
        list: ['Low', 'Medium', 'High']
      },
      validation: (Rule: any) => Rule.required()
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
      subtitle: 'timeframe',
      media: 'featuredImage'
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `${subtitle} outlook`
      };
    }
  }
}