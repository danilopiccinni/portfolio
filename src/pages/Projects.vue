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
                        name : 'Laravel',
                        color : '#ff0000',
                    },

                ],

                projects : [
                {
                        title : 'Project management system',
                        repo :  'https://github.com/danilopiccinni/laravel-api',
                        link : '',
                        type: {
                            name: 'Back-End',
                            color: 'red'
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
                                name : 'PHP',
                                color: '#7fabff'
                            },
                            {
                                name : 'MySQL',
                                color: '#0c7a6b'
                            },
                            {
                                name : 'Postman',
                                color: '#be5328'
                            },
                            {
                                name : 'Bootstrap',
                                color: '#8c11fc'
                            },
                            {
                                name : 'VsCode',
                                color: '#1c89d1'
                            },

                        ],
                        cover : '/img/project-management-system/cover.png',
                        images: [
                        {
                            src: '/img/project-management-system/register-form.png',
                            description: 'Layout completo del modulo di registrazione del sistema di gestione progetti.'
                        },
                        {
                            src: '/img/project-management-system/login-form.png',
                            description: 'Vista compatta dell\'interfaccia di accesso al sistema di gestione progetti.'
                        },
                        {
                            src: '/img/project-management-system/create-form-for-project.png',
                            description: 'Modulo per la creazione di nuovi progetti nel sistema.'
                        },
                        {
                            src: '/img/project-management-system/projects-list-page.png',
                            description: 'Schermata dell\'elenco di tutti i progetti presenti nel sistema.'
                        },
                        {
                            src: '/img/project-management-system/single-project-show.png',
                            description: 'Visualizzazione dettagliata di un singolo progetto.'
                        },
                        {
                            src: '/img/project-management-system/create-form-for-type.png',
                            description: 'Modulo per la creazione di nuovi tipi di progetti.'
                        },
                        {
                            src: '/img/project-management-system/type-show-page.png',
                            description: 'Visualizzazione dettagliata di un tipo di progetto specifico.'
                        },
                        {
                            src: '/img/project-management-system/types-list.png',
                            description: 'Elenco completo di tutti i tipi di progetti disponibili nel sistema.'
                        },
                        {
                            src: '/img/project-management-system/create-form-for-technology.png',
                            description: 'Modulo per la creazione di nuove tecnologie e strumenti utilizzati nei progetti.'
                        },
                        {
                            src: '/img/project-management-system/technologies-list-page.png',
                            description: 'Elenco completo di tutte le tecnologie e gli strumenti utilizzati nei progetti.'
                        },
                        {
                            src: '/img/project-management-system/edit-form-for-technologies.png',
                            description: 'Modulo di modifica delle informazioni relative a una tecnologia specifica.'
                        },
                        {
                            src: '/img/project-management-system/technology-single-show.png',
                            description: 'Visualizzazione dettagliata di una tecnologia specifica utilizzata nei progetti.'
                        }
                        ],
                        slug : 'project-management-system',
                        description : 'Gestionale per la gestione dei propri progetti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
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
                        cover : '/img/netflix/cover.png',
                        images: [
                            {                        
                                src: '/img/netflix/nav-bar.png',
                                description: 'Una barra di navigazione elegante del sito web Netflix.'
                            },
                            {
                                src: '/img/netflix/search-bar.png',
                                description: 'Una barra di ricerca ben progettata su Netflix.'
                            },
                            {
                                src: '/img/netflix/search-bar-expanded.png',
                                description: 'Una vista espansa della barra di ricerca su Netflix.'
                            },
                            {
                                src: '/img/netflix/select-genre-search.png',
                                description: 'Una barra di ricerca con opzioni per selezionare il genere su Netflix.'
                            },
                            {
                                src: '/img/netflix/home-page.png',
                                description: 'Immagine principale della pagina Netflix, con una scelta di film e serie TV.'
                            },
                            {
                                src: '/img/netflix/info-on-hover-card.png',
                                description: 'Immagine dettagliata di una scheda informativa visualizzata al passaggio del mouse su Netflix.'
                            },
                            {
                                src: '/img/netflix/tv-series-page.png',
                                description: 'Una pagina dedicata alle serie TV su Netflix, con una selezione di titoli.'
                            },
                            {
                                src: '/img/netflix/movies-page.png',
                                description: 'Una pagina dedicata ai film su Netflix, con una varietà di opzioni da scegliere.'
                            }
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
                        images: [
                            {
                                src: '/img/avada-movers/nav-bar.png',
                                description: 'Una immagine con la barra di navigazione del sito'
                            },
                            {
                                src: '/img/avada-movers/jumbo.png',
                                description: 'Una immagine con il jumbo che appare appena si visita il sito'
                            },
                            {
                                src: '/img/avada-movers/awards.png',
                                description: 'Una immagine con i nostri premi e riconoscimenti'
                            },
                            {
                                src: '/img/avada-movers/services.png',
                                description: 'Un\'immagine che mostra i nostri servizi'
                            },
                            {
                                src: '/img/avada-movers/services-hover.png',
                                description: 'Un\'immagine con effetto hover per i servizi'
                            },
                            {
                                src: '/img/avada-movers/how-we-help.png',
                                description: 'Un\'immagine che illustra come aiutiamo i clienti'
                            },
                            {
                                src: '/img/avada-movers/testimonials.png',
                                description: 'Una raccolta di testimonianze da parte dei clienti'
                            },
                            {
                                src: '/img/avada-movers/request-a-quote.png',
                                description: 'Un\'immagine per richiedere un preventivo'
                            },
                            {
                                src: '/img/avada-movers/footer.png',
                                description: 'Un\'immagine che mostra il piè di pagina del sito'
                            },
                            {
                                src: '/img/avada-movers/avada-full-page.png',
                                description: 'Uno screenshot dell\'intera pagina del sito Avada Movers'
                            }
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
                        images: [
                            {
                                src: '/img/spotify/complete-2.png',
                                description: 'Un\'immagine che rappresenta il layout completo di Spotify'
                            },
                            {
                                src: '/img/spotify/complete-small-view.png',
                                description: 'Un\'immagine con una vista compatta dell\'interfaccia di Spotify'
                            },
                            {
                                src: '/img/spotify/media-player-bar.png',
                                description: 'Un\'immagine della barra del lettore multimediale su Spotify'
                            },
                            {
                                src: '/img/spotify/aside.png',
                                description: 'Un\'immagine della barra laterale su Spotify'
                            },
                            {
                                src: '/img/spotify/aside-mobile.png',
                                description: 'Un\'immagine della barra laterale in modalità mobile su Spotify'
                            }
                        ],
                        slug : 'spotify',
                        description : 'Replica del famoso sito di streaming di musica "Spotify" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    // {
                    //     title : 'Campo minato',
                    //     repo :  'repo-netflix-tech',
                    //     link : 'https://spotify-web-danilop.netlify.app',
                    //     type: {
                    //         name: 'FrontEnd',
                    //         color: 'blue'
                    //     },
                    //     technologies : [
                    //         {
                    //             name : 'HTML',
                    //             color: '#ff7500'
                    //         }, 
                    //         {
                    //             name : 'JS',
                    //             color: '#fcd602'
                    //         },
                    //         {
                    //             name : 'PHP',
                    //             color: '#7fabff'
                    //         },
                    //         {
                    //             name : 'MySQL',
                    //             color: '#0c7a6b'
                    //         },
                    //         {
                    //             name : 'VsCode',
                    //             color: '#1c89d1'
                    //         },
                    //     ],
                    //     cover : '/img/4.jpeg',
                    //     images: [
                    //         {
                    //             src: '/img/1.jpeg',
                    //             description: 'Una splendida immagine'
                    //         },
                    //         {
                    //             src: '/img/2.jpeg',
                    //             description: 'Unaltra immagine fantastica'
                    //         },
                    //         {
                    //             src: '/img/3.jpeg',
                    //             description: 'Un paesaggio mozzafiato'
                    //         },
                    //         {
                    //             src: '/img/4.jpeg',
                    //             description: 'Unimmagine da sogno'
                    //         },
                    //         {
                    //             src: '/img/5.jpeg',
                    //             description: 'Uimmagine sorprendente'
                    //         },
                    //         {
                    //             src: '/img/6.jpeg',
                    //             description: 'Unimmagine da favola'
                    //         },
                    //         {
                    //             src: 'https://picsum.photos/200/300',
                    //             description: 'Una sorprendente immagine generata casualmente'
                    //         }
                    //     ],
                    //     slug : 'campo-minato',
                    //     description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    // },
                    {
                        title : 'Dc Comics',
                        repo :  'https://github.com/danilopiccinni/laravel-dc-comics',
                        link : '',
                        type: {
                            name: 'Back-end',
                            color: 'red'
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
                        cover : '/img/dc-comics/cover.png',
                        images: [
                            {
                                src: '/img/dc-comics/nav-bar.png',
                                description: 'Immagine della barra di navigazione.'
                            },
                            {
                                src: '/img/dc-comics/comics-list.png',
                                description: 'Immagine della lista dei fumetti.'
                            },
                            {
                                src: '/img/dc-comics/merchandising-banner.png',
                                description: 'Immagine del banner del merchandising.'
                            },
                            {
                                src: '/img/dc-comics/footer.png',
                                description: 'Immagine del piè di pagina.'
                            },
                            {
                                src: '/img/dc-comics/single-comic.png',
                                description: 'Immagine di un singolo progetto.'
                            },
                            {
                                src: '/img/dc-comics/create-form.png',
                                description: 'Immagine del modulo di creazione.'
                            },
                            {
                                src: '/img/dc-comics/edit-form.png',
                                description: 'Immagine del modulo di modifica.'
                            },
                            {
                                src: '/img/dc-comics/modal-delete-comic.png',
                                description: 'Immagine di una finestra modale per la rimozione di un fumetto.'
                            }
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
                        images: [
                            {
                                src: '/img/whatsapp/complete-dark.png',
                                description: 'Un immagine di WhatsApp in modalità scura'
                            },
                            {
                                src: '/img/whatsapp/user-profile-bar.png',
                                description: 'Barra del profilo utente di WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/chat-list.png',
                                description: 'Elenco delle chat di WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/chat-search.png',
                                description: 'Ricerca chat su WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/chat-area.png',
                                description: 'Area della chat su WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/contact-panel.png',
                                description: 'Pannello dei contatti di WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/chat-window.png',
                                description: 'Finestra della chat su WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/message-input-bar.png',
                                description: 'Barra di inserimento messaggio su WhatsApp'
                            },
                            {
                                src: '/img/whatsapp/message-input-bar-writing.png',
                                description: 'Barra di inserimento messaggio in fase di scrittura su WhatsApp'
                            }
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
                        cover : '/img/carousel/cover.png',
                        images: [
                            {
                                src: '/img/carousel/view-carousel.png',
                                description: 'Visualizzazione del carosello con pulsanti per lo scorrimento in su e in giu.'
                            },
                            {
                                src: '/img/carousel/image-in-active.png',
                                description: 'Visualizzazione di un\'immagine attiva nel carosello.'
                            },
                            {
                                src: '/img/carousel/thumbs-images.png',
                                description: 'Visualizzazione delle miniature delle immagini nel carosello con i pulsante per lo scorrimento in su e in giu.'
                            },
                            {
                                src: '/img/carousel/command-buttons.png',
                                description: 'Visualizzazione dei pulsanti di comando del carosello.'
                            }
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
                        images: [
                            {
                                src: '/img/responsive-layout/nav.png',
                                description: 'Navigazione del layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/section-1.png',
                                description: 'Sezione 1 del layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/section-2.png',
                                description: 'Sezione 2 del layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/benefits.png',
                                description: 'Vantaggi del layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/testimonials.png',
                                description: 'Testimonianze del layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/about.png',
                                description: 'Informazioni su di noi nel layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/footer.png',
                                description: 'Piè di pagina del layout responsivo'
                            },
                            {
                                src: '/img/responsive-layout/full-page.png',
                                description: 'Visualizzazione a schermo intero del layout responsivo'
                            }
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
                        images: [
                            {
                                src: '/img/boostrap-portfolio-layout/nav.png',
                                description: 'Barra di navigazione del portfolio Bootstrap'
                            },
                            {
                                src: '/img/boostrap-portfolio-layout/jumbo.png',
                                description: 'Intestazione jumbotron del portfolio Bootstrap'
                            },
                            {
                                src: '/img/boostrap-portfolio-layout/portfolio.png',
                                description: 'Sezione portfolio del portfolio Bootstrap'
                            },
                            {
                                src: '/img/boostrap-portfolio-layout/about.png',
                                description: 'Sezione Informazioni su di noi del portfolio Bootstrap'
                            },
                            {
                                src: '/img/boostrap-portfolio-layout/contact.png',
                                description: 'Sezione Contatti del portfolio Bootstrap'
                            },
                            {
                                src: '/img/boostrap-portfolio-layout/footer.png',
                                description: 'Piè di pagina del portfolio Bootstrap'
                            },
                            {
                                src: '/img/boostrap-portfolio-layout/full-page.png',
                                description: 'Visualizzazione a schermo intero del portfolio Bootstrap'
                            }
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
                        images: [
                            {
                                src: '/img/classroom/small-view.png',
                                description: 'Vista compatta del layout della classe'
                            },
                            {
                                src: '/img/classroom/nav.png',
                                description: 'Barra di navigazione del layout della classe'
                            },
                            {
                                src: '/img/classroom/aside-main.png',
                                description: 'Riquadro laterale principale del layout della classe'
                            },
                            {
                                src: '/img/classroom/aside.png',
                                description: 'Altra vista del riquadro laterale del layout della classe'
                            },
                            {
                                src: '/img/classroom/main.png',
                                description: 'Contenuto principale del layout della classe'
                            },
                            {
                                src: '/img/classroom/class-list.png',
                                description: 'Elenco delle classi nel layout della classe'
                            },
                            {
                                src: '/img/classroom/faq.png',
                                description: 'Sezione delle domande frequenti (FAQ) nel layout della classe'
                            },
                            {
                                src: '/img/classroom/graphic.png',
                                description: 'Grafico nel layout della classe'
                            },
                            {
                                src: '/img/classroom/todo.png',
                                description: 'Elenco delle attività da fare (To-Do) nel layout della classe'
                            },
                            {
                                src: '/img/classroom/full-page.png',
                                description: 'Visualizzazione a schermo intero del layout della classe'
                            }
                        ],
                        slug : 'classroom',
                        description : 'Clone layout of the Boolean Classroom dashboard. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    // {
                    //     title : 'Dice Game',
                    //     repo :  'https://github.com/danilopiccinni/js-mail-dadi',
                    //     link : 'https://mail-dice-game-danilop.netlify.app/',
                    //     type: {
                    //         name: 'FrontEnd',
                    //         color: 'blue'
                    //     },
                    //     technologies : [
                    //         {
                    //             name : 'HTML',
                    //             color: '#ff7500'
                    //         },                    
                    //         {
                    //             name : 'CSS',
                    //             color: '#00b9e4'
                    //         },
                    //         {
                    //             name : 'VsCode',
                    //             color: '#1c89d1'
                    //         },
                    //         {
                    //             name : 'JS',
                    //             color: '#fcd602'
                    //         },
                    //         {
                    //             name : 'Bootstrap',
                    //             color: '#8c11fc'
                    //         },
                    //     ],
                    //     cover : '/img/dice-game.png',
                    //     images: [
                    //         {
                    //             src: '/img/1.jpeg',
                    //             description: 'Una splendida immagine'
                    //         },
                    //         {
                    //             src: '/img/2.jpeg',
                    //             description: 'Unaltra immagine fantastica'
                    //         },
                    //         {
                    //             src: '/img/3.jpeg',
                    //             description: 'Un paesaggio mozzafiato'
                    //         },
                    //         {
                    //             src: '/img/4.jpeg',
                    //             description: 'Unimmagine da sogno'
                    //         },
                    //         {
                    //             src: '/img/5.jpeg',
                    //             description: 'Uimmagine sorprendente'
                    //         },
                    //         {
                    //             src: '/img/6.jpeg',
                    //             description: 'Unimmagine da favola'
                    //         },
                    //         {
                    //             src: 'https://picsum.photos/200/300',
                    //             description: 'Una sorprendente immagine generata casualmente'
                    //         }
                    //     ],
                    //     slug : 'dice-game',
                    //     description : 'A little dice game at the best of 3 against the computer. The user enters his email and only if the mail matches you can press the button to play. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    // },
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
                        cover : '/img/dropbox/cover.png',
                        images: [
                            {
                                src: '/img/dropbox/nav-bar.png',
                                description: 'La barra di navigazione di Dropbox con un design pulito.'
                            },
                            {
                                src: '/img/dropbox/jumbo.png',
                                description: 'Immagine in primo piano che presenta i principali servizi di Dropbox.'
                            },
                            {
                                src: '/img/dropbox/possible-subscriptions.png',
                                description: 'Opzioni di abbonamento possibili offerte da Dropbox.'
                            },
                            {
                                src: '/img/dropbox/office-contact.png',
                                description: 'Informazioni di contatto per gli uffici di Dropbox.'
                            },
                            {
                                src: '/img/dropbox/find-partner.png',
                                description: 'Immagine che rappresenta la ricerca di un partner o collaboratore su Dropbox.'
                            },
                            {
                                src: '/img/dropbox/operations-and-benefits.png',
                                description: 'Operazioni e benefici legati al utilizzo di Dropbox.'
                            },
                            {
                                src: '/img/dropbox/partnership-whit-business-subscription.png',
                                description: 'Una partnership con una sottoscrizione aziendale su Dropbox.'
                            },
                            {
                                src: '/img/dropbox/faq.png',
                                description: 'Risposte alle domande frequenti su Dropbox.'
                            },
                            {
                                src: '/img/dropbox/footer.png',
                                description: 'Il piè di pagina del sito web di Dropbox.'
                            }
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
                        cover : '/img/discord/cover.png',
                        images: [
                            {
                                src: '/img/discord/nav-bar.png',
                                description: 'Barra di navigazione del sito web di Dropbox con design accattivante.'
                            },
                            {
                                src: '/img/discord/jumbo.png',
                                description: 'Immagine in evidenza che mette in risalto i servizi di Dropbox.'
                            },
                            {
                                src: '/img/discord/section1-home-page.png',
                                description: 'Sezione 1 della pagina principale di Dropbox con uno sfondo panoramico.'
                            },
                            {
                                src: '/img/discord/section2-home-page.png',
                                description: 'Sezione 2 della pagina principale di Dropbox con elementi visivi coinvolgenti.'
                            },
                            {
                                src: '/img/discord/section3-home-page.png',
                                description: 'Sezione 3 della pagina principale di Dropbox con interfaccia intuitiva.'
                            },
                            {
                                src: '/img/discord/invite-to-download.png',
                                description: 'Invito a scaricare la app di Dropbox per un esperienza di condivisione avanzata.'
                            },
                            {
                                src: '/img/discord/footer.png',
                                description: 'Il piè di pagina del sito web di Dropbox con link utili e informazioni.'
                            }
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