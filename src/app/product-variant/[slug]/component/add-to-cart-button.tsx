"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { addProductToCart } from "@/actions/add-cart-product";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
}

const AddToCartButton = ({
  productVariantId,
  quantity,
}: AddToCartButtonProps) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: async () =>
      addProductToCart({
        productVariantId,
        quantity,
      }),
    onSuccess: () => {
      toast.success("Produto adicionado à sacola.");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("Erro ao adicionar produto à sacola.");
    },
  });
  return (
    <Button
      className="rounded-full"
      size="lg"
      variant="outline"
      disabled={isPending}
      onClick={() => mutate()}
    >
      {isPending && <Loader2 className="animate-spin" />}
      Adicionar à sacola
    </Button>
  );
};

export default AddToCartButton;
