export class User {
  constructor(
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public email?: string,
    public contact?: string
  ) {}
}