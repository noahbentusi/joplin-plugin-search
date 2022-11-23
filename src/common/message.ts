export interface WebViewMessage {
    event: string;
    value?: any;
}

export type ChannelHandler = (...args: any) => Promise<any>;

export type ChannelType =
    (name: string, ...args: any) => Promise<any>;

export type ChannelRequest = {
    requestId: string,
    args: any[]
};

export type ChannelResponse = {
    requestId: string,
    isException: boolean,
    value: any
};

export enum ChannelEvent {
    requestEvent = "request",
    responseEvent = "response"
}
