export type ID = string;
export type LINK_TYPE = string;

export class Link {
    sourceId: ID
    targetId: ID
    type?: LINK_TYPE
    label?: string
    position?: {start: number, end:number};

    constructor(sourceId: string, targetId: string, type? : LINK_TYPE) {
        this.sourceId = sourceId;
        this.targetId = targetId;
        this.type = type;
    }
}

/**
 * May eventually merge with Link.
 * For now it gives us the freedom to evolve each model 
 * separately.
 */
export interface NoteLink {
    noteId: string
    elementId?: string
    type?: LINK_TYPE,
    label?: string
    position?: {start: number, end:number}
}