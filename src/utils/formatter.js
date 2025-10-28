export const toBoolean = (val) => {
    if ([false, 'false', 0, '0'].includes(val)) {
        return Boolean(false);
    }
    else if ([true, 'true', 1, '1'].includes(val)) {
        return Boolean(true);
    }
};
export const Slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // mellemrum til bindestreger
        .replace(/[^\w\-]+/g, '') // fjern specialtegn
        .replace(/\-\-+/g, '-'); // fjern dobbelt-bindestreger
};
