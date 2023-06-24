export class AddImageDto {
  constructor(
    public isSuccess: boolean,
    public message: string = '',
    public urls: string[] = []
  ) {}
}
