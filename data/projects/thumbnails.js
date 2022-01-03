// stock photo placeholder link https://picsum.photos/1920/1080

/**
 * An array of data for project thumbnails.
 */
export const thumbnails = [
    {
        title: 'SongNebula',
        timeline: 'December 2021 - January 2022',
        description: 'A web application for visually exploring music based on Spotify audio analysis data.\
        A Gaussian Mixture Model was fitted to the songs in the database, allowing the user to listen \
        to each cluster. The songs are plotted in three.js',
        image: '/media/images/songnebula.png',
        demo: 'https://songnebula.com/',
        tags: ['Full-Stack', 'Three.js', 'Next.js'],
        github: 'http://github.com/alexkalinins/song-nebula'
    },
    {
        title: 'TeaBlocks',
        timeline: 'December 2020 - Ongoing',
        description: 'An visual, in-browser, node-based programming language for teaching kids the basics \
        of programming. The system allows for basic arithmetic, loops, and control flow. The system can be\
        used to create and manipulate shapes in HTML Canvas.',
        image: '/media/images/teablocks.png',
        link: 'https://www.google.com',
        tags: ['Full-Stack', 'React', 'TypeScript'],
        demo: 'https://alexkalinins.github.io/teablocks-demo/',
    },
    {
        title: 'Postcards GAN',
        timeline: 'October 2021',
        description: 'A personal foray into Generative Adversarial Networks (GAN). Postcards GAN was trained\
        on a large collection of old postcards that share the aesthetic of post-war Kodachrome. The aim of this\
        project was to experiment with GANs and generate images that look like postcards.',
        image: '/media/images/postcards-smallset-100epochs.gif',
        link: 'https://www.google.com',
        tags: ['Machine Learning', 'TensorFlow', 'Python'],
    },
    {
        title: 'Hairnet AI',
        timeline: 'October - December 2020',
        description: 'A personal foray into Convolutuonal Neural Networks. A neural network was trained, \
        on a set of randomly generated images in blender, to predict parameters needed to generate a given image \
        in Blender.',
        image: '/media/images/hairnet-data.jpg',
        link: 'https://www.google.com',
        tags: ['Machine Learning', 'PyTorch', 'Blender'],
        github: 'https://github.com/alexkalinins/hairnet-ai'
    },
    {
        title: '\"Swiss Cheese\" Game',
        timeline: 'November - December 2018',
        description: 'A maze exploration game written in Java using Randomized Depth-First Search algorithm\
        for procedural maze generation. The raycasting rendering engine was built from scratch.',
        image: '/media/images/swisscheese.png',
        link: 'https://www.google.com',
        tags: ['Java', 'Game Dev', 'Algorithm'],
        github: 'https://github.com/alexkalinins/swisscheese'
    },
    {
        title: 'Portfolio \`22',
        timeline: 'September 2021 - Ongoing',
        description: 'A personal portfolio website. The site was built using NextJS and\
        SCSS. The animations on the hero page (circles and sliding text) use CSS animations.',
        image: '/media/images/portfolio.png',
        link: 'https://www.google.com',
        tags: ['React','NextJS', 'SCSS'],
        github: 'https://github.com/alexkalinins/portfolio',
        demo: 'https://www.alexkalinins.com'
    }
];