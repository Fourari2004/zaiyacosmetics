import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  image: string;
  hoverImage?: string;
  volume: string;
  price: string;
  description: string;
  ingredients: string;
  isPack?: boolean;
  onOrder?: () => void;
}

export const ProductCard = ({
  name,
  image,
  hoverImage,
  volume,
  price,
  description,
  ingredients,
  isPack = false,
  onOrder,
}: ProductCardProps) => {
  // Use hoverImage if provided, otherwise use the original image
  const [currentImage, setCurrentImage] = useState(image);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullIngredients, setShowFullIngredients] = useState(false);
  
  const handleMouseEnter = () => {
    // Don't apply hover effect to products-hero and zaiya-logo
    if (!image.includes('products-hero') && !image.includes('zaiya-logo') && hoverImage) {
      setCurrentImage(hoverImage);
    }
  };
  
  const handleMouseLeave = () => {
    // Reset to original image
    setCurrentImage(image);
  };

  // Touch event handlers for mobile devices
  const handleTouchStart = () => {
    // Don't apply hover effect to products-hero and zaiya-logo
    if (!image.includes('products-hero') && !image.includes('zaiya-logo') && hoverImage) {
      setCurrentImage(hoverImage);
    }
  };
  
  const handleTouchEnd = () => {
    // Reset to original image after a short delay to allow user to see the image
    setTimeout(() => {
      setCurrentImage(image);
    }, 300);
  };

  // Truncate text to approximately 4 lines (roughly 200 characters)
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const descriptionMaxLength = 100;
  const ingredientsMaxLength = 75;

  return (
    <Card 
      className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardHeader className="relative overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={currentImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {isPack && (
          <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground shadow-lg">
            Pack Complet
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-2xl font-bold text-foreground leading-tight">
              {name}
            </CardTitle>
            <Badge variant="outline" className="shrink-0 font-semibold">
              {volume}
            </Badge>
          </div>
          <CardDescription className="text-base leading-relaxed">
            {showFullDescription ? description : truncateText(description, descriptionMaxLength)}
            {description.length > descriptionMaxLength && (
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="ml-2 text-black hover:underline font-medium"
              >
                {showFullDescription ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </CardDescription>
        </div>
        
        <Separator className="bg-border/50" />
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
            Ingrédients
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {showFullIngredients ? ingredients : truncateText(ingredients, ingredientsMaxLength)}
            {ingredients.length > ingredientsMaxLength && (
              <button 
                onClick={() => setShowFullIngredients(!showFullIngredients)}
                className="ml-2 text-black hover:underline font-medium"
              >
                {showFullIngredients ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-4 p-6 pt-0">
        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {price} DH
        </div>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          onClick={onOrder}
        >
          Commander
        </Button>
      </CardFooter>
    </Card>
  );
};