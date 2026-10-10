/* Resort House — shared base (Bodrum & Bali) + local specialities. */
window.AURELIA_MENUS = window.AURELIA_MENUS || {};
window.AURELIA_MENUS["resort-house"] = {
  intro: "Bodrum and Bali share the Resort House base menu. Both are seasonal, seafood-forward and deeply rooted in their natural surroundings. Local specialities are built into each location's menu.",
  sections: [
    {t:"Signature Starters", i:[
      ["Oscietra Caviar 20–50g","Full service, cultured butter, blini","$115–$240"],
      ["Bluefin Tuna Sashimi","Ponzu, yuzu pearls, shiso, sesame oil","$85"],
      ["Wagyu Carpaccio A5","Truffle oil, aged Parmesan, microgreens","$85"],
      ["Grilled Langoustine ×4","Bisque butter, sea herbs, lemon","$110"],
      ["Burrata","Heirloom tomatoes, local EVOO, basil","$42"],
      ["Grilled Octopus","Olive oil, lemon, capers, herbs","$65"],
      ["Signature Bread","Sourdough + local bread, cultured butter, sea salt","Complimentary"]]},
    {t:"Salads", i:[
      ["Burrata & Heirloom Tomato","Aged balsamic, olive oil, basil","$38"],
      ["Lobster Salad","Baby gem, tarragon mayo, coral","$82"],
      ["Citrus Avocado","Grapefruit, watercress, hazelnut dressing","$34"]]},
    {t:"Soups", i:[
      ["Truffle Mushroom Velouté","Cep, hazelnut — evening only","$44"],
      ["Lobster Bisque","Cognac, cream, saffron, coral","$55"]]},
    {t:"Main Courses", i:[
      ["Wagyu Ribeye 250g","Bone marrow jus, pommes purée","$175–$195"],
      ["Miso Black Cod","Yuzu miso, daikon, dashi broth","$118–$148"],
      ["Saffron Lobster Pasta","Tagliolini, cognac bisque, lobster tail","$148–$185"],
      ["Lamb Saddle / Chops","Herb crust, pomegranate, local sides","$135–$175"],
      ["Catch of the Day","Market fish, Aegean/tropical herbs, olive oil, lemon","Market Price"],
      ["Wild Sea Bass","Champagne velouté, samphire, capers","$138–$158"]]},
    {t:"Sides", i:[
      ["Fries","Sea salt, Aurelia aioli","$14"],
      ["Pommes Purée","Butter, cream","$18"],
      ["Grilled Vegetables","Herb oil, lemon","$16"],
      ["Local Starch","Rice / potato — varies by location","$14"]]},
    {t:"Desserts & Pastry", i:[
      ["Signature Date Cake","Toffee, clotted cream ice cream","$30"],
      ["Pistachio Tart","Raspberry, rose water, gold leaf","$32"],
      ["Chocolate Fondant","Valrhona, vanilla ice cream","$34"],
      ["Tropical / Local Fruit","Seasonal sorbet or fresh plate","$24"]]},
    {t:"Premium Mocktails", i:[
      ["The Aurelia","White grape, yuzu, elderflower","$20"],
      ["Location Spritz","Seasonal local fruit, soda","$18"],
      ["Sea Breeze","Grapefruit, cranberry, tonic","$16"],
      ["Watermelon Cooler","Watermelon, lime, mint, soda","$15"]]},
    {t:"Teas & Coffee", i:[
      ["Single-Origin Coffee","Local / rotating","$12"],
      ["Local Speciality Tea","House herbal blend","$10"],
      ["Espresso","La Marzocco","$8"]]},
    {t:"Wine & Champagne", i:[
      ["Champagne, Laurent-Perrier Rosé NV","","$220 / bottle"],
      ["Whispering Angel Rosé 2023","Provence","$95 / bottle"],
      ["White: Sancerre, Vacheron 2022","Loire","$110 / bottle"],
      ["Red: Pinot Noir","Burgundy Village appellation","$120 / bottle"],
      ["Champagne by glass","Laurent-Perrier","$35 / glass"],
      ["Wine Pairing (5 courses)","Sommelier — seasonal","$125 / person"]]}
  ],
  adapt: {
    "aurelia-bodrum": {
      add:{
        "Signature Starters":[["Grilled Octopus — Mediterranean Classic","Aegean olive oil, lemon, capers, parsley","$62"]],
        "Salads":[["Greek-Style Salad Royale","Tomato, cucumber, Kalamata olive, aged feta, oregano, Aegean olive oil","$32"],["Watermelon & Feta","Mint, lime, black pepper — summer special","$28"]],
        "Soups":[["Chilled Gazpacho","Heirloom tomato, cucumber, Aegean olive oil — summer","$32"]],
        "Main Courses":[["Whole Grilled Sea Bass","Aegean herbs, lemon, olive oil — presented tableside","$145"],["Lamb Chops","Herb crust, tzatziki, pomegranate, roast potato","$135"],["Risotto di Mare","Mixed seafood, saffron, white wine, herbs","$105"]],
        "Sides":[["Greek Rice","Lemon, olive oil, herbs","$14"]],
        "Desserts & Pastry":[["Baklava Ice Cream Sandwich","Antep pistachio ice cream, crispy filo","$28"],["Watermelon Sorbet","Mint, lime — summer signature","$18"]],
        "Premium Mocktails":[["Aegean Spritz","White grape, peach, sparkling, basil","$18"]],
        "Teas & Coffee":[["Turkish Coffee","Traditional ibrik","$12"],["Fresh Mint Tea","Garden mint, honey, lemon","$10"]],
        "Wine & Champagne":[["Turkish: Corvus White Aegean 2022","","$65 / bottle"]]}},
    "aurelia-bali": {
      add:{
        "Signature Starters":[["Balinese Satay Royale","Wagyu beef satay, peanut-lime sauce, compressed cucumber","$62"],["Grilled Tiger Prawns","Sambal bisque butter, kaffir lime, lemongrass","$72"],["Balinese Gado-Gado Royale","Blanched vegetables, quail egg, Aurelia peanut sauce","$34"]],
        "Soups":[["Balinese Soto Ayam Reinvented","Chicken consommé, turmeric, lemongrass, noodle quenelle","$38"],["Lobster Bisque — Bali","Cognac, lemongrass, coconut cream, coral","$58"]],
        "Main Courses":[["Babi Guling Reinvented","Suckling pig, basa genep spice paste, crispy skin, saffron rice","$148"],["Whole Grilled Barramundi","Lemongrass, kaffir lime, Balinese herbs, coconut rice","$145"],["Truffle & Tempeh Risotto","Aged Parmesan, tempeh crumb, truffle oil","$88"]],
        "Sides":[["Coconut Rice","Pandan, coconut milk","$14"],["Wok-Fried Morning Glory","Garlic, sambal","$14"]],
        "Desserts & Pastry":[["Klepon Reinvented","Pandan rice cake, palm sugar lava, coconut, matcha ice cream","$28"],["Tropical Fruit Plate","Mangosteen, rambutan, snake fruit, dragon fruit, sorbet","$26"]],
        "Premium Mocktails":[["Bali Sunrise","Mango, passion fruit, turmeric, coconut water, lime","$18"],["Lemongrass & Ginger","Fresh lemongrass, ginger, lime, soda","$16"],["Jamu Royale","Turmeric, ginger, black pepper, tamarind, honey — Balinese tonic elevated","$18"]],
        "Teas & Coffee":[["Kopi Luwak Ceremony","Bali farms — ceremonial service","$45"],["Bali Single-Origin Coffee","Mount Kintamani, hand-roasted","$18"],["Bali Herbal Tea","Lemongrass, pandan, ginger — fresh","$12"]],
        "Wine & Champagne":[["Hatten Wines Rosé","Bali — local viticulture","$55 / bottle"]]}}
  }
};
