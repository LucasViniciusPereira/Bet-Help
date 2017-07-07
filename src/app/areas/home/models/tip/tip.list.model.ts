export class TipListModel {

  Description: string;
  LstMarket: Array<Market>;

  constructor() { }
}

class Market {
  MarketID: number;
  Description: string;
}
