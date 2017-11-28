export class Hero {
  constructor (
    public id: number,
    public name: string,
    public phone: string,
    public email: string,
    public power: string,
    public alterEgo?: string
  ) {}
}
