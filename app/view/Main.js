Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'HelloWorld.view.Carousel',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to my sencha Touch App'
                },

                html: [
                    '<h1>Welcome to my Sencha Touch Home page</h1>',
                    '<img src="http://docs.sencha.com/touch/2.1.1/guides/command/sencha-command-128.png" />',
                    '<p>The following pages show my home work</p>'
                ].join("")
            },
            
			{
			    xtype: 'nestedlist',
			    title: 'Blog',
			    iconCls: 'star',
			    displayField: 'title',
			
			    store: {
			        type: 'tree',
			
			        fields: [
			            'title', 'link', 'author', 'contentSnippet', 'content',
			            {name: 'leaf', defaultValue: true}
			        ],
			
			        root: {
			            leaf: false
			        },
			
			        proxy: {
			            type: 'jsonp',
			            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
			            reader: {
			                type: 'json',
			                rootProperty: 'responseData.feed.entries'
			            }
			        }
			    },
			
			    detailCard: {
			        xtype: 'panel',
			        scrollable: true,
			        styleHtmlContent: true
			    },
			
			    listeners: {
			        itemtap: function(nestedList, list, index, element, post) {
			            this.getDetailCard().setHtml(post.get('content'));
			        }
			    }
			},

            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://www.youtube.com/watch?v=1lF-J4e9cco'
                    }
                ]
            },

			{
				title: 'Carousel',
				iconCls: 'action',
				xtype: 'caro'
			}

        ]
    }
});
