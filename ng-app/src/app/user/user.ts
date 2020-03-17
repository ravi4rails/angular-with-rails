export class User {
  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public contact: string;
  public city: string;
  public state: string;
  public country: string;

  constructor(id: number, first_name: string, last_name: string, email: string, contact: string, city: string, state: string, country: string) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.contact = contact;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}