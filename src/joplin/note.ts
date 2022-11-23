import { Link, ID, NoteLink } from "./note-link";

export enum NODE_TYPE {
  NOTE = "NOTE",
  TAG = "TAG"
}

export interface NoteBook {
  id: string;
  title: string;
  parentId?: string;
}

export default interface Note {
  id: string;
  title: string;
  links: NoteLink[];
  parent_id?: string;
  body?: string;
  degree?: number;
  visitLinks?: boolean;
  tags?: string[];
}

export function parseJoplinNote(joplinNote : any) : Note {
  const note = {
    id: joplinNote.id,
    title: joplinNote.title,
    links: [],
  };
  
  note.links = parseNoteLinks(joplinNote);

  return note;
}

export function parseNoteLinks(joplinNote: any) : NoteLink[] {
  const links : NoteLink[] = [];
  // TODO: needs to handle resource links vs note links. see 4. Tips note for
  // webclipper screenshot.
  // https://stackoverflow.com/questions/37462126/regex-match-markdown-link
  const linkRegexp = /\[\]|\[.*?\]\(:\/(.*?)\)/g;
  var match = linkRegexp.exec(joplinNote.body);
  while (match != null) {
    if (match[1] !== undefined) {
      const target = match[1];

      let [noteId, elementId] = target.split('#');

      const link = {
        noteId: noteId,
        elementId: elementId
      }

      links.push(link);
    }
    match = linkRegexp.exec(joplinNote.body);
  }
  return links;
}