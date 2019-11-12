export class Card {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   organization: string;
   phone: string;

   constructor(obj?: any) {
    this.id              = obj && obj.id              || null;
    this.firstName       = obj && obj.firstName       || null;
    this.lastName        = obj && obj.lastName        || null;
    this.email           = obj && obj.email           || null;
    this.organization    = obj && obj.organization    || null;
    this.phone           = obj && obj.phone           || null;
}
 }
