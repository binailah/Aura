/* Social Club — shared show-stopper base + regional adaptations. */
window.AURELIA_MENUS = window.AURELIA_MENUS || {};
window.AURELIA_MENUS["social-club"] = {
  intro: "Four Social Clubs — Dubai Downtown, Doha, Beverly Hills, Miami — share a show-stopper menu built for sharing and spectacle. Regional adaptations reflect each city's culture and local hero ingredients.",
  sections: [
    {t:"Signature Starters", i:[
      ["Oscietra Caviar 30g","Cultured butter blini, crème fraîche, chive","$145"],
      ["Oscietra Caviar 50g","Full premium service, all accompaniments","$240"],
      ["Bluefin Tuna Tartare","Ponzu, yuzu cream, sesame, shiso","$72"],
      ["Wagyu Carpaccio A5","Truffle oil, aged Parmesan, micro rocket","$92"],
      ["Grilled King Prawns","Bisque butter, garlic confit, lemon","$78"],
      ["Foie Gras Torchon","Brioche, fig-port jam, Sauternes gelée","$105"],
      ["Rock Oysters ×6","Champagne mignonette, lemon","$88"],
      ["Truffle Arancini","Black truffle, Parmesan, saffron aioli","$62"],
      ["Signature Bread","Sourdough, brown butter, smoked salt","Complimentary"]]},
    {t:"Salads", i:[
      ["Burrata & Heirloom Tomato","Balsamic, olive oil, basil","$48"],
      ["Lobster Salad","Baby gem, tarragon mayo, coral","$88"],
      ["Citrus Avocado","Pink grapefruit, watercress, hazelnut dressing","$42"]]},
    {t:"Soups", i:[
      ["Truffle Mushroom Velouté","Cep oil, chive, hazelnut","$55"],
      ["Lobster Bisque","Cognac, tarragon, cream, coral","$65"]]},
    {t:"Main Courses", i:[
      ["Wagyu Ribeye A5 250g","Bone marrow jus, pommes soufflés","$215"],
      ["Wagyu Tomahawk 1kg (for 2)","Truffle butter, fries — served tableside","$520"],
      ["Miso Black Cod","Yuzu, dashi broth, daikon","$128"],
      ["Saffron Lobster Pasta","Hand-cut tagliolini, cognac bisque, lobster tail","$158"],
      ["Lamb Saddle","Aubergine, harissa, pomegranate jus","$148"],
      ["Wild Sea Bass","Champagne velouté, samphire, brown butter capers","$138"],
      ["Truffle Butter Lobster","Steamed whole lobster, compound butter, fries","$245"]]},
    {t:"Sides", i:[
      ["Pommes Soufflés","Classic technique","$28"],
      ["Truffle Mac & Cheese","Aged Gruyère, black truffle","$35"],
      ["Sautéed Mushrooms","Garlic, thyme","$22"],
      ["Truffle Fries","Truffle salt, Parmesan","$22"]]},
    {t:"Desserts & Pastry", i:[
      ["Signature Date Cake","Toffee, clotted cream, gold leaf","$38"],
      ["Pistachio Tart","Iranian pistachio, raspberry, gold","$40"],
      ["Chocolate Fondant","Valrhona 72%, salted caramel, vanilla ice cream","$42"],
      ["Vanilla Mille-Feuille","Madagascan vanilla, caramelised pastry, praline","$36"],
      ["Rose & Cardamom Panna Cotta","Saffron honeycomb, pistachio dust","$38"],
      ["Petit Fours","Chocolate truffle, macaron, salted caramel","$22"]]},
    {t:"Premium Mocktails", i:[
      ["The Aurelia","White grape, yuzu, elderflower, sparkling","$26"],
      ["Golden Sunset","Mango, passion fruit, turmeric, coconut","$24"],
      ["Midnight Fig","Fig, blackcurrant, rosemary, sparkling","$26"],
      ["Zero-Proof Bellini","White peach purée, sparkling grape juice","$24"]]},
    {t:"Teas & Coffee", i:[
      ["Single-Origin Espresso","Ethiopia Yirgacheffe / Yemen Mocha","$14"],
      ["Rare Teas Selection","Silver Needle, Da Hong Pao, Gyokuro","$22–$38"],
      ["Karak Tea","Saffron, cardamom, condensed milk","$18"],
      ["Arabic Coffee","Cardamom, served with dates","$16"]]},
    {t:"Wine & Champagne", i:[
      ["Krug Grande Cuvée NV","Reims, Champagne","$420 / bottle"],
      ["Dom Pérignon Rosé 2013","Épernay","$680 / bottle"],
      ["Armand de Brignac Gold NV","Brut","$980 / bottle"],
      ["Pétrus 2012","Pomerol, Bordeaux","$4,800 / bottle"],
      ["Opus One 2019","Napa Valley","$720 / bottle"],
      ["Champagne by glass","Laurent-Perrier","$45 / glass"],
      ["Sommelier Pairing (7 courses)","","$280 / person"]]}
  ],
  adapt: {
    "aurelia-dubai-downtown": {
      add:{
        "Salads":[["Wagyu Beef Salad","Thai-inspired dressing, herbs, crispy shallots","$78"]],
        "Premium Mocktails":[["Desert Rose","Rose water, raspberry, lemon, soda","$26"]]}},
    "aurelia-doha": {
      add:{
        "Soups":[["Harees Velouté","Wheat, lamb broth, saffron, dried lemon — Arabic heritage dish","$45"]],
        "Signature Starters":[["Mezze Royale","Hummus, mutabal, fattoush, za'atar bread — luxury Arabic starter","$55"],["Fattoush Royale","Pomegranate, sumac, crispy bread","$38"]],
        "Main Courses":[["Lamb Ouzi (for 4)","Slow-roasted lamb shoulder, saffron rice — advance order required","$480"]],
        "Desserts & Pastry":[["Luqaimat Reinvented","Saffron honey dumplings, pistachio ice cream","$35"],["Umm Ali Royale","Bread pudding, cream, pistachios, rose","$36"]],
        "Premium Mocktails":[["Qamar Al-Din","Apricot nectar, rose water, lemon, sparkling","$22"],["Jallab","Grape, rose water, pine nuts — traditional elevated","$20"]],
        "Teas & Coffee":[["Arabic Coffee Service","Cardamom coffee, dates, rose water","$18"]]}},
    "aurelia-beverly-hills": {
      add:{
        "Signature Starters":[["California Crab Cake","Old Bay-spiced crab, Aurelia remoulade, pickled jalapeño","$72"],["Kale Caesar","Cavolo nero, anchovy cream, Parmesan crisp, crouton","$38"]],
        "Main Courses":[["Plant-Based Wagyu","Redefine Meat collab, pommes purée, jus alternative","$95"]],
        "Sides":[["Kale & Almond","Lemon dressing, Manchego","$22"]],
        "Desserts & Pastry":[["California Cheesecake","Light baked cheesecake, berry compote, gold","$36"]],
        "Premium Mocktails":[["Hollywood Nights","Watermelon, basil, lemon, sparkling","$26"],["California Dreaming","Mango, passion fruit, coconut, lime","$24"],["Rose Garden","Rose water, raspberry, lemon, tonic","$26"]],
        "Teas & Coffee":[["Matcha Latte","Ceremonial grade, oat milk","$14"],["Cold Brew Tonic","Cold brew, tonic, orange zest","$16"]],
        "Wine & Champagne":[["Screaming Eagle 2019","Napa Cabernet — allocated","Market Price"],["Harlan Estate 2018","Napa Valley","$980 / bottle"],["Aubert Chardonnay 2021","Sonoma Coast","$280 / bottle"]]}},
    "aurelia-miami": {
      add:{
        "Salads":[["Hearts of Palm & Mango Salad","Lime, chilli, coriander, toasted coconut","$38"]],
        "Signature Starters":[["Florida Stone Crab Claws ×3","Mustard mayo, drawn butter, lemon","$95"],["Ceviche Royale","Fresh catch, citrus, ají amarillo, coriander, red onion","$68"]],
        "Main Courses":[["Churrasco Wagyu","Wagyu skirt steak, chimichurri, fries, black bean purée","$155"],["Florida Red Snapper","Saffron beurre blanc, samphire, capers — local catch","$148"]],
        "Sides":[["Plantain Chips","Sea salt, aioli — Miami essential","$18"],["Black Bean Purée","Epazote, lime, crema — Cuban inspired","$16"]],
        "Desserts & Pastry":[["Key Lime Tart Reinvented","Florida Key lime curd, graham cracker, Italian meringue","$36"],["Tres Leches Royale","Three milks cake, rose cream, strawberries","$34"],["Tropical Sorbet Trio","Mango, coconut, passion fruit","$28"]],
        "Premium Mocktails":[["Miami Vice Zero","Piña Colada & Strawberry Daiquiri layers — non-alcoholic","$24"],["Cuban Mint","Mint, lime, cane sugar, sparkling — Mojito without alcohol","$20"],["Hibiscus Spritz","Hibiscus, lemon, orange blossom, tonic","$22"]],
        "Teas & Coffee":[["Cuban Cafecito","Strong espresso, turbinado sugar — Miami elevated","$8"],["Matcha Latte","Ceremonial grade, oat milk","$14"]],
        "Wine & Champagne":[["Malbec, Catena Zapata Adrianna 2019","Mendoza, Argentina","$280 / bottle"],["Armand de Brignac Rosé 'Pink Ace of Spades'","","$1,200 / bottle"],["Champagne by glass","Laurent-Perrier Rosé","$45 / glass"]]}}
  }
};
