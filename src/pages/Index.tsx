import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { openWhatsApp } from "@/utils/whatsapp";
import huileTazrart from "@/assets/huile-tazrart.jpg";
import huileTazrartHover from "@/assets/huile-tazrart - Copie.jpg";
import shampoo from "@/assets/shampoo.jpg";
import shampooHover from "@/assets/shampoo - Copie.jpg";
import masque from "@/assets/masque.jpg";
import masqueHover from "@/assets/masque - Copie.jpg";
import productsHero from "@/assets/pack.png";
import productsHeroHover from "@/assets/pack - Copie.png";
import serum from "@/assets/serum.jpg";
import serumHover from "@/assets/serum - Copie.jpg";
import logo_maroc from "@/assets/logo_maroc.png"

const Index = () => {
  const products = [
    {
      name: "Huile Tazrart",
      image: huileTazrart,
      hoverImage: huileTazrartHover,
      volume: "100ml",
      price: "249",
      description: "Huile Tazrart – Force & Croissance Prenez soin de vos cheveux naturellement avec Zaiya Cosmetics Cette huile nourrit le cuir chevelu, renforce les racines et stimule la repousse. Grâce à sa formule riche en argan, cèdre, chanvre, romarin, nigelle et coco, elle aide à réduire la chute et rend les cheveux plus forts et plus brillants",
      ingredients: "Huile d'Argan, Huile de bois de l'Atlas, Huile de chanvre, Huile essentielle de romarin, Huile de nigelle, Huile de coco, Huile essentielle de girofle, Vitamine E.",
    },
    {
      name: "Shampooing",
      image: shampoo,
      hoverImage: shampooHover,
      volume: "200ml",
      price: "149",
      description: "Shampooing antichute, conçu pour renforcer les cheveux dès la racine, réduire la casse et favoriser une chevelure plus résistante et brillante. Sans silicones, sans parabènes, sans huiles minérales.",
      ingredients: "Huile d'argan riche en vitamine E, Provitamine B5 (Panthénol), Protéines de blé / germe de blé. Convient à tous types de cheveux.",
    },
    {
      name: "Masque",
      image: masque,
      hoverImage: masqueHover,
      volume: "200ml",
      price: "129",
      description: "Masque Réparateur Sa formule riche en huile d’argan nourrissante, protéines de germe de blé et Pro-vitamine B5 encapsulée agit en profondeur pour hydrater, réparer et fortifier la fibre capillaire. Ce soin intensif rend les cheveux plus souples, brillants et faciles à coiffer, tout en leur apportant douceur et vitalité. Idéal pour les cheveux secs, abîmés ou traités chimiquement, il aide à restaurer la santé naturelle de la chevelure sans l’alourdir.",
      ingredients: "Huile d'argan, Huile de germe de blé, Panthénol, Tocopheryl Acetate, Lecithin. Convient à tous types de cheveux.",
    },
     {
      name: "Sérum",
      image: serum,
      hoverImage: serumHover,
      volume: "60ml",
      price: "159",
      description: "Sérum capillaire antichute & repousse. Un soin profond qui donne du pouvoir régénérant à chaque cheveu. Effet immédiat, il élimine le frizz, répare les extrémités et donne de la brillance à la première application.",
      ingredients: "Cyclopentasiloxane, dimethicone, Huile d'argan, Protéine de soja hydrolysée, Huile de jojoba, Huile de lin, Vitamine E.",
    },
  ];

  const packProduct = {
    name: "Pack Complet Zaiya",
    image: productsHero,
    hoverImage: productsHeroHover,
    volume: "4 Produits",
    price: "599",
    description: "Le pack complet contient tous nos produits pour une routine capillaire complète : Huile Tazrart (100ml), Shampooing (200ml), Sérum (100ml) et Masque (200ml). Un rituel beauté complet pour des cheveux sublimés.",
    ingredients: "Ensemble complet de tous nos produits enrichis en huile d'argan, vitamines et actifs végétaux naturels du Maroc. Formules sans silicones, sans parabènes, sans huiles minérales.",
    isPack: true,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20 px-0 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nos Produits
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de soins capillaires naturels
            </p>
          </div>

          {/* Pack Complet */}
          <div className="mb-16 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ProductCard 
              {...packProduct} 
              onOrder={() => openWhatsApp(packProduct.name, packProduct.price)}
            />
          </div>

          {/* Individual Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="animate-in fade-in slide-in-from-bottom-6 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard 
                  {...product} 
                  onOrder={() => openWhatsApp(product.name, product.price)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pourquoi Zaiya ?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-0xl mx-auto">
            {/* Signe 1: 100% Naturel */}
            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-[var(--shadow-product)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold">
                🌿
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">100% Naturel</h3>
              <p className="text-muted-foreground">
                Ingrédients naturels du Maroc, sans parabènes ni silicones
              </p>
            </div>

            {/* Signe 2: Résultats Visibles */}
            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-[var(--shadow-product)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold">
                ✨
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Résultats Visibles</h3>
              <p className="text-muted-foreground">
                Cheveux plus forts, brillants et en meilleure santé dès la première utilisation
              </p>
            </div>

            {/* Signe 3: Pour Tous */}
            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-[var(--shadow-product)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold">
                💚
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Pour Tous</h3>
              <p className="text-muted-foreground">
                Convient à tous types de cheveux, formules douces et efficaces
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-[var(--shadow-product)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden">
                {/* Utilisation de l'image importée */}
                <img 
                  src={logo_maroc} 
                  alt="Logo Marocain" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">100% Marocain</h3>
              <p className="text-muted-foreground">
                Produits 100% marocains
              </p>
            </div>
          </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Zaiya Cosmetics
          </h3>
          <p className="text-muted-foreground mb-2">
            Soins capillaires naturels du Maroc
          </p>
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a 
              href="https://instagram.com/zaiya.cosmetics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@zaiya.cosmetics</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Zaiya Cosmetics. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
