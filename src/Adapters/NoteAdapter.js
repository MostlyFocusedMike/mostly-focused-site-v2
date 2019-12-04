import path from 'path';

/** Source of truth for titles, default home note must come first */
const NOTE_TITLES = [
    {
        file: 'home',
        display: 'Home',
    },
    {
        file: 'express-getting-started',
        display: 'Express: Getting Started',
    },
    {
        file: 'test',
        display: 'Test',
    },
];

const getDefaultFile = () => NOTE_TITLES[0].file;

const convertTitleToFile = (title) => {
    return title
        .toLocaleLowerCase()
        .replace(/:/g, '')
        .replace(/ /g, '-');
};

const convertTitleToRoute = (title) => {
    const fileName = convertTitleToFile(title);
    return (fileName === getDefaultFile()) ? '' : `/${fileName}`;
};

const allFiles = NOTE_TITLES.map(({ file }) => file);

const ArticleAdapter = {
    /**
     * Retrieve a single note from the markdown folder if title exists in list
     * @param {string} articleFileName - The file name
     */
    getOne: (articleFileName = getDefaultFile()) => {
        if (!allFiles.includes(articleFileName)) return Promise.resolve({ notFound: true });

        // remember this gets compiled so the / is the 'public' folder
        return fetch(path.join(__dirname, 'markdown', `${articleFileName}.md`))
            .then(r => r.text())
            .then(text => {
                return {
                    text,
                };
            });
    },

    /** Return a list of the note titles and links to them */
    getAllTitles: () => Promise.resolve(NOTE_TITLES.map(({ file }) => ({ file, link: convertTitleToRoute(file) }))),
};

export default ArticleAdapter;
