export type Item = {
id: string;
title: string;
price: number;
desc?: string;
veg?: boolean;
image?: string;
};


export type Section = {
id: string;
title: string;
items: Item[];
};