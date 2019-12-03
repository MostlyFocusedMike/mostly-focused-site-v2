import path from 'path';

const convertTitleToFile = (title) => {
    return title
        .toLocaleLowerCase()
        .replace(/:/g, '')
        .replace(/ /g, '-');
};

const NOTE_TITLES = [
    'Home',
    'Test',
    'Express: Getting Started',
];

const allFiles = NOTE_TITLES.map((title) => convertTitleToFile(title));

const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
    },
};

const ArticleAdapter = {
    /**
     * Retrieve a single note from the markdown folder if title exists in list
     * @param {string} articleTitle - The display title of the file (no .md or dashes)
     */
    getOne: (articleTitleRaw) => {
        const articleTitle = convertTitleToFile(articleTitleRaw);
        if (!allFiles.includes(articleTitle)) return Promise.resolve({ notFound: true });

        // remember this gets compiled so the / is the 'public' folder
        return fetch(path.join(__dirname, 'markdown', `${articleTitle}.md`), options).then(r => r.text());
    },

    /** Return a list of the note titles alphabetically sorted */
    getAllTitles: () => {
        return Promise.resolve(NOTE_TITLES.sort());
    },
};

export default ArticleAdapter;
