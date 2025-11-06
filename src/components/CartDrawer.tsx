import { ShoppingCart, Trash2, Plus, Minus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const sendToWhatsApp = () => {
    if (items.length === 0) {
      return;
    }

    let message = "🍽️ *طلب جديد من منيو الزهراء*\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   الكمية: ${item.quantity}\n`;
      message += `   السعر: ${item.price} جنيه\n`;
      message += `   الإجمالي: ${item.price * item.quantity} جنيه\n\n`;
    });

    message += `━━━━━━━━━━━━━━━\n`;
    message += `*المجموع الكلي: ${totalPrice} جنيه*\n\n`;
    message += `عدد المنتجات: ${totalItems}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201142787968?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 left-6 z-50 h-16 w-16 rounded-full shadow-warm"
        >
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {totalItems}
              </span>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-lg" dir="rtl">
        <SheetHeader>
          <SheetTitle className="text-2xl">سلة الطلبات</SheetTitle>
          <SheetDescription>
            {items.length === 0 ? "السلة فارغة" : `${totalItems} منتج في السلة`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex h-[60vh] items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">السلة فارغة</p>
              <p className="text-sm text-muted-foreground mt-2">
                ابدأ بإضافة المنتجات من المنيو
              </p>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[60vh] mt-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-lg border border-border p-4 bg-card"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="text-lg font-bold text-primary mt-1">
                        {item.price} جنيه
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>المجموع الكلي:</span>
                <span className="text-2xl text-primary">{totalPrice} جنيه</span>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={sendToWhatsApp}
              >
                <Send className="ml-2 h-5 w-5" />
                إرسال الطلب عبر واتساب
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                <Trash2 className="ml-2 h-5 w-5" />
                إفراغ السلة
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
