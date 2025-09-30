export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300)
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Senior Writer', value: 'Senior Writer' },
          { title: 'Market Analyst', value: 'Market Analyst' },
          { title: 'Technology Writer', value: 'Technology Writer' },
          { title: 'Senior Editor', value: 'Senior Editor' },
          { title: 'Breaking News Editor', value: 'Breaking News Editor' },
          { title: 'Tech Reporter', value: 'Tech Reporter' },
          { title: 'Regulatory Reporter', value: 'Regulatory Reporter' },
          { title: 'DeFi Correspondent', value: 'DeFi Correspondent' },
          { title: 'Gaming & NFT Editor', value: 'Gaming & NFT Editor' },
          { title: 'Institutional Finance Reporter', value: 'Institutional Finance Reporter' },
          { title: 'Emerging Markets Correspondent', value: 'Emerging Markets Correspondent' },
          { title: 'Investigative Reporter', value: 'Investigative Reporter' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'socials',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter Handle',
          type: 'string',
          description: 'Twitter username without @'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn Profile',
          type: 'string',
          description: 'LinkedIn profile slug'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'avatar'
    }
  }
}