export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da978c41743477fc53cfd3c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1knm8dny',
                  apiId: 'f7d0bd3b-9b4c-49e7-b3bb-8a8ef2c72ca9'
                },
                {
                  buildHookId: '5da978c4c0cd28fe25beafda',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2e96q5k4',
                  apiId: '99b3db1f-0f24-479c-82bb-96d4043f0785'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/perandre/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2e96q5k4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
