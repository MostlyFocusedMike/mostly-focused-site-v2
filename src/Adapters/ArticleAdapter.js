class ArticleAdapter {
    static getAll() {
        return fetch(this.url, this.options).then(r => r.json());
    }
}

ArticleAdapter.url = './articles.json';
ArticleAdapter.options = {
    method: 'GET',
    credentials: 'include', // fetch doesn't include cookies by default
    headers: {
        accepts: 'application/json',
    },
};

export default ArticleAdapter;
