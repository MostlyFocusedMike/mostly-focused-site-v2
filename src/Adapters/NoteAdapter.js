import path from 'path';

/** Default note title */
const DEFAULT_NOTE = 'home';

/** Source of truth for titles */
const NOTE_FILES = {
    [DEFAULT_NOTE]: 'Home',
    'express-js-getting-started': 'Express.JS: Getting Started',
    test: 'Test',
};

// const allFiles = NOTE_FILES.map(({ file }) => file);

const getFileLink = (file) => {
    const subPath = (file === DEFAULT_NOTE) ? '' : `/${file}`;
    return `/notes${subPath}`;
};

const ArticleAdapter = {
    /**
     * Retrieve a single note from the markdown folder if title exists in list
     * @param {string} articleFileName - The file name
     */
    getOne: (articleFileName = DEFAULT_NOTE) => {
        // if (!allFiles.includes(articleFileName)) return Promise.resolve({ notFound: true });

        // // remember this gets compiled so the / is the 'public' folder
        // return fetch(path.join(__dirname, 'markdown', `${articleFileName}.md`))
        //     .then(r => r.text())
        //     .then(text => {
        //         return {
        //             text,
        //         };
        //     });
    },

    /** Return a list of the note titles and links to them */
    getAllTitles: () => {
        const titles = Object.keys(NOTE_FILES).map(file => ({
            title: NOTE_FILES[file],
            link: getFileLink(file),
        }));
        return Promise.resolve(titles);
    },
};

export default ArticleAdapter;
