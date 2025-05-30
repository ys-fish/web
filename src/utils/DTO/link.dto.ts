import { Web } from "./web.dto";

export interface Link {
  id?: string;
  linkname: string;

  linkdosc: string;

  linkimage: string;

  linkuser?: string;

  process: string;

  webs?: Array<Web>;

  sort:string
}
