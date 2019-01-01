import { UUID } from 'angular2-uuid';

export class Guid {
  /**
   * Generate simple UUID alike.
   */
  public static generate() {
    return UUID.UUID();
  }
}
