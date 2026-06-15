const p = (prompt, w = 600, h = 500, seed = 1) =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&nologo=true&seed=${seed}&model=flux`

export const IMAGES = {
  // ── Hero ──────────────────────────────────────────
  hero: p(
    'luxury natural handmade ecoveda soap bars with fresh rosemary lavender herbs on rustic wooden surface, warm golden natural lighting, lifestyle product photography, earthy tones, shallow depth of field',
    1000, 750, 101
  ),
  heroWoman: p(
    'beautiful young woman glowing healthy natural skin touching face smiling holding small green skincare cream jar, large tropical areca palm leaves lush botanical background, warm cream beige studio light, professional beauty photography, half body portrait, editorial lifestyle',
    820, 1050, 9001
  ),

  // ── Collections ───────────────────────────────────
  skincare: p(
    'natural organic aloe vera turmeric green handmade soap bar with fresh green leaves and herbs on minimal beige linen background, professional product photography, top-down flatlay',
    700, 550, 201
  ),
  cosmetics: p(
    'natural cosmetics face serum dark amber glass dropper bottle and cream jar with botanical flowers on warm beige background, minimal skincare photography',
    700, 550, 202
  ),
  homeCare: p(
    'luxury soy wax candle glass jar with dried lavender and incense sticks in wooden tray, warm candlelight ambience, cozy home wellness photography',
    700, 550, 203
  ),
  giftSets: p(
    'luxury natural skincare gift box with kraft paper ribbon green herbs and botanical decoration on clean beige background, gift photography',
    700, 550, 204
  ),

  // ── Bestseller Products ────────────────────────────
  products: {
    aloeSoap: p('handmade natural aloe vera green soap bar with fresh aloe leaves and green herbs on white marble surface, professional product photography', 500, 500, 301),
    turmericSoap: p('handmade turmeric golden yellow natural soap bar with turmeric root and spices on white marble, product photography clean', 500, 500, 302),
    charcoalSoap: p('activated charcoal black natural handmade soap bar with charcoal powder on white marble minimal background, product photography', 500, 500, 303),
    roseMist: p('natural rose face mist spray bottle with rose petals and botanical elements on white minimal background, beauty product photography', 500, 500, 304),
    vitaminCSerum: p('vitamin C brightening serum in amber glass dropper bottle with orange slices on white minimal background, skincare product photography', 500, 500, 305),
    lavenderCandle: p('lavender scented soy candle in clear glass jar with dried purple lavender flowers on white minimal background, product photography', 500, 500, 306),
    sandalwoodIncense: p('sandalwood incense sticks bundle in wooden holder with aromatic smoke on beige minimal background, product photography', 500, 500, 307),
    neemTulsiSoap: p('neem tulsi natural green handmade ayurvedic soap bar with neem leaves and tulsi on white background, product photography', 500, 500, 308),
    aloegel: p('natural aloe vera soothing gel in green transparent tube bottle with aloe leaf on white clean background, product photography', 500, 500, 309),
    rosewater: p('pure rose face toner spray glass bottle with rose petals on pink minimal background, skincare product photography', 500, 500, 310),
  },

  // ── Coming Soon ────────────────────────────────────
  comingSoon: {
    vitaminCFace: p('premium vitamin C brightening face serum in amber glass dropper bottle, fresh orange slices and green leaves, soft warm beige studio background, luxury skincare product photography, soft natural lighting, high detail, centered composition', 600, 700, 4101),
    lipCheek: p('natural organic lip and cheek tint in elegant frosted glass jar, fresh pink rose petals scattered, soft cream beige background, luxury cosmetics product photography, soft studio lighting, high detail, centered', 600, 700, 4102),
    herbalIncense: p('bundle of handmade herbal incense sticks in a small ceramic holder with dried sage and lavender, gentle aromatic smoke, warm beige minimal background, luxury wellness product photography, soft lighting, high detail', 600, 700, 4103),
    scentedCandle: p('luxury scented soy wax candle in elegant cream ceramic jar with dried botanicals and vanilla pods, warm cozy ambience, soft beige minimal background, premium home fragrance product photography, soft glow, high detail', 600, 700, 4104),
  },

  // ── Why Choose / Brand ─────────────────────────────
  brand: p(
    'natural ecoveda handmade soap bars with green leaves herbs roots botanical arrangement luxury product photography warm earthy tones, beautiful still life',
    750, 650, 501
  ),

  // ── Instagram Grid ────────────────────────────────
  instagram: [
    p('natural handmade soap bars herbs botanical selfcare morning routine flatlay warm beige photography', 500, 500, 601),
    p('woman applying natural face moisturizer cream glowing skin morning routine lifestyle photography warm', 500, 600, 602),
    p('luxury lavender candle wellness home spa ritual warm soft photography aesthetic', 500, 500, 603),
    p('natural skincare products herbs green leaves flatlay photography beautiful botanical arrangement', 500, 700, 604),
    p('handmade soap artisan cutting process rustic wooden table craft photography warm tones', 500, 500, 605),
    p('ecoveda natural gift set kraft paper botanicals beautiful gifting photography warm light', 500, 500, 606),
  ],

  // ── Blog ──────────────────────────────────────────
  blog: [
    p('natural ingredients benefits skincare herbs close up photography vibrant green', 600, 400, 701),
    p('woman skincare tips routine applying product glowing skin lifestyle photography', 600, 400, 702),
    p('handmade soap making process artisan craft behind scenes photography', 600, 400, 703),
  ],
}
