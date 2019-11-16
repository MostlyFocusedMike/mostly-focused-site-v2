const NOTE_TITLES = [
    'test',
];

const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
    },
};

const ArticleAdapter = {
    /**
     * Retrieve a single note from the markdown folder
     * @param {string} articleTitle - The title of the file without .md
     */
    getOne: (articleTitle) => {
        return fetch(`./markdown/${articleTitle}.md`, options).then(r => r.text());
    },

    /** Return a list of the note titles alphabetically sorted */
    getAllTitles: () => {
        return Promise.resolve(NOTE_TITLES.sort());
    },
};

export default ArticleAdapter;
