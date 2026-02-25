/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/src/lib/utils";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-t border-border bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          <img
            src="/magicui-logo.png"
            alt="Selo Mobilidade Segura"
            className="w-8 h-8 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground/90 truncate">
              Selo Mobilidade Segura
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Beautiful design system
            </p>
          </div>
          <a
            href="#"
            className="text-xs text-primary hover:text-primary/80 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Leia Mais
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("border border-border rounded-lg p-4 bg-card", className)}
    >
      <div className="flex flex-col gap-4">
        <img
          src="/magicui-pro.png"
          alt="Selo Mobilidade Segura"
          className="w-full h-60 rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Selo Mobilidade Segura
          </h3>
          <p className="text-sm text-muted-foreground">
          A Transportadora Garbuio é referência no setor por unir qualidade, segurança e compromisso com a satisfação dos clientes e o cuidado com seus colaboradores.
          </p>
        </div>
      </div>
    </div>
  );
}
