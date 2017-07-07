export class TipListModel {

  Description: string;
  lstMarket: Array<Market>;

  constructor() { }
}

class Market {
  MarketID: number;
  Description: string;
}
