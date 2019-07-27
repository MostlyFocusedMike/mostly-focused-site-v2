/* eslint-disable object-curly-newline */
import articlesRaw from './articles';

const imageBase = 'https://miro.medium.com/max/1400/';

const formatTags = (tags) => {
    return tags.map(({ name, slug, postCount, metadata: { coverImage } }) => {
        const image = coverImage.id ? `${imageBase}${coverImage.id}` : undefined;
        return { name, slug, image, postCount };
    });
}

const formatArticle = (post) => {
    const {
        id,
        title,
        slug,
        uniqueSlug,
        virtuals: { previewImage: { imageId }, tags },
        content: { subtitle, metaDescription },
    } = post;
    const image = imageId ? `${imageBase}${imageId}` : undefined;

    return {
        id,
        title,
        slug,
        uniqueSlug,
        image,
        subtitle,
        metaDescription,
        tags: formatTags(tags),
    };
};

class ArticleAdapter {
    static getAll() {
        const posts = articlesRaw.payload.references.Post;
        const articles = [];
        Object.keys(posts).forEach((post) => {
            articles.push(formatArticle(posts[post]));
        });

        return Promise.resolve(articles);
    }
}

export default ArticleAdapter;
