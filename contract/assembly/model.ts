import { context, PersistentVector } from "near-sdk-as"

@nearBindgen
export class ListedTask {
  sender: string;
  done: boolean;
  constructor(public text: string) {
    this.sender = context.sender;
  }

}

export const tasks = new PersistentVector<ListedTask>("t")