import joplin from 'api';

import { 
    WebViewMessage,
    ChannelEvent,
    ChannelType,
    ChannelHandler,

    ChannelRequest,
    ChannelResponse
} from "./message";

import { timeout } from "./utils";

export function hostChannel(panelId: string, handlers: Map<string, ChannelHandler>): ChannelType {
    let local = {
        stubs: { }
    };

    joplin.views.panels.onMessage(panelId, async (message: WebViewMessage): Promise<any> =>  {
        if (message.event == ChannelEvent.responseEvent) {
            const response: ChannelResponse = message.value;

            const stub = local.stubs[response.requestId];
            if (stub == null)
                return;

            return response.isException?
                stub.reject(response.value):
                stub.resolve(response.value);
        } else
        if (message.event == ChannelEvent.requestEvent) {
            const request: ChannelRequest = message.value;

            const handler = handlers.get(request.name);
            if (handler == null)
                return Promise.reject(new Error("no that handler"));

            return handler.apply(null, request.args);
        }

        return Promise.resolve(true);
    });

    return (name: string, ...args: any): Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            const requestId = `${name}-${Date.now()}`;

            local.stubs[requestId] = {
                resolve, reject
            };

            joplin.views.panels.postMessage(panelId, {
                event: ChannelEvent.requestEvent,
                value: {
                    requestId,
                    name, args
                }
            });
        });
    };
}

export type {
    ChannelType,
    ChannelHandler
}