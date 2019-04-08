export class Ingredient {

/* No need to decalre them here.
   instead use shortcut below in xtor

  public name: string;
  public amount: number;
*/


  /*
      Angular provides a shortcut in the xtor to make these class properties
      available to save declaring them as above. Simply use keyword public
   */
  constructor(public name: string, public amount: number) {}
}

