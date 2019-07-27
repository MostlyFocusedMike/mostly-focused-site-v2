import articlesRaw from './articles';

class ArticleAdapter {
    static getAll() {
        const posts = articlesRaw.payload.references.Post;
        const articles = [];
        Object.keys(posts).forEach((post) => {
            const article = posts[post];
            articles.push({
                id: article.id,
                title: article.title,
                slug: article.slug,
                uniqueSlug: article.uniqueSlug,
                image: `https://miro.medium.com/max/1400/${article.virtuals.previewImage.imageId}`,
                subtitle: article.content.subtitle,
                metaDescription: article.content.metaDescription,
            });
        });

        return Promise.resolve(articles);
    }
}

export default ArticleAdapter;
