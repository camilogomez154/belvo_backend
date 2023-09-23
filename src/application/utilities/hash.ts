import * as bcrypt from 'bcrypt';

export class Hash {
  static encrypt(record: string): string {
    return bcrypt.hashSync(record, bcrypt.genSaltSync(15));
  }

  static compare(record: string, hash: string): boolean {
    return bcrypt.compareSync(record, hash);
  }
}
