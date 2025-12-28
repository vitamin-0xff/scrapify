export type _RootElement = _Element | _Text | _Link

export type _Element = {
    selectorContent: string;
    name: string
    type: 'id' | 'class';
    _type: 'element' | 'text';
    chidren: _RootElement[];
}

export type _Text = {
    _type: 'text';
    selectorContent: string;
    textContent: string;
}

export type _Link = {
    _type: 'link';
    href: string;
    selectorContent: string;
    textContent: string;
}

export type ElementSerialized = {
    displayName: string;
    selectorContent: string;
    type: 'id' | 'class';
}

export type ScrapingTemplate = {
    rootElement: ElementSerialized;
    extractorElements: ElementSerialized[];
}

type TextElementJson = {
    _type: 'text';
    selectorContent: string;
    textContent: string;
    children?: TextElementJson[];
}

type LinkElementJson = {
    _type: 'link';
    selectorContent: string;
    href: string;
    textContent: string;
}

type ContainerElementJson = {
    _type: 'element';
    selectorContent: string;
    name: string;
    type: 'id' | 'class';
    children: (TextElementJson | LinkElementJson | ContainerElementJson)[];
}
export type ElementJson = TextElementJson | LinkElementJson | ContainerElementJson;

export type { ContainerElementJson, TextElementJson, LinkElementJson };

export const fromElementToJsonElement = (element: _RootElement): ElementJson | null => {
    if (element._type === 'text' && 'textContent' in element) {
        const textElement: TextElementJson = {
            _type: 'text',
            selectorContent: element.selectorContent,
            textContent: element.textContent,
        };
        return textElement;
    } else if (element._type === 'link') {
        const linkElement: LinkElementJson = {
            _type: 'link',
            selectorContent: element.selectorContent,
            href: element.href,
            textContent: element.textContent,
        };
        return linkElement;
    } else if (element._type === 'element') {
        const serializeNestedChildren = element.chidren.map(fromElementToJsonElement).filter(e => e != null)
        if(serializeNestedChildren.length === 0) {
            return null;
        }
        const containerElement: ContainerElementJson = {
            _type: 'element',
            selectorContent: element.selectorContent,
            name: element.name,
            type: element.type,
            children: serializeNestedChildren,
        };
        return containerElement;
    }
    return null;
}