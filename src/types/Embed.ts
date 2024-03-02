interface EmbedField {
    name: string;
    value: string;
}

interface Embed {
    title: string;
    description: string;
    fields: EmbedField[];
    color: number;
    timestamp: Date;
    footer: {
        text: string;
    };
}

export { Embed, EmbedField };