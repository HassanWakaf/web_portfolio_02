/* ── Edit this file to add / update projects. ─────────────────────────
   Every page (including Home) reads from here, so a project only needs
   to be entered once. Set `featured: true` to have it show up on Home.
------------------------------------------------------------------------ */

const PORTFOLIO_DATA = {

    interactiveArt: [
        {
            id: 'ia-01',
            title: 'Project title placeholder',
            image: 'assets/media/interactive-art-01.jpg', // or use `video:` for a local file
            description: 'Short description of the installation — what it is, how it responds to the viewer, what it explores.',
            date: '2025',
            location: 'Venue, City, Country',
            keywords: ['installation', 'sensor', 'projection'],
            featured: true
        },
        {
            id: 'ia-02',
            title: 'Second project placeholder',
            image: 'assets/media/interactive-art-02.jpg',
            description: 'Replace with real documentation, description, and details.',
            date: '2024',
            location: 'Venue, City, Country',
            keywords: ['sound', 'interaction'],
            featured: false
        }
    ],

    visualArtTimebased: [
        {
            id: 'vt-01',
            title: 'Film / video title placeholder',
            embed: 'https://player.vimeo.com/video/VIMEO_ID', // or a YouTube embed URL
            description: 'Short description of the piece.',
            date: '2025',
            tools: ['TouchDesigner', 'After Effects'],
            keywords: ['short film', 'generative'],
            featured: true
        },
        {
            id: 'vt-02',
            title: 'Second video placeholder',
            video: 'assets/media/visual-art-timebased-02.mp4', // local upload instead of an embed
            description: 'Replace with your real video, description, date, tools.',
            date: '2024',
            tools: ['Blender'],
            keywords: ['3D', 'animation'],
            featured: false
        }
    ],

    visualArtStills: [
        {
            id: 'vs-01',
            title: 'Still work title placeholder',
            image: 'assets/media/visual-art-stills-01.jpg',
            description: 'Short description of the piece.',
            date: '2025',
            tools: ['Photoshop', 'Blender'],
            keywords: ['digital collage'],
            featured: true
        },
        {
            id: 'vs-02',
            title: 'Second still placeholder',
            image: 'assets/media/visual-art-stills-02.jpg',
            description: 'Replace with real image, description, date, tools.',
            date: '2024',
            tools: ['Procreate'],
            keywords: ['illustration'],
            featured: false
        }
    ],

    creativeCoding: [
        {
            id: 'cc-01',
            title: 'p5.js sketch placeholder A',
            sketchUrl: 'sketches/sketch-a/index.html', // path to the sketch's own html file
            description: 'What the sketch does and how the viewer can interact with it.',
            tools: ['p5.js']
        },
        {
            id: 'cc-02',
            title: 'p5.js sketch placeholder B',
            sketchUrl: 'sketches/sketch-b/index.html',
            description: 'Second sketch — replace with your real project.',
            tools: ['p5.js', 'ml5.js']
        }
    ]
};