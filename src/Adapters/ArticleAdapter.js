class ArticleAdapter {
    static getAll() {
        return fetch('./articles.json').then(r => r.json());
    }
}

ArticleAdapter.url = '/api/v1/notes';
ArticleAdapter.options = {
    method: 'GET',
    credentials: 'include', // fetch doesn't include cookies by default
    headers: {
        accepts: 'application/json',
    },
};

export default ArticleAdapter;