const getFormattedSubtitle = (subtitle) => {
    return (subtitle && subtitle.length > 75)
        ? `${subtitle.slice(0, 75)}...`
        : subtitle;
};

export {
    getFormattedSubtitle,
};
