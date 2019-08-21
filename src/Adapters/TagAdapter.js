class TagAdapter {
    static getAll() {
        return fetch(this.url, this.options)
            .then(r => r.json())
            .then(articles => {
                const tags = [];
                articles.forEach(article => {
                    article.tags.forEach(tag => tags.push(tag))
                })
                return [...new Set(tags)];
            });
    }
}

TagAdapter.url = './articles.json';
TagAdapter.options = {
    method: 'GET',
    credentials: 'include', // fetch doesn't include cookies by default
    headers: {
        accepts: 'application/json',
    },
};

export default TagAdapter;
