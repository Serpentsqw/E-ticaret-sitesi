const express = require("express")
const path = require("path")
const ejs = require("ejs")
const app = express()

const products = [
  {id: 1, ad: 'Urun Adi 1', aciklama: 'Urun Aciklama', fiyat: 500},
  {id: 2, ad: 'Urun Adi 2', aciklama: 'Urun Aciklama', fiyat: 600},
  {id: 3, ad: 'Urun Adi 3', aciklama: 'Urun Aciklama', fiyat: 700},
]

// Engine mengine fln iste silme buralari yoksa site mokoko olur //
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "public")));
/////////////////////////////////////

// * SAYFALAR * //
app.get("/", (req, res) => {
  res.render("index")
});

app.get("/urunler", (req, res) => {
  res.render("urunler", { products });
});

app.get("/sss", (req, res) => {
  res.render("sss")
})
/////////////////

// Port dinleme şeyisi //
