describe("Gilded Rose", function() {
  var expected = [];

  beforeEach(function(){
    expected = [];
    update_quality();
  });

  afterEach(function() {
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  })

  it("After Day 1", function() {
    expected.push(new Item('+5 Dexterity Vest', 9, 19));
    expected.push(new Item('Aged Brie', 1, 1));
    expected.push(new Item('Elixir of the Mongoose', 4, 6));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21));
    expected.push(new Item('Conjured Mana Cake', 2, 4));
  });
  it("After Day 2", function() {
    expected.push(new Item('+5 Dexterity Vest', 8, 18));
    expected.push(new Item('Aged Brie', 0, 2));
    expected.push(new Item('Elixir of the Mongoose', 3, 5));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 13, 22));
    expected.push(new Item('Conjured Mana Cake', 1, 2));
  });
  it("After Day 3", function() {
    expected.push(new Item('+5 Dexterity Vest', 7, 17));
    expected.push(new Item('Aged Brie', -1, 4));
    expected.push(new Item('Elixir of the Mongoose', 2, 4));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 12, 23));
    expected.push(new Item('Conjured Mana Cake', 0, 0));
  });
  it("After Day 4", function() {
    expected.push(new Item('+5 Dexterity Vest', 6, 16));
    expected.push(new Item('Aged Brie', -2, 6));
    expected.push(new Item('Elixir of the Mongoose', 1, 3));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 11, 24));
    expected.push(new Item('Conjured Mana Cake', -1, 0));
  });
  it("After Day 5", function() {
    expected.push(new Item('+5 Dexterity Vest', 5, 15));
    expected.push(new Item('Aged Brie', -3, 8));
    expected.push(new Item('Elixir of the Mongoose', 0, 2));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25));
    expected.push(new Item('Conjured Mana Cake', -2, 0));
  });
  it("After Day 6", function() {
    expected.push(new Item('+5 Dexterity Vest', 4, 14));
    expected.push(new Item('Aged Brie', -4, 10));
    expected.push(new Item('Elixir of the Mongoose', -1, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 27));
    expected.push(new Item('Conjured Mana Cake', -3, 0));
  });
  it("After Day 7", function() {
    expected.push(new Item('+5 Dexterity Vest', 3, 13));
    expected.push(new Item('Aged Brie', -5, 12));
    expected.push(new Item('Elixir of the Mongoose', -2, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 8, 29));
    expected.push(new Item('Conjured Mana Cake', -4, 0));
  });
  it("After Day 8", function() {
    expected.push(new Item('+5 Dexterity Vest', 2, 12));
    expected.push(new Item('Aged Brie', -6, 14));
    expected.push(new Item('Elixir of the Mongoose', -3, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 7, 31));
    expected.push(new Item('Conjured Mana Cake', -5, 0));
  });
  it("After Day 9", function() {
    expected.push(new Item('+5 Dexterity Vest', 1, 11));
    expected.push(new Item('Aged Brie', -7, 16));
    expected.push(new Item('Elixir of the Mongoose', -4, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 6, 33));
    expected.push(new Item('Conjured Mana Cake', -6, 0));
  });
  it("After Day 10", function() {
    expected.push(new Item('+5 Dexterity Vest', 0, 10));
    expected.push(new Item('Aged Brie', -8, 18));
    expected.push(new Item('Elixir of the Mongoose', -5, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 35));
    expected.push(new Item('Conjured Mana Cake', -7, 0));
  });
  it("After Day 11", function() {
    expected.push(new Item('+5 Dexterity Vest', -1, 8));
    expected.push(new Item('Aged Brie', -9, 20));
    expected.push(new Item('Elixir of the Mongoose', -6, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 4, 38));
    expected.push(new Item('Conjured Mana Cake', -8, 0));
  });
  it("After Day 12", function() {
    expected.push(new Item('+5 Dexterity Vest', -2, 6));
    expected.push(new Item('Aged Brie', -10, 22));
    expected.push(new Item('Elixir of the Mongoose', -7, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 3, 41));
    expected.push(new Item('Conjured Mana Cake', -9, 0));
  });
  it("After Day 13", function() {
    expected.push(new Item('+5 Dexterity Vest', -3, 4));
    expected.push(new Item('Aged Brie', -11, 24));
    expected.push(new Item('Elixir of the Mongoose', -8, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 2, 44));
    expected.push(new Item('Conjured Mana Cake', -10, 0));
  });
  it("After Day 14", function() {
    expected.push(new Item('+5 Dexterity Vest', -4, 2));
    expected.push(new Item('Aged Brie', -12, 26));
    expected.push(new Item('Elixir of the Mongoose', -9, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 1, 47));
    expected.push(new Item('Conjured Mana Cake', -11, 0));
  });
  it("After Day 15", function() {
    expected.push(new Item('+5 Dexterity Vest', -5, 0));
    expected.push(new Item('Aged Brie', -13, 28));
    expected.push(new Item('Elixir of the Mongoose', -10, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50));
    expected.push(new Item('Conjured Mana Cake', -12, 0));
  });
  it("After Day 16", function() {
    expected.push(new Item('+5 Dexterity Vest', -6, 0));
    expected.push(new Item('Aged Brie', -14, 30));
    expected.push(new Item('Elixir of the Mongoose', -11, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0));
    expected.push(new Item('Conjured Mana Cake', -13, 0));
  });
  it("After Day 40", function() {
    for (let i = 17; i <= 40; i++) {
      update_quality()
    }
    expected.push(new Item('+5 Dexterity Vest', -31, 0));
    expected.push(new Item('Aged Brie', -39, 50));
    expected.push(new Item('Elixir of the Mongoose', -36, 0));
    expected.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    expected.push(new Item('Backstage passes to a TAFKAL80ETC concert', -26, 0));
    expected.push(new Item('Conjured Mana Cake', -38, 0));
  });

});
