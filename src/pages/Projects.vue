<script>
    import CardProject from '../components/CardProject.vue';
    import SmallCardProject from '../components/SmallCardProject.vue';
    import { store } from '../store.js';

    export default {
        name: 'Projects',

        components : {
            CardProject,
            SmallCardProject
        },

        data() {
            return {
                store,

                active : null,

                arrayTypes :[      
                    {
                        name : 'Maerketing',
                        color: 'blue'
                    }, 
                    {
                        name : 'Maerketing',
                        color: 'yellow'
                    },  
                    {
                        name : 'Maerketing',
                        color: 'red'
                    },                      
                    {
                        name : 'Maerketing',
                        color: 'purple'
                    },                      
                    {
                        name : 'Maerketing',
                        color: 'green'
                    },                      
                    {
                        name : 'Maerketing',
                        color: 'blue'
                    },   
                ],

                arrayTechnologies : [
                    {
                        name : 'HTML',
                        color: '#ff7500'
                    },                    
                    {
                        name : 'CSS',
                        color: '#00b9e4'
                    },                    
                    {
                        name : 'Sass',
                        color: '#f06292'
                    },
                    {
                        name : 'JS',
                        color: '#fcd602'
                    },
                    {
                        name : 'PHP',
                        color: '#7fabff'
                    },
                    {
                        name : 'MySQL',
                        color: '#0c7a6b'
                    },
                    {
                        name : 'VsCode',
                        color: '#1c89d1'
                    },
                    {
                        name : 'Figma',
                        color: '#b6df00'
                    },
                    {
                        name : 'Bootstrap',
                        color: '#8c11fc'
                    },
                    {
                        name : 'Postman',
                        color: '#be5328'
                    },
                    {
                        name : 'VueJs',
                        color : '#81c784'
                    },
                    {
                        name : 'Axios',
                        color : '#edd9c5'
                    },
                    {
                        name : 'Laravel',
                        color : '#ff0000'
                    }

                ],

                projects : [
                    {
                        title : 'Netflix',
                        repo :  'https://github.com/danilopiccinni/vite-boolflix/tree/master',
                        link : 'https://boolflix-danilop.netlify.app',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                      
                            {
                                name : 'Sass',
                                color: '#f06292'
                            },
                            {
                                name : 'JS',
                                color: '#fcd602'
                            },
                            {
                                name : 'Postman',
                                color: '#be5328'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                            {
                                name : 'VueJs',
                                color : '#81c784'
                            },
                            {
                                name : 'Axios',
                                color : '#edd9c5'
                            }

                        ],
                        cover : '/img/netflix/netflix.png',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'netflix',
                        description : 'Replica del famoso sito di streaming di film e serie tv "Netflix" con un layput rivisitato e una ricerca tramite API da "TheMovieDB".Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Avada Movers',
                        repo :  'https://github.com/danilopiccinni/proj-html-vuejs',
                        link : 'https://avada-movers-danilop.netlify.app',
                        type: {
                            name: 'Front End',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },  
                            {
                                name : 'Sass',
                                color: '#f06292'
                            },
                            {
                                name : 'JS',
                                color: '#fcd602'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },

                        ],
                        cover : '/img/avada-movers/header-jumbo.png',
                        images : [
                            '/img/avada-movers/awards.png',
                            '/img/avada-movers/services.png',
                            '/img/avada-movers/services-hover.png',
                            '/img/avada-movers/how-we-help.png',
                            '/img/avada-movers/testimonials.png',
                            '/img/avada-movers/request-a-quote.png',
                            '/img/avada-movers/footer.png',
                            '/img/avada-movers/avada-full-page.png',
                        ],
                        slug : 'avada-movers',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Spotify',
                        repo :  'https://github.com/danilopiccinni/html-css-spotifyweb',
                        link : 'https://spotify-web-danilop.netlify.app',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },  
                            {
                                name : 'Sass',
                                color: '#f06292'
                            },
                            {
                                name : 'MySQL',
                                color: '#0c7a6b'
                            },
                            {
                                name : 'VueJs',
                                color : '#81c784'
                            },
                        ],
                        cover : '/img/spotify/complete-1.png',
                        images : [
                            '/img/spotify/complete-2.png',
                            '/img/spotify/complete-small-view.png',
                            '/img/spotify/media-player-bar.png',
                            '/img/spotify/aside.png',
                            '/img/spotify/aside-mobile.png',
                        ],
                        slug : 'spotify',
                        description : 'Replica del famoso sito di streaming di musica "Spotify" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Campo minato',
                        repo :  'repo-netflix-tech',
                        link : 'https://spotify-web-danilop.netlify.app',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            }, 
                            {
                                name : 'JS',
                                color: '#fcd602'
                            },
                            {
                                name : 'PHP',
                                color: '#7fabff'
                            },
                            {
                                name : 'MySQL',
                                color: '#0c7a6b'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                        ],
                        cover : '/img/4.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'campo-minato',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Dc Comics',
                        repo :  'https://github.com/danilopiccinni/laravel-dc-comics',
                        link : '',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'PHP',
                                color: '#7fabff'
                            },
                            {
                                name : 'Sass',
                                color: '#f06292'
                            },
                            {
                                name : 'Laravel',
                                color : '#ff0000'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                        ],
                        cover : '/img/dc.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'dc-comics',
                        description : 'Replica del sito web della DC Comics utilizzando Laravel come framework di sviluppo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },                    
                    {
                        title : 'Whatsapp',
                        repo :  'https://github.com/danilopiccinni/vue-boolzapp',
                        link : 'https://boolzappdanilop.netlify.app',
                        type: {
                            name: 'Front-end',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },                    
                            {
                                name : 'JS',
                                color: '#fcd602'
                            },
                        ],
                        cover : '/img/whatsapp/complete-light.png',
                        images : [
                            '/img/whatsapp/complete-dark.png',
                            '/img/whatsapp/user-profile-bar.png',
                            '/img/whatsapp/chat-list.png',
                            '/img/whatsapp/chat-search.png',
                            '/img/whatsapp/chat-area.png',
                            '/img/whatsapp/contact-panel.png',
                            '/img/whatsapp/chat-window.png',
                            '/img/whatsapp/message-input-bar.png',
                            '/img/whatsapp/message-input-bar-writing.png',
                        ],
                        slug : 'whatsapp',
                        description : 'Creazione di un sistema di chat con risposte automatiche e gestione dei contatti tramite file JSON, utilizzando il layout del famoso social WhatsApp.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Carousel',
                        repo :  'https://github.com/danilopiccinni/js-array-objects-carousel',
                        link : 'https://carouseldanilop.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'JS',
                                color: '#fcd602'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                        ],
                        cover : '/img/carousel/complete.png',
                        images : [
                            '/img/carousel/left-right.png',
                            '/img/carousel/left.png',
                            '/img/carousel/right.png',
                            '/img/carousel/buttons.png',
                        ],
                        slug : 'carousel',
                        description : 'Simple automatic carousel with start and stop and reverse button to show images. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Responsive layout',
                        repo :  'https://github.com/danilopiccinni/htmlcss-responsive-layout',
                        link : 'https://responsive-layout-danilop.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                        ],
                        cover : '/img/responsive-layout/cover.png',
                        images : [
                            '/img/responsive-layout/nav.png',
                            '/img/responsive-layout/section-1.png',
                            '/img/responsive-layout/section-2.png',
                            '/img/responsive-layout/benefits.png',
                            '/img/responsive-layout/testimonials.png',
                            '/img/responsive-layout/about.png',
                            '/img/responsive-layout/footer.png',
                            '/img/responsive-layout/full-page.png',
                        ],
                        slug : 'responsive-layout',
                        description : 'Simple website landing page with responsive capabilities. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Bootstrap Portfolio layout',
                        repo :  'https://github.com/danilopiccinni/html-css-bootstrap-freelancer',
                        link : 'https://bootstrap-portfolio-layout-danilop.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                            {
                                name : 'Figma',
                                color: '#b6df00'
                            },
                            {
                                name : 'Bootstrap',
                                color: '#8c11fc'
                            },
                        ],
                        cover : '/img/boostrap-portfolio-layout/cover.png',
                        images : [
                            '/img/boostrap-portfolio-layout/nav.png',
                            '/img/boostrap-portfolio-layout/jumbo.png',
                            '/img/boostrap-portfolio-layout/portfolio.png',
                            '/img/boostrap-portfolio-layout/about.png',
                            '/img/boostrap-portfolio-layout/contact.png',
                            '/img/boostrap-portfolio-layout/footer.png',
                            '/img/boostrap-portfolio-layout/full-page.png',
                        ],
                        slug : 'boostrap-portfolio-layout',
                        description : 'Simple layout for a Portfolio made with bootstrap. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Classroom',
                        repo :  'https://github.com/danilopiccinni/html-css-bootstrap-dashboard',
                        link : 'https://classroom-danilp.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                            {
                                name : 'Bootstrap',
                                color: '#8c11fc'
                            },
                        ],
                        cover : '/img/classroom/cover.png',
                        images : [
                                '/img/classroom/small-view.png',
                                '/img/classroom/nav.png',
                                '/img/classroom/aside-main.png',
                                '/img/classroom/aside.png',
                                '/img/classroom/main.png',
                                '/img/classroom/class-list.png',
                                '/img/classroom/faq.png',
                                '/img/classroom/graphic.png',
                                '/img/classroom/todo.png',
                                '/img/classroom/full-page.png',
                                ],
                        slug : 'classroom',
                        description : 'Clone layout of the Boolean Classroom dashboard. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Dice Game',
                        repo :  'https://github.com/danilopiccinni/js-mail-dadi',
                        link : 'https://mail-dice-game-danilop.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                            {
                                name : 'JS',
                                color: '#fcd602'
                            },
                            {
                                name : 'Bootstrap',
                                color: '#8c11fc'
                            },
                        ],
                        cover : '/img/dice-game.png',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'dice-game',
                        description : 'A little dice game at the best of 3 against the computer. The user enters his email and only if the mail matches you can press the button to play. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Dropbox website clone',
                        repo :  'https://github.com/danilopiccinni/htmlcss-dropbox',
                        link : 'https://dropbox-danilop.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                        ],
                        cover : '/img/dropbox.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'dropbox-website-clone',
                        description : 'Clone of an older version of the Dropbox website layout. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        title : 'Discord',
                        repo :  'https://github.com/danilopiccinni/htmlcss-discord',
                        link : 'https://discord-danilop.netlify.app/',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: '#ff7500'
                            },                    
                            {
                                name : 'CSS',
                                color: '#00b9e4'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },
                        ],
                        cover : '/img/dropbox.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'discord',
                        description : 'Clone of an older version of the Dropbox website layout. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                ]
            }
        },

        methods : {
            pageControl(name) {
                if (this.$route.name == name) {
                    return true
                } else {
                    return false
                }
            },

            nextVisual() {
                if(this.store.visual == 2) {
                    this.store.visual = 1
                } else {
                    this.store.visual += 1
                }
                localStorage.setItem('selectedVisual', JSON.stringify(this.store.visual))
            },

            changeVisual(num) {
                this.store.visual = num
                localStorage.setItem('selectedVisual', JSON.stringify(this.store.visual))
            },

        },
    }
</script>

<template>
    <div class="projects">

        <div v-if="store.visual == 1" class="visual-1">
            <div v-for="project,index in projects"  class="card-project">  
                <CardProject :project="projects[index]"></CardProject>
            </div>
        </div>

    
        <div v-else-if="store.visual == 2" class="visual-2 d-flex gap-4" :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'" > 
            <div v-for="project,index in projects" class="small-card-project col-10 col-lg-5 col-xxl-3" @mouseover="active=index" @mouseleave="active=null" :style="index == active || active==null ? { opacity: 1}: {opacity : 0.5}">  
                <SmallCardProject :project="projects[index]" :index='index'></SmallCardProject>
            </div>
        </div>


        <div id="visual-switcher" v-if="pageControl('projects')" class="btn-group dropstart d-flex " :class="store.checked ? 'bg-light' : 'bg-dark' , { 'top-0': store.isNavbarHidden }">
            <button v-if="store.language == 'italian'" v-on:click="nextVisual" class="btn btn-sinistro" :class="store.checked ? 'text-dark' : 'text-light'" type="button">Vista</button>
            <button v-if="store.language == 'german'" v-on:click="nextVisual" class="btn btn-sinistro" :class="store.checked ? 'text-dark' : 'text-light'" type="button">Ansicht</button>
            <button v-if="store.language == 'english'" v-on:click="nextVisual" class="btn btn-sinistro" :class="store.checked ? 'text-dark' : 'text-light'" type="button">View</button>

            <button type="button" class="btn btn-destro dropdown-toggle dropdown-toggle-split text-start text-sm-center" :class="store.checked ? 'text-dark' : 'text-light'" data-bs-theme="dark" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu" :class="store.checked ? 'bg-light' : 'bg-dark'">
                <li>
                    <a v-if="store.language == 'italian'" class="dropdown-item" :class="store.checked ? '' : 'text-light'" v-on:click="changeVisual(1)">Singolo full screen</a>
                    <a v-if="store.language == 'german'" class="dropdown-item" :class="store.checked ? '' : 'text-light'" v-on:click="changeVisual(1)">Vollbild-Einzeldarstellung</a>
                    <a v-if="store.language == 'english'" class="dropdown-item" :class="store.checked ? '' : 'text-light'" v-on:click="changeVisual(1)">Full-screen single</a>
                </li>
                <li>
                    <a v-if="store.language == 'italian'" class="dropdown-item" :class="store.checked ? '' : 'text-light'"  v-on:click="changeVisual(2)">Griglia</a>
                    <a v-if="store.language == 'german'" class="dropdown-item" :class="store.checked ? '' : 'text-light'"  v-on:click="changeVisual(2)">Gitter</a>
                    <a v-if="store.language == 'english'" class="dropdown-item" :class="store.checked ? '' : 'text-light'"  v-on:click="changeVisual(2)">Grid</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped lang="scss">



#visual-switcher {

    position: fixed;
    width: 25%;
    top: 60px;
    right: 50%;

    transform: translateX(50%);

    border: 1px gray solid;
    border-radius:  0 0 50px 50px;
    border-top: 0;

    opacity: 0.5;

    transition: 0.5s;


    &:hover {
        opacity: 1;
    }


    .btn-sinistro {
        border-radius:  0 0 0 50px ;


    }

    .btn-destro {
        border-radius:  0 0 50px 0;
    }

    li {
        cursor: pointer;

        a {

            transition: 0.5s;

             &:hover {

                background-color: black;
                color: white;
                opacity: 1;

                text-shadow: #e0e0e0 1px 1px 0;
            }

        }
    }
}

.visual-1{

    width: 100%;
    
    margin: auto;

    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    height: calc(100vh);


    .card-project{

        display: flex;
        align-items: center;
        height: 100%;

        scroll-snap-align: start;

        position: relative;

        .visual-switcher {

            position: absolute;
            top: 50%;
            right: 50%;
            }

        div {
            height: 100%;
            width: 100%;
        }
    }
}

.visual-2{

    margin: auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding-top: 120px;
    height: 100%;

    overflow: hidden;


    .small-card-project {

        transition: 1s;

        &:hover {
            transform: scale(105%);
        }
    }
}
</style>