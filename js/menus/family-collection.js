/* Family Collection — shared base menu (Kensington core) + regional tweaks. */
window.AURELIA_MENUS = window.AURELIA_MENUS || {};
window.AURELIA_MENUS["family-collection"] = {
  intro: "All three Family Collection restaurants share the same core menu. Regional tweaks reflect local tastes and produce.",
  sections: [
    {t:"Signature Starters", i:[
      ["Oscietra Caviar 20g","Blini, crème fraîche, chive","$75"],
      ["Bluefin Tuna Tartare","Ponzu, yuzu crème, sesame tuile","$52"],
      ["Wagyu Carpaccio","Truffle oil, Parmesan, rocket","$62"],
      ["Grilled King Prawns","Bisque butter, garlic confit, lemon","$55"],
      ["Burrata","Roasted cherry tomatoes, fresh basil, olive oil","$38"],
      ["Smoked Salmon","Dill crème, cucumber, capers, sourdough toast","$44"],
      ["Signature Bread","Sourdough, cultured butter, sea salt","Complimentary"]]},
    {t:"Salads", i:[
      ["Burrata & Heirloom Tomato","Aged balsamic, olive oil, basil","$34"],
      ["Lobster Salad","Baby gem, tarragon mayo, coral","$62"],
      ["Citrus Avocado Salad","Pink grapefruit, watercress, hazelnut","$28"],
      ["Classic Niçoise","Tuna, olive, green bean, quail egg, anchovy","$36"]]},
    {t:"Soups", i:[
      ["Truffle Mushroom Velouté","Cep oil, chive, hazelnut","$36"],
      ["Lobster Bisque","Cognac, tarragon, cream","$42"]]},
    {t:"Main Courses", i:[
      ["Wagyu Ribeye 250g","Bone marrow jus, fries, watercress","$145"],
      ["Miso Black Cod","Yuzu butter, daikon, pickled ginger","$88"],
      ["Saffron Lobster Pasta","Tagliolini, cognac bisque, lobster tail","$105"],
      ["Lamb Saddle","Aubergine, harissa, pomegranate","$98"],
      ["Wild Sea Bass","Champagne velouté, samphire","$92"],
      ["Free-Range Chicken Breast","Lemon thyme jus, truffle mash, greens","$75"],
      ["Black Truffle Risotto","Aged Parmesan, chive, summer truffle","$72"]]},
    {t:"Sides", i:[
      ["Pommes Purée","Butter, cream","$16"],
      ["French Fries","House seasoning","$12"],
      ["Steamed Broccoli","Lemon butter","$14"],
      ["Seasonal Vegetables","Herb oil","$14"],
      ["Mac & Cheese","Gruyère, breadcrumb","$16"]]},
    {t:"Children's Menu", i:[
      ["Mini Pasta Pomodoro","San Marzano tomato, basil, Parmesan","$16"],
      ["Grilled Chicken Strips","Sweet potato mash, steamed greens","$20"],
      ["Fish & Chips","Sustainable cod, peas, tartare sauce","$22"],
      ["Mini Margherita Pizza","San Marzano, buffalo mozzarella","$18"],
      ["Ice Cream Sundae","Vanilla, chocolate, strawberry","$13"]]},
    {t:"Desserts & Pastry", i:[
      ["Signature Date Cake","Toffee sauce, clotted cream ice cream","$26"],
      ["Pistachio Tart","Raspberry coulis, gold leaf","$28"],
      ["Vanilla Mille-Feuille","Madagascan vanilla, caramelised puff pastry","$24"],
      ["Chocolate Fondant","Salted caramel, vanilla ice cream","$28"],
      ["Ice Cream Sundae ×2","Three ice creams, hot chocolate sauce, wafer","$32"]]},
    {t:"Premium Mocktails", i:[
      ["The Aurelia","White grape, yuzu, elderflower, sparkling","$16"],
      ["Cedar Garden","Cucumber, mint, lime, fig shrub","$15"],
      ["Fresh Lemonade","Lemon, honey, mint, sparkling water","$12"],
      ["Mango Lassi","Mango, yoghurt, cardamom","$14"]]},
    {t:"Teas & Coffee", i:[
      ["Single-Origin Coffee","Ethiopia / Colombia rotating","$12"],
      ["Tea Selection","English Breakfast, Earl Grey, Herbal","$8"],
      ["Hot Chocolate","Valrhona 70%, whole milk, cream","$14"],
      ["Children's Hot Chocolate","Milk chocolate, marshmallows","$9"]]},
    {t:"Wine & Champagne", i:[
      ["Champagne by glass","Billecart-Salmon","$28 / glass"],
      ["White: Sancerre, H. Bourgeois 2022","Loire Valley","$95 / bottle"],
      ["Red: Merlot, Léoville-Barton 2019","Saint-Julien","$165 / bottle"],
      ["Rosé: Whispering Angel 2023","Provence","$85 / bottle"],
      ["Wine Pairing (3 courses)","Sommelier selected","$85 / person"]]}
  ],
  adapt: {
    "aurelia-kensington": {
      add:{
        "Signature Starters":[["Burrata with Lobster Supplement","Roasted cherry tomatoes, basil — add lobster supplement £15","$38"]],
        "Soups":[["White Asparagus Soup","Seasonal spring: smoked salmon quenelle","$36"]]}},
    "aurelia-manchester": {
      add:{
        "Soups":[["Roasted Tomato Soup","Basil oil, sourdough croutons","$20"]],
        "Sides":[["Roast Potatoes","Rosemary, goose fat","$12"]]}},
    "aurelia-birmingham": {}
  }
};
