import { Dictionary } from "./Dictionary";

export interface Attribute {
    attribute: string;
    value: string;
}

export interface AttributeProps {
    attributes: Attribute[];
    params: Dictionary;
}