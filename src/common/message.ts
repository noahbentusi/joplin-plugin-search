export interface WebViewMessage {
    event: string;
    value?: any;
}

export type ChannelHandler = (...args: any) => Promise<any>;

export type ChannelType =
    (name: string, ...args: any) => Promise<any>;

export type ChannelRequest = {
    requestId: string,
    name: string,
    args: any[]
};

export type ChannelResponse = {
    requestId: string,
    isException: boolean,
    value: any
};

export type NoteTarget = {
    notebookId: string,
    notebookName: string,

    noteId: string,
    noteName: string
};

export type Line = {
    lineNumber: number,
    lineContent: string
};

export enum ChannelEvent {
    requestEvent = "request",
    responseEvent = "response"
}
