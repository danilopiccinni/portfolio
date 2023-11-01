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
                        title : 'Deliveboo view',
                        repo :  'https://github.com/danilopiccinni/vite-boolfolio',
                        link : '',
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
                            {
                                name : 'VueJs',
                                color : '#81c784'
                            },
                            {
                                name : 'Vite+Vue3js',
                                color : '#f8a803',
                            },
                            {
                                name : 'Axios',
                                color : '#edd9c5'
                            },
                            {
                                name : 'Braintree',
                                color : 'aqua'
                            },
                            {
                                name : 'MailTrap',
                                color : 'red'
                            }

                        ],
                        cover : '/img/deliveboo-view/cover.png',
                        images: [
                            {
                                src: '/img/deliveboo-view/jumbo-with-nav-bar.png',
                                description: 'Navigation bar of the DeliveBoo website.',
                            },
                            {
                                src: '/img/deliveboo-view/home-page.png',
                                description: 'Main page of the DeliveBoo website.',
                            },
                            {
                                src: '/img/deliveboo-view/jumbo-with-nav-bar.png',
                                description: 'Header of the DeliveBoo website with navigation bar.',
                            },
                            {
                                src: '/img/deliveboo-view/select-category-of-restaurant-search.png',
                                description: 'Page for selecting restaurant categories on DeliveBoo.',
                            },
                            {
                                src: '/img/deliveboo-view/restaurants-database-list.png',
                                description: 'List of restaurants in the DeliveBoo database.',
                            },
                            {
                                src: '/img/deliveboo-view/faq-home-page-section.png',
                                description: 'Frequently Asked Questions section on the DeliveBoo homepage.',
                            },
                            {
                                src: '/img/deliveboo-view/footer.png',
                                description: 'Footer of the DeliveBoo website.',
                            },
                            {
                                src: '/img/deliveboo-view/single-restaurant-page.png',
                                description: 'Page of a single restaurant on DeliveBoo.',
                            },
                            {
                                src: '/img/deliveboo-view/single-product-info.png',
                                description: 'Detailed information about a product on DeliveBoo.',
                            },
                            {
                                src: '/img/deliveboo-view/cart-icon.png',
                                description: 'Shopping cart icon on DeliveBoo.',
                            },
                            {
                                src: '/img/deliveboo-view/cart-on-offcanvas.png',
                                description: 'Shopping cart in off-canvas view on DeliveBoo.',
                            },
                            {
                                src: '/img/deliveboo-view/cart-page.png',
                                description: 'Shopping cart page on DeliveBoo.',
                            },
                            {
                                src: '/img/deliveboo-view/payment-form-page-with-braintree.png',
                                description: 'Payment form page with Braintree on DeliveBoo.',
                            },
                        ],
                        slug : 'deliveboo-view',
                        description : "My Junior Portfolio represents the culmination of my efforts and learnings from the past seven months, a front-end project developed using Vue.js and Vite. This digital showcase is my dedicated space to proudly present all the projects I've worked on during my educational journey. But it's not just a list of my work; it's a work of art in itself, where I've been able to express my creativity and put into practice a highly detailed User Experience vision. In this project, I aimed to push the boundaries of UX design and interactivity. Every detail, from smooth navigation to the visual appearance of projects, has been meticulously curated. I used Vue.js to create a highly responsive user interface, providing visitors with an engaging experience. The responsiveness and speed of Vite have contributed to ensuring instant page loading, significantly enhancing usability. One of the key features of this project is the contact form. I've implemented Email.js to allow users to send me a direct message, which will arrive directly in my email inbox. This added a touch of interactivity to the portfolio, enabling direct and immediate communication. Deploying my site for the first time was an educational experience. I learned how to make my portfolio accessible to anyone on the internet, ensuring it was secure and reliable. I've also included a router with an elegant transition animation, adding a pleasant sense of fluidity to the navigation between different sections of the site. Navigation has been designed to be intuitive and easy to use, ensuring visitors can explore my work seamlessly. An important aspect of this project is support for multilingual content. Visitors can easily switch the site's language and access information in their preferred languages. To emphasize my commitment to user experience, I've implemented a site color theme switcher. Visitors can customize the look of my portfolio based on their preferences. A significant feature is the dark mode, which can be toggled on and off at any time. This feature has been implemented without bugs and offers a smooth transition between light and dark themes. I've designed my junior portfolio with the potential for future expansion. I've already planned how I could add a back-end to manage project data. This allows me to demonstrate my vision of how data should be organized in a project management system. This site is primarily a showcase, designed to introduce me as a professional in the field. In my jumbo, visitors can download my resume in various languages, making it a valuable resource for recruiters looking to learn more about my skills and experiences. Additionally, I've paid particular attention to responsiveness, ensuring that the site is navigable from any device. I've used Bootstrap to ensure proper display on desktop, tablet, and mobile devices. My junior portfolio is a testament to my skills and dedication to the world of web development. It's a project that highlights my ability to blend creativity with technical rigor, offering visitors an interactive and engaging experience. I'm excited to continue improving and expanding this project as I progress in my professional journey.",
                    },
                    {
                        title : 'Deliveboo management',
                        repo :  'https://github.com/danilopiccinni/vite-boolfolio',
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
                                name : 'Laravel',
                                color : '#ff0000',
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
                        cover : '/img/deliveboo-management/cover.png',
                        images: [
                            {
                                src: '/img/deliveboo-management/nav-bar-expanded.png',
                                description: 'Expanded navigation bar for restaurant and product management.'
                            },
                            {
                                src: '/img/deliveboo-management/nav-bar-compact.png',
                                description: 'Compact navigation bar for restaurant and product management.'
                            },
                            {
                                src: '/img/deliveboo-management/home-page-deliveboo-management.png',
                                description: 'Main screen of the dashboard for restaurant and product management.'
                            },
                            {
                                src: '/img/deliveboo-management/user-register-form-page.png',
                                description: 'User registration form for restaurant and product management.'
                            },
                            {
                                src: '/img/deliveboo-management/user-login-form-page.png',
                                description: 'Login form for restaurant and product management.'
                            },
                            {
                                src: '/img/deliveboo-management/user-welcome-page.png',
                                description: 'Full-screen tutorial view for restaurant and product management.'
                            },
                            {
                                src: '/img/deliveboo-management/new-restaurant-create-form-page.png',
                                description: 'Full-screen creation mode for new restaurants.'
                            },
                            {
                                src: '/img/deliveboo-management/created-restaurant-info-page.png',
                                description: 'Detailed view of restaurant information.'
                            },
                            {
                                src: '/img/deliveboo-management/restaurant-edit-form-page.png',
                                description: 'Module for editing restaurant and product data.'
                            },
                            {
                                src: '/img/deliveboo-management/new-product-for-restaurant-create-form-page.png',
                                description: 'Module for creating new products in restaurants.'
                            },
                            {
                                src: '/img/deliveboo-management/single-product-page.png',
                                description: 'Detailed view of a single product.'
                            },
                            {
                                src: '/img/deliveboo-management/product-edit-form-page.png',
                                description: 'Module for editing product data in restaurants.'
                            },
                            {
                                src: '/img/deliveboo-management/restaurant-products-list-page.png',
                                description: 'List of products in restaurants.'
                            },
                            {
                                src: '/img/deliveboo-management/restaurant-orders-list-page.png',
                                description: 'List of orders in restaurants.'
                            },
                            {
                                src: '/img/deliveboo-management/restaurant-single-order-page.png',
                                description: 'Detailed view of a single order in restaurants.'
                            },
                            {
                                src: '/img/deliveboo-management/restaurant-statistics-orders-page-whit-graph.png',
                                description: 'Statistics on orders in restaurants.'
                            }
                        ],
                        slug : 'deliveboo-management',
                        description : "The front-end project 'Deliveboo' was developed in parallel with the back-end project, representing the visual and interactive side of the restaurant and online order management system. This website allows users to search for restaurants, view menus, add products to the cart, and complete the payment process to receive food at home. Technologies and Learned Concepts: During the development of the front-end project, I deepened my understanding of advanced technologies, including Vue.js and Vite, which allowed me to create a dynamic and highly responsive user interface. These technologies were crucial in providing users with an engaging and intuitive experience. The 'Deliveboo' website uses the API routes provided by the back-end to retrieve and display restaurants, menus, and products. This required a detailed understanding of how to handle API requests, including operations such as data reading, writing, and modification. The integration between the back-end and front-end was carefully implemented to ensure an effective display of restaurant and online order information. The implementation of a secure payment system and email tracking for orders through Mailtrap further enriched the project, enabling users to efficiently complete orders and stay informed about their purchases. The 'Deliveboo' website offers easy and intuitive navigation, allowing users to find restaurants, explore menus and products, and complete orders in just a few steps. The user interface was thoughtfully designed to improve usability and accessibility. In summary, the front-end project 'Deliveboo' provided a practical demonstration of the skills acquired during my educational journey, allowing me to create an interactive, responsive, and engaging website for restaurant and online order management. The knowledge gained from Vue.js and Vite contributed to a high-quality user experience, while integration with the back-end system enabled complete management of the order and restaurant lifecycle. I look forward to applying these skills in future projects and continuing my learning journey in web development.",
                    },
                    {
                        title : 'My Junior Portfolio',
                        repo :  'https://github.com/danilopiccinni/vite-boolfolio',
                        link : 'https://github.com/danilopiccinni/portfolio',
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
                            {
                                name : 'VueJs',
                                color : '#81c784'
                            },
                            {
                                name : 'Vite+Vue3js',
                                color : '#f8a803',
                            },

                        ],
                        cover : '/img/my-junior-portfolio/cover.png',
                        images: [
                        {
                            src: '/img/my-junior-portfolio/nav-bar.png',
                            description: 'Barra di navigazione per la visualizzazione dei tuoi progetti personali.'
                        },
                        {
                            src: '/img/my-junior-portfolio/home-page.png',
                            description: 'Schermata principale della dashboard dei tuoi progetti personali.'
                        },
                        {
                            src: '/img/my-junior-portfolio/projects-list-on-cards.png',
                            description: 'Elenco dei progetti nella dashboard, visualizzati su carte.'
                        },
                        {
                            src: '/img/my-junior-portfolio/projects-list-hover-effect.png',
                            description: 'Effetto hover sulle carte dell\'elenco dei progetti nella dashboard.'
                        },
                        {
                            src: '/img/my-junior-portfolio/tutorial-full-screen-mode.png',
                            description: 'Visualizzazione a schermo intero del tutorial di un progetto.'
                        },
                        {
                            src: '/img/my-junior-portfolio/full-screen-view-mode.png',
                            description: 'Modalità di visualizzazione a schermo intero di un progetto.'
                        },
                        {
                            src: '/img/my-junior-portfolio/single-project-view-page.png',
                            description: 'Visualizzazione dettagliata di un singolo progetto nella dashboard.'
                        },
                        {
                            src: '/img/my-junior-portfolio/contact-form.png',
                            description: 'Modulo per la gestione dei contatti e le richieste relative ai tuoi progetti.'
                        }
                        ],
                        slug : 'my-junior-portfolio',
                        description : "My Junior Portfolio represents the culmination of my efforts and learnings from the past seven months, a front-end project developed using Vue.js and Vite. This digital showcase is my dedicated space to proudly present all the projects I've worked on during my educational journey. But it's not just a list of my work; it's a work of art in itself, where I've been able to express my creativity and put into practice a highly detailed User Experience vision. In this project, I aimed to push the boundaries of UX design and interactivity. Every detail, from smooth navigation to the visual appearance of projects, has been meticulously curated. I used Vue.js to create a highly responsive user interface, providing visitors with an engaging experience. The responsiveness and speed of Vite have contributed to ensuring instant page loading, significantly enhancing usability. One of the key features of this project is the contact form. I've implemented Email.js to allow users to send me a direct message, which will arrive directly in my email inbox. This added a touch of interactivity to the portfolio, enabling direct and immediate communication. Deploying my site for the first time was an educational experience. I learned how to make my portfolio accessible to anyone on the internet, ensuring it was secure and reliable. I've also included a router with an elegant transition animation, adding a pleasant sense of fluidity to the navigation between different sections of the site. Navigation has been designed to be intuitive and easy to use, ensuring visitors can explore my work seamlessly. An important aspect of this project is support for multilingual content. Visitors can easily switch the site's language and access information in their preferred languages. To emphasize my commitment to user experience, I've implemented a site color theme switcher. Visitors can customize the look of my portfolio based on their preferences. A significant feature is the dark mode, which can be toggled on and off at any time. This feature has been implemented without bugs and offers a smooth transition between light and dark themes. I've designed my junior portfolio with the potential for future expansion. I've already planned how I could add a back-end to manage project data. This allows me to demonstrate my vision of how data should be organized in a project management system. This site is primarily a showcase, designed to introduce me as a professional in the field. In my jumbo, visitors can download my resume in various languages, making it a valuable resource for recruiters looking to learn more about my skills and experiences. Additionally, I've paid particular attention to responsiveness, ensuring that the site is navigable from any device. I've used Bootstrap to ensure proper display on desktop, tablet, and mobile devices. My junior portfolio is a testament to my skills and dedication to the world of web development. It's a project that highlights my ability to blend creativity with technical rigor, offering visitors an interactive and engaging experience. I'm excited to continue improving and expanding this project as I progress in my professional journey.",
                    },
                    {
                        title : 'My Projects view',
                        repo :  'https://github.com/danilopiccinni/vite-boolfolio',
                        link : 'https://my-projects-view-danilop.netlify.app/',
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
                        cover : '/img/my-projects-view/cover.png',
                        images: [
                            {
                                src: '/img/my-projects-view/nav-bar.png',
                                description: 'Barra di navigazione per la visualizzazione dei tuoi progetti personali.'
                            },
                            {
                                src: '/img/my-projects-view/home-page.png',
                                description: 'Schermata principale della dashboard dei tuoi progetti personali.'
                            },
                            {
                                src: '/img/my-projects-view/projects-list.png',
                                description: 'Elenco di tutti i progetti nella dashboard dei tuoi progetti personali.'
                            },
                            {
                                src: '/img/my-projects-view/projects-search-of-type.png',
                                description: 'Ricerca di progetti basata sui tipi di progetti nella dashboard.'
                            },
                            {
                                src: '/img/my-projects-view/single-project-page.png',
                                description: 'Visualizzazione dettagliata di un singolo progetto nella dashboard.'
                            },
                            {
                                src: '/img/my-projects-view/contact-form.png',
                                description: 'Modulo per la gestione dei contatti e le richieste relative ai tuoi progetti.'
                            }
                        ],
                        slug : 'my-projects-view',
                        description : "The front-end project 'My Projects' represents the visual and interactive side of my learning journey. It is a portfolio website that synergistically connects to the back-end project 'My Projects,' providing an engaging platform for showcasing web projects. Technologies and Concepts Learned: During the development of the front-end project, I deepened my understanding of advanced technologies such as Vue.js and Vite. These technologies enabled me to create a dynamic and responsive user interface, offering an engaging experience to users. The portfolio website allows for visually appealing and organized project display. Thanks to the API routes provided by the back-end, I learned how to retrieve complete data about projects, including details, types, technologies, and covers. This helped me develop skills in integration between the back-end and front-end, enabling an effective project display. The search and filtering functionality allows users to explore projects easily based on various criteria, enhancing the website's usability and accessibility. Conclusion: The front-end project 'My Projects' provided an opportunity to apply the skills acquired during my educational journey. Through the use of cutting-edge technologies like Vue.js and Vite, I developed an interactive and visually appealing portfolio website. This project provided me with practical experience in creating an engaging user interface and integrating with a robust back-end system. I look forward to applying these skills in future web projects and continuing my learning journey."
                    },

                    {
                        title : 'My Projects managament',
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
                                name : 'Laravel',
                                color : '#ff0000',
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
                        cover : '/img/my-projects-managament/cover.png',
                        images: [
                        {
                            src: '/img/my-projects-managament/register-form.png',
                            description: 'Layout completo del modulo di registrazione del sistema di gestione progetti.'
                        },
                        {
                            src: '/img/my-projects-managament/login-form.png',
                            description: 'Vista compatta dell\'interfaccia di accesso al sistema di gestione progetti.'
                        },
                        {
                            src: '/img/my-projects-managament/create-form-for-project.png',
                            description: 'Modulo per la creazione di nuovi progetti nel sistema.'
                        },
                        {
                            src: '/img/my-projects-managament/projects-list-page.png',
                            description: 'Schermata dell\'elenco di tutti i progetti presenti nel sistema.'
                        },
                        {
                            src: '/img/my-projects-managament/single-project-show.png',
                            description: 'Visualizzazione dettagliata di un singolo progetto.'
                        },
                        {
                            src: '/img/my-projects-managament/create-form-for-type.png',
                            description: 'Modulo per la creazione di nuovi tipi di progetti.'
                        },
                        {
                            src: '/img/my-projects-managament/type-show-page.png',
                            description: 'Visualizzazione dettagliata di un tipo di progetto specifico.'
                        },
                        {
                            src: '/img/my-projects-managament/types-list.png',
                            description: 'Elenco completo di tutti i tipi di progetti disponibili nel sistema.'
                        },
                        {
                            src: '/img/my-projects-managament/create-form-for-technology.png',
                            description: 'Modulo per la creazione di nuove tecnologie e strumenti utilizzati nei progetti.'
                        },
                        {
                            src: '/img/my-projects-managament/technologies-list-page.png',
                            description: 'Elenco completo di tutte le tecnologie e gli strumenti utilizzati nei progetti.'
                        },
                        {
                            src: '/img/my-projects-managament/edit-form-for-technologies.png',
                            description: 'Modulo di modifica delle informazioni relative a una tecnologia specifica.'
                        },
                        {
                            src: '/img/my-projects-managament/technology-single-show.png',
                            description: 'Visualizzazione dettagliata di una tecnologia specifica utilizzata nei progetti.'
                        }
                        ],
                        slug : 'my-projects-managament',
                        description : "The back-end project 'My Projects' is the result of a training course aimed at developing advanced skills in the field of web project management using the powerful Laravel framework. This project provided an extraordinary opportunity to gain in-depth knowledge of back-end development and data management. Technologies and Concepts Learned: During the development of this project, I learned a wide range of essential technologies and concepts. From a back-end perspective, I acquired skills in creating data models, migrations, seeder, and table management using the Laravel framework. These tools allowed me to create a highly flexible and scalable system for project management. I also learned to connect to a MySQL database and ensure data integrity through robust validations. User management, including email authentication, was a fundamental aspect of the project. This provided me with valuable skills in user account management and data security. API routes played a crucial role in integrating with the front-end interface, enabling efficient communication of project data. I worked on read, write, edit, and delete operations, utilizing Laravel's potential to manage client requests accurately and securely. Conclusion: This project marked a significant step in my educational journey. It allowed me to gain a deep understanding of web project management from the back-end perspective, with a particular focus on database design, data validation, and user management. The skills acquired were essential in building a solid foundation for web project management in the future."
                    },
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
                        description : "The 'DC Comics' project, designed as an educational endeavor, aimed to create a comprehensive comic book management system inspired by the DC Comics universe. Extensive use of the Laravel framework in the backend facilitated the application of advanced skills in backend development, while providing the opportunity to build a robust and scalable data management architecture. Technologies and Architecture: At the heart of 'DC Comics' lies Laravel, a powerful and flexible PHP framework, which empowered the creation of intricate data models, migrations, and table management. Leveraging a MySQL database ensured data integrity through the implementation of rigorous validation processes. The project was meticulously designed to support the entire lifecycle of comic book data. Users were granted the ability to create, edit, and delete comic books, with the flexibility to input specific details for each work. This necessitated the incorporation of CRUD (Create, Read, Update, Delete) operations for efficient data management. User management played a pivotal role, with the integration of email-based authentication, providing a secure environment for users to create and manage their accounts. The project's architecture underscored an effective division of responsibilities between the backend and frontend. The backend, fortified by Laravel, handled intricate business logic, data processing, and seamless communication with the database. The frontend, which was open to development with technologies like Vue.js and Vite, interacted harmoniously with the backend via API routes, offering users a responsive and engaging user interface. In essence, 'DC Comics' was a didactic venture that harnessed the capabilities of Laravel to construct a comprehensive, educational, and scalable comic book management system. Its meticulously structured architecture fostered a clear demarcation of responsibilities between the backend and frontend, empowering users to intuitively and securely manage comic book data while honing their development skills.",
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
                        description : "Avada Movers is an educational project that simulated the entire process of creating a website for a transportation company. The goal was to develop an interactive application using the latest technologies, particularly Vue 3 and Vite, and present it to the client as if we were a real development company. Technologies and Challenges: The choice to use Vue 3 and Vite presented both a challenge and an opportunity. Vue 3 offers a new composition-based architecture that required in-depth learning to fully harness its potential. Utilizing Vite contributed to fast page loading, enhancing the user experience. The project involved creating a complete website for the 'Avada Movers' transportation company. This included designing an eye-catching homepage, service pages, informational pages, and a contact section. Route and page management were optimized to ensure a smooth browsing experience. A key aspect of the project was engaging with the 'client.' We had to simulate interactions with the client, understand their requirements, and listen to their needs. This included presenting prototypes, gathering feedback, and reviewing changes. The ability to communicate effectively with the 'client' and translate their expectations into technical solutions was crucial. Preparing documentation, including writing proposals and estimates, was an integral part of the educational process. This project taught us how to communicate clearly and professionally with the client and consider timelines and budgets. We also had to tackle design-related challenges, ensuring that the website reflected the client's image and values. The choice of colors, images, and content layout was meticulously crafted. Conclusions: Avada Movers was a comprehensive educational project that tested our technical skills, our ability to interact with a client, and our project management skills from start to finish. Using Vue 3 and Vite made it possible to create a responsive and fast website, providing an application ready for the real world. This experience prepared us for future challenges in web development and client collaboration.",
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
                        description : "The educational project of replicating Netflix provided an exciting opportunity to learn while focusing on utilizing new technologies and understanding the system of API requests, using Axios to make requests to 'The Movie Database' (TMDb). Technologies and Challenges: The core of this project revolved around Axios, a JavaScript library for making HTTP requests. We learned how to use GET and POST requests to communicate with TMDb's API and retrieve movie data. Understanding how API requests work was crucial, enabling us to access a vast amount of movie data, including titles, images, genres, and much more. The documentation provided by TMDb was a valuable tool that guided us in the process of integrating the API and effectively using the data. We learned to interpret the documentation to understand various endpoints, request parameters, and API responses. The project involved creating a replica of the Netflix website, with an extensive library of accessible movies for users. We faced challenges related to designing the user interface and handling large quantities of data from the API. Organizing movies into categories and managing movie previews and details enhanced the user experience. Structuring routes and pages was an integral part of the project, ensuring intuitive navigation within the site. We also studied how to integrate search functionality to allow users to easily find movies of interest. Conclusions: This educational project allowed us to explore new technologies and gain a solid understanding of how API requests work through Axios. Using TMDb's documentation sharpened our skills in understanding and utilizing external resources. Creating a Netflix replica helped us develop skills in user interface design, data organization, and website structuring. This experience prepared us to tackle challenges in the world of web development and project management involving data from external sources.",
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
                        description : " **Student Project: WhatsApp Clone** This educational project was an enjoyable and instructive challenge, where I had the opportunity to create a WhatsApp clone in just a few hours of practice. Although the project was of an educational nature and created by a beginner student, it involved several interesting activities. **Learned Technologies:** During the development of the WhatsApp clone, I gained basic skills in HTML, CSS, and JavaScript. I dedicated time to creating a user interface that faithfully emulated the appearance of WhatsApp, including visual details and component layout. **Chat Simulation:** An especially engaging aspect of this project was simulating interactive chats. I learned how to manage text input and receive responses from bots I created for the purpose. The use of 'setTimeout' and timers, in general, was a fundamental part of emulating the natural rhythm of a conversation. **Conversation Management:** The project included creating and managing a list of contacts with which it was possible to start a conversation, continue typing, and receive responses. It was fascinating to implement features like starting new chats from scratch and the ability to delete individual messages or the entire chat, just like in WhatsApp. **Simulated Realism:** To add a touch of realism, I included indications of the 'last seen' status and the 'typing' notification beneath the recipient's name during real-time chat. In summary, this project represented an opportunity to experiment and learn the basic concepts of HTML, CSS, and JavaScript. Although the final result was a simple WhatsApp clone, it was a significant step in my learning journey, providing me with a solid foundation for future projects.",
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
                        description : " **Student Project: Carousel** This school project provided an opportunity to explore carousel dynamics and gain fundamental skills in HTML, CSS, and JavaScript. The task was to create a custom carousel from scratch, with a focus on implementing infinite loops and dynamic image behaviors. **Learned Technologies:** During the development of the 'Carousel' project, I developed a deeper understanding of HTML, CSS, and JavaScript. I learned how to structure HTML markup for images and controls, manage CSS styles to create dynamic and glowing previews, and implement carousel logic using JavaScript. **Infinite Loops:** A key aspect of the project was to create a carousel with infinite loops, allowing images to scroll endlessly. I reasoned about how the image index needed to be managed to ensure a continuous flow. **Dynamic Behaviors:** I worked to make the carousel interactive and engaging. When an image became active, it was displayed larger, while the previews of other images lit up. This required the use of JavaScript events and the management of dynamic CSS classes. **Manual Controls:** I added two control buttons. One allowed manual start or stop of the automatic carousel, where images changed with a 'setInterval.' This required handling click events to enable or disable the timer. **Reverse Rotation:** The other button allowed the reversal of the carousel's rotation, which required a deep understanding of data flow and image index updating. While this was a beginner-level school project, I learned a lot about the interaction between HTML, CSS, and JavaScript, applying the knowledge I had acquired. The 'Carousel' project represents an initial step in my learning journey, preparing me for more complex challenges in the world of web development.",
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
                        description : " **Student Project: Spotify Replica** This straightforward school project aimed to recreate the layout of the popular web app Spotify. Using HTML and CSS, I created a mockup that emulated the visual appearance of the original app. The primary focus was on learning the basics of HTML and CSS for structuring and formatting, along with adding hover effects to interactive elements. It's essential to highlight that this was an educational exercise designed to develop fundamental skills and become familiar with web design dynamics.",
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
                        description : " **Student Project: Responsive Layout with Bootstrap** The 'Responsive Layout' project was a learning exercise focused on using Bootstrap to create responsive web layouts. Leveraging the capabilities of this framework, I customized the layout to adapt to various screen sizes and devices. During the process, I learned how to use Bootstrap's grid classes, responsive components, and utilities to optimize the site's appearance on different devices. This project marked a significant step in understanding the concepts of responsive design and the practical application of a widely used framework in the web community. It's essential to emphasize that this was an educational activity aimed at developing specific skills in the field of web design and responsiveness.",
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
                        description : " **Student Project: Bootstrap Portfolio Layout** The 'Bootstrap Portfolio Layout' project was a focused exercise to develop fundamental skills in HTML, CSS, and Bootstrap for creating a responsive web portfolio. By customizing a layout using Bootstrap, I learned the dynamics of designing a website that adapts to various screen sizes and devices. Throughout the process, I experimented with Bootstrap's grid classes, responsive components, and utilities to ensure that my portfolio was accessible and well-presented on all devices. This project marked a significant step in my education regarding responsive web design and the effective use of Bootstrap to optimize the site's appearance. It's important to emphasize that this was an educational activity aimed at developing basic skills in the field of web design and responsiveness.",
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
                        description : "The 'Classroom' project was a learning exercise designed to develop fundamental skills in HTML, CSS, and Bootstrap. In this case, we tackled the creation of a management system for a class named 'Boolean'. Using web design principles and the basics of Bootstrap, I created a mockup to manage data related to an imaginary class. The primary goal was to understand how to structure a web application, design effective layouts, and utilize Bootstrap to create a management application. Although it was a school exercise, it was a significant step in learning the dynamics of web development and the practical application of the concepts learned.",
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
                        description : "The 'Dropbox Website Clone' project was an educational exercise aimed at learning the fundamentals of HTML, CSS, and Bootstrap. The objective was to replicate the main page of the Dropbox website, using the skills acquired in the classroom. I created a mockup that captured the appearance and structure of the page to closely study the design of complex web layouts and element positioning. While it was a study project, it provided valuable experience in web user interface design and the effective use of front-end technologies.",
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
                        description : "The 'Discord clone' project was an educational exercise aimed at learning the basics of HTML, CSS, and Bootstrap. The goal was to replicate the Discord web page, a widely used communication platform. Using the skills acquired in class, I created a mockup that captured the appearance and structure of the Discord page. This project allowed me to closely study the design of complex web layouts, element positioning, and the use of styles to achieve a Discord-like appearance. Although it was a study project, it helped develop essential skills in web user interface design and the practical application of front-end technologies.",
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