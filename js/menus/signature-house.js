/* Signature House — shared base menu (Aurelia Mayfair) + documented regional adaptations.
   Item format: [name, description, price, tag?] */
window.AURELIA_MENUS = window.AURELIA_MENUS || {};
window.AURELIA_MENUS["signature-house"] = {
  intro: "All Signature Houses share the same foundational menu. Regional adaptations are marked.",
  sections: [
    {t:"Signature Starters", i:[
      ["Oscietra Caviar 30g","Cultured butter blini, crème fraîche, chive","$145"],
      ["Oscietra Caviar 50g","Full service, mother-of-pearl spoon, all accompaniments","$230"],
      ["Bluefin Tuna Tartare","Ponzu gel, yuzu crème, sesame tuile, shiso","$65"],
      ["Wagyu Carpaccio A5","White truffle oil, aged Parmesan, micro rocket, capers","$85"],
      ["Grilled King Prawns","Bisque butter, garlic confit, sourdough crisps","$72"],
      ["Foie Gras Torchon","Brioche, fig-port jam, Sauternes gelée","$95"],
      ["Hand-Dived Scallops","Cauliflower purée, crispy pancetta, golden raisin, truffle","$88"],
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
      ["Wagyu Ribeye A5 250g","Bone marrow jus, pommes soufflés, watercress","$195"],
      ["Wagyu Ribeye A5 400g","As above — sharing cut","$310"],
      ["Miso Black Cod","Yuzu butter, dashi broth, daikon, pickled ginger","$115"],
      ["Saffron Lobster Pasta","Hand-cut tagliolini, cognac bisque, lobster tail","$145"],
      ["Lamb Saddle","Smoked aubergine purée, harissa, pomegranate jus","$135"],
      ["Wild Sea Bass","Champagne velouté, samphire, brown butter capers","$125"],
      ["Black Truffle Risotto","Aged Parmesan 36-month, chive, Périgord truffle shavings","$98"]]},
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
      ["Chocolate Fondant","Valrhona 72%, salted caramel heart, vanilla ice cream","$36"],
      ["Cheese Trolley","5 cheeses, fig compote, walnut bread, quince","$55"],
      ["Petit Fours","Salted caramel bonbon, pistachio macaron, dark truffle","$18"]]},
    {t:"Premium Mocktails", i:[
      ["The Aurelia","White grape, yuzu, elderflower, sparkling water","$22"],
      ["Cedar Garden","Cucumber, mint, lime, soda, fig shrub","$20"],
      ["Golden Hour","Mango, turmeric, ginger, coconut water","$18"],
      ["Bergamot Bloom","Earl Grey syrup, lemon, honey, tonic","$20"],
      ["Midnight Fig","Fig, blackcurrant, rosemary, sparkling water","$22"]]},
    {t:"Teas & Coffee", i:[
      ["Single-Origin Pour Over","Rotating: Ethiopia Yirgacheffe / Yemen Mocha","$18"],
      ["Japanese Matcha Ceremony","Ceremonial grade, traditional preparation","$22"],
      ["Rare Teas Selection","Silver Needle, Da Hong Pao, Gyokuro, Bai Mu Dan","$16–$28"],
      ["Espresso / Macchiato","House blend, La Marzocco","$8"],
      ["Arabic Coffee","Cardamom, served with dates","$16"]]},
    {t:"Wine & Champagne", i:[
      ["Krug Grande Cuvée NV","Reims, Champagne","$380 / bottle"],
      ["Dom Pérignon 2015","Épernay, Champagne","$450 / bottle"],
      ["Pétrus 2012","Pomerol, Bordeaux","$4,800 / bottle"],
      ["Opus One 2019","Napa Valley, California","$680 / bottle"],
      ["Puligny-Montrachet, Louis Jadot 2019","Burgundy","$220 / bottle"],
      ["Sassicaia 2018","Bolgheri, Tuscany","$520 / bottle"],
      ["House Champagne by glass","Billecart-Salmon Blanc de Blancs","$38 / glass"],
      ["Wine Pairing Menu (6 courses)","Head Sommelier selection","$195 / person"]]}
  ],
  adapt: {
    "aurelia-mayfair": {},
    "aurelia-dubai-palm": {
      remove:["House Champagne by glass"],
      add:{
        "Signature Starters":[["Beluga Caviar 30g","Available on request","Market Price"],["Grilled Langoustine ×4","","$125"],["Sea Urchin Toast","","$95"]],
        "Main Courses":[["Whole Roasted Turbot (for 2)","Brown butter, capers, lemon — tableside","$380"]],
        "Premium Mocktails":[["Arabian Bloom","Rose water, jasmine, lychee, soda","$30"],["Saffron Spritz","Saffron syrup, lemon, sparkling water","$30"]],
        "Teas & Coffee":[["Arabic Coffee Ceremony","Cardamom, rosewater, saffron dates","$22"],["Yemen Mocha Pour Over","Rarest single origin","$28"]],
        "Wine & Champagne":[["Krug Clos du Mesnil 2008","","$2,200 / bottle"],["Le Pin 2018","Pomerol — allocated","$3,800 / bottle"],["Wine Pairing (8 courses)","Head Sommelier","$380 / person"]]}},
    "aurelia-paris": {
      add:{
        "Desserts & Pastry":[["Soufflé Grand Marnier","Must be ordered at the start of the meal — 25-minute preparation","$45"]],
        "Wine & Champagne":[["Romanée-Conti 2018","Vosne-Romanée — on reservation","Market Price"],["Montrachet, DRC 2019","","$1,800 / bottle"]]}},
    "aurelia-singapore-marina": {
      remove:["House Champagne by glass","Wine Pairing Menu (6 courses)"],
      add:{
        "Signature Starters":[["Singapore Chilli Crab Ravioli","","$72"],["Sea Urchin Toast","","$95"]],
        "Soups":[["Singapore Chilli Crab Bisque","Chilli, ginger, crab, cream — Singapore signature","SGD 95 / $72"]],
        "Main Courses":[["Peking Duck Aurelia-Style (for 2)","Sliced tableside, house hoisin, cucumber, shallot, mandarin pancake","SGD 280 / $214"]],
        "Sides":[["Wok-Fried Water Spinach","Garlic, oyster sauce","SGD 28 / $21"],["Jasmine Rice","Steamed, aromatic","SGD 12 / $9"]],
        "Desserts & Pastry":[["Pandan Panna Cotta","Coconut cream, palm sugar caramel, sesame tuile","SGD 52 / $40"],["Mango Sticky Rice Reinvented","Organic mango, coconut milk foam, glutinous rice cake","SGD 48 / $37"]],
        "Premium Mocktails":[["Singapore Sling Zero Proof","Pineapple, cherry, hibiscus, grenadine, soda","SGD 28 / $21"],["Pandan Cooler","Pandan syrup, coconut water, lime, sparkling","SGD 26 / $20"]],
        "Teas & Coffee":[["Singapore Kopi (Elevated)","Nanyang-style, premium beans","SGD 22 / $17"],["Taiwanese High Mountain Oolong","Li Shan, 2500m elevation","SGD 45 / $34"]],
        "Wine & Champagne":[["Champagne by glass","Krug Grande Cuvée","SGD 105 / $80"],["Wine Pairing (8 courses)","Head Sommelier","SGD 520 / $398"]]}}
  }
};
