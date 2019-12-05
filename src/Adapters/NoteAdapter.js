import path from 'path';

/** Default note title */
const DEFAULT_NOTE = 'home';
const MARKDOWN_DIR = 'markdown';

/** Source of truth for titles */
const NOTE_FILES = {
    [DEFAULT_NOTE]: 'Home',
    'express-js-getting-started': 'Express.JS: Getting Started',
    test: 'Test',
};

const getFileLink = (fileName) => {
    const subPath = (fileName === DEFAULT_NOTE) ? '' : `/${fileName}`;
    return `/notes${subPath}`;
};

const ArticleAdapter = {
    /**
     * Retrieve a single note from the markdown folder
     * @param {string} fileName - Note's file name in markdown folder, no .md included
     */
    getOne: (fileName = DEFAULT_NOTE) => {
        if (!NOTE_FILES[fileName]) return Promise.resolve({ notFound: true });

        // remember this gets compiled so the / is the 'public' folder
        return fetch(path.join(__dirname, MARKDOWN_DIR, `${fileName}.md`))
            .then(r => r.text())
            .then(text => {
                return {
                    title: NOTE_FILES[fileName],
                    text,
                };
            });
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
