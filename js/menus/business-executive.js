/* Business & Executive House — shared power-dining base + regional adaptations. */
window.AURELIA_MENUS = window.AURELIA_MENUS || {};
window.AURELIA_MENUS["business-executive-house"] = {
  intro: "Three Executive Houses — Canary Wharf, Zurich, New York — share a power-dining menu architecture. Canary Wharf offers a 45-minute express guarantee. Zurich prices in CHF. New York adds a dry-aged strip and an iconic Wedge Salad.",
  sections: [
    {t:"Signature Starters", i:[
      ["Oscietra Caviar 30g","Cultured butter blini, crème fraîche, chive","$145"],
      ["Oscietra Caviar 50g","Full service, mother-of-pearl spoon, all accompaniments","$230"],
      ["Bluefin Tuna Tartare","Ponzu gel, yuzu crème, sesame tuile, shiso","$65"],
      ["Wagyu Carpaccio A5","White truffle oil, aged Parmesan, micro rocket, capers","$85"],
      ["Grilled King Prawns","Bisque butter, garlic confit, sourdough crisps","$72"],
      ["Foie Gras Torchon","Brioche, fig-port jam, Sauternes gelée","$95"],
      ["Smoked Salmon Roulade","Cream cheese, cucumber, dill","$48"],
      ["Signature Bread Service","Sourdough, cultured butter, smoked sea salt","Complimentary"]]},
    {t:"Salads", i:[
      ["Burrata & Heirloom Tomato","Aged balsamic, Ligurian olive oil, fresh basil","$42"],
      ["Lobster Salad","Baby gem, tarragon mayo, chive oil, coral","$78"],
      ["Citrus Avocado Salad","Pink grapefruit, watercress, champagne-hazelnut dressing","$36"],
      ["Caesar Reinvented","Romaine hearts, anchovy cream, Parmesan crisp, quail egg","$44"]]},
    {t:"Soups", i:[
      ["Truffle Mushroom Velouté","Black truffle cream, cep oil, chive, hazelnut","$48"],
      ["Lobster Bisque","Cognac, tarragon, cream, coral oil","$56"]]},
    {t:"Main Courses", i:[
      ["Wagyu Ribeye A5 250g","Bone marrow jus, pommes purée","$175–$235"],
      ["Miso Black Cod","Yuzu butter, daikon, dashi","$108–$148"],
      ["Saffron Lobster Pasta","Tagliolini, cognac bisque, lobster tail","$128–$178"],
      ["Lamb Saddle","Aubergine purée, harissa, pomegranate jus","$118–$162"],
      ["Wild Sea Bass / Halibut","Champagne velouté, samphire, brown butter","$115–$158"],
      ["Express Suprême de Volaille","Lemon thyme jus, potato, greens — 30-minute guarantee","$68"],
      ["45-Day Dry-Aged Strip","Bone marrow butter, pommes purée","$185"]]},
    {t:"Sides", i:[
      ["Pommes Purée Robuchon","Butter, cream, chive","$22"],
      ["Pommes Soufflés","Classic French technique","$24"],
      ["Sautéed Wild Mushrooms","Garlic, thyme, parsley","$22"],
      ["Truffle Mac & Cheese","Aged Gruyère, black truffle","$28"],
      ["Seasonal Greens","Herb oil, lemon","$18"],
      ["French Fries","House seasoning, Aurelia aioli","$16"]]},
    {t:"Desserts & Pastry", i:[
      ["Signature Date Cake","Toffee sauce, clotted cream ice cream, crystallised dates","$32"],
      ["Pistachio Tart","Iranian pistachio cream, raspberry coulis, gold leaf","$34"],
      ["Vanilla Mille-Feuille","Madagascan vanilla, caramelised puff pastry, praline","$30"],
      ["Chocolate Fondant","Valrhona 72%, salted caramel heart, vanilla ice cream","$36"]]},
    {t:"Premium Mocktails", i:[
      ["The Aurelia","White grape, yuzu, elderflower","$18–$32"],
      ["Cold Brew Tonic","Cold brew, tonic, orange zest","$16"],
      ["Mint Lemonade","Fresh mint, lemon, sparkling","$14"],
      ["Bergamot Bloom","Earl Grey, honey, lemon, tonic","$20"]]},
    {t:"Teas & Coffee", i:[
      ["Single-Origin Pour Over","Precision extraction, rotating origin","$16–$24"],
      ["Espresso / Double","House blend, La Marzocco","$8 / $10"],
      ["Rare Teas","Premium global selection","$12–$32"]]},
    {t:"Wine & Champagne", i:[
      ["Dom Pérignon 2015","Épernay, Champagne","$420–$510 / bottle"],
      ["Pétrus 2012","Pomerol, Bordeaux","$4,800–$5,500 / bottle"],
      ["Meursault, Domaine Leflaive 2019","Burgundy","$280–$380 / bottle"],
      ["Bordeaux Cru Classé","Rotating Pauillac / Médoc","from $180 / bottle"],
      ["Champagne by glass","Krug Grande Cuvée","$38–$82 / glass"],
      ["Business Lunch Wine Flight (2 glasses)","Sommelier selected","$65 / person"],
      ["Wine Pairing (6–8 courses)","Head Sommelier","$145–$340 / person"]]}
  ],
  adapt: {
    "aurelia-canary-wharf": {
      add:{
        "Salads":[["Asian Tuna Salad","Sashimi tuna, edamame, sesame dressing","$52"]],
        "Desserts & Pastry":[["Cheese Selection","3 cheeses, quince, walnut bread","$40"]]}},
    "aurelia-zurich": {
      add:{
        "Salads":[["Swiss Lake Pike Perch Tartare","Caper, cornichon, chive, Swiss cream","CHF 68 / $74"],["Swiss Cheese & Walnut Salad","Gruyère, walnut, apple, honey dressing","CHF 42 / $46"]],
        "Main Courses":[["Swiss Veal Osso Buco","Gremolata, saffron risotto — elevated Swiss Sunday classic","CHF 175 / $190"],["Swiss Mountain Lamb","Alpine herb crust, potato gratin, rosemary jus","CHF 158 / $172"]],
        "Sides":[["Rösti Cake","Swiss potato rösti — elevated","CHF 22 / $24"],["Alpine Vegetables","Seasonal, butter, herbs","CHF 20 / $22"]],
        "Desserts & Pastry":[["Swiss Chocolate Fondant","Valrhona + Cailler blend, salted caramel","CHF 42 / $46"],["Swiss Cheese Selection","Gruyère AOP, Appenzeller, Raclette, Vacherin — Swiss honey, dried fruit","CHF 65 / $70"]]}},
    "aurelia-new-york-manhattan": {
      remove:["Truffle Mushroom Velouté","Lobster Bisque","45-Day Dry-Aged Strip"],
      add:{
        "Signature Starters":[["New England Lobster Bisque Shot","75ml, cream, tarragon — amuse bouche","$32"]],
        "Salads":[["Classic New York Wedge","Iceberg, blue cheese, crispy bacon, cherry tomato, chive","$44"]],
        "Soups":[["White Truffle Velouté","Cep, white truffle oil, chive cream — autumn/winter","$68"],["New England Lobster Bisque","Cognac, cream, coral oil, tarragon","$72"]],
        "Main Courses":[["New York Strip — 45-Day Dry-Aged","Bone marrow butter, pommes purée — Manhattan signature","$185"]],
        "Sides":[["Creamed Spinach","Aurelia version","$22"]],
        "Desserts & Pastry":[["New York Cheesecake Reinvented","Baked, light, strawberry compote, gold","$38"],["International Cheese Board","7 cheeses, seasonal condiments","$72"]],
        "Teas & Coffee":[["Matcha Ceremony","Ceremonial grade, traditional preparation","$28"]]}}
  }
};
