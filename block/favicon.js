/**
 * 网页head中加图标
 */
export const head = (href) => {
    return [
        ['link', {rel: 'shortcut icon', href: href || '/favicon.ico'}]
    ]
}


export default head;