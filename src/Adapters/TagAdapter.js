class TagAdapter {
    static getAll() {
        return fetch(this.url, this.options)
            .then(r => r.json())
            .then(articles => {
                const tags = [];
                articles.forEach(article => {
                    article.tags.forEach(tag => {
                        if (tags.findIndex(x => x.slug === tag.slug) === -1) {
                            tags.push(tag);
                        }
                    });
                });
                tags.sort((a, b) => {
                    if (a.slug > b.slug) return 1;
                    if (a.slug < b.slug) return -1;
                    return 0;
                });
                return tags;
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
