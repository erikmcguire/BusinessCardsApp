import * as firebase from 'firebase';

export class Card {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   organization: string;
   position: string;
   phone: string;
   address: string;
   author: string;
   addedAt: Date;

   constructor(obj?: any) {
    this.id              = obj && obj.id              || null;
    this.firstName       = obj && obj.firstName       || null;
    this.lastName        = obj && obj.lastName        || null;
    this.email           = obj && obj.email           || null;
    this.organization    = obj && obj.organization    || null;
    this.position        = obj && obj.position        || null;
    this.phone           = obj && obj.phone           || null;
    this.address         = obj && obj.address         || null;
    this.author          = obj && obj.author          || null;
    this.addedAt         = obj && obj.addedAt         || null;
}
 }
