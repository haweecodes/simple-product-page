
export interface FootprintData {
    title: string;
    life_span: {
        title: string;
        description: string;
        icon: string;
    };
    return_policy: {
        title: string;
        description: string;
        icon: string;
    };
}

export interface FootprintStackedLayoutProps {
    footprintData: FootprintData;
}
