import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  CreditCard,
  DollarSign,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingCart,
  Star,
  Truck,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const COLORS = {
  header: "#98805C",
  gold: "#A88454",
  paper: "#F4F4EC",
  darkBrown: "#38241C",
  lilac: "#E4D4FF",
  violet: "#6F51B4",
};

const products = [
  {
    id: 1,
    name: "Café Colombia",
    price: 0,
    type: "Molido",
    image: "bag",
    description: "Café 100% arábica de origen colombiano, suave y aromático.",
  },
  {
    id: 2,
    name: "Pack Esencia",
    price: 10,
    type: "Molido",
    image: "pack",
    description: "Pack de cafés seleccionados con perfiles de Colombia, Antioquia y Nariño.",
  },
];

function CoffeeTitle({ children, className = "" }) {
  return (
    <span
      className={`font-black tracking-tight text-white [text-shadow:1.5px_1.5px_0_#111,-1.5px_1.5px_0_#111,1.5px_-1.5px_0_#111,-1.5px_-1.5px_0_#111,0_4px_6px_rgba(0,0,0,.35)] ${className}`}
      style={{ fontFamily: "Comic Sans MS, Trebuchet MS, system-ui, sans-serif" }}
    >
      {children}
    </span>
  );
}

function Header({ title, icon: Icon, onMenu, onProfile, showProfile = true }) {
  return (
    <header
      className="mx-auto mt-6 flex h-[74px] w-full max-w-[430px] items-center justify-between rounded-full px-9"
      style={{ background: COLORS.header }}
    >
      <div className="flex items-center gap-5">
        {Icon ? <Icon size={32} strokeWidth={2.4} className="text-black" /> : null}
        <CoffeeTitle className="text-[24px] leading-none">{title}</CoffeeTitle>
      </div>
      <div className="flex items-center gap-7 text-[#3f4150]">
        {showProfile && (
          <button onClick={onProfile} aria-label="Ir a cuenta" className="rounded-full p-1 hover:bg-white/20">
            <CircleUserRound size={24} />
          </button>
        )}
        <button onClick={onMenu} aria-label="Abrir menú" className="rounded-full p-1 hover:bg-white/20">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      className="mb-4 ml-5 text-[22px] font-black text-[#17171f] [text-shadow:0_3px_3px_rgba(0,0,0,.25)]"
      style={{ fontFamily: "Comic Sans MS, Trebuchet MS, system-ui, sans-serif" }}
    >
      {children}
    </h2>
  );
}

function GoldButton({ children, onClick, className = "", small = false }) {
  return (
    <button
      onClick={onClick}
      className={`mx-auto block rounded-lg bg-[#A88454] font-bold text-white shadow-sm transition hover:brightness-95 active:scale-[.98] ${
        small ? "px-4 py-2 text-sm" : "h-[74px] w-[270px] text-[21px]"
      } ${className}`}
    >
      <CoffeeTitle className={small ? "text-sm" : "text-[21px]"}>{children}</CoffeeTitle>
    </button>
  );
}

function TinyStar() {
  return <Star size={18} className="shrink-0 text-[#4e4e5d]" />;
}

function MenuRow({ label, onClick, card = false }) {
  return (
    <button onClick={onClick} className={`flex w-full items-center justify-between py-5 text-left text-[17px] tracking-wide text-[#282833] ${card ? "rounded-xl bg-[#F4F4EC] px-5" : ""}`}>
      <span className="flex items-center gap-4">
        <TinyStar />
        {label}
      </span>
      <ChevronRight size={18} />
    </button>
  );
}

const ASSET_IMAGES = {
  bag: {
    src: "/assets/cafe_colombia.png",
    alt: "Bolsa de Café Colombiano",
    mode: "contain",
  },
  pack: {
    src: "/assets/esencia.png",
    alt: "Pack Esencia de cafés de Colombia",
    mode: "cover",
  },
  box: {
    src: "/assets/direccion.png",
    alt: "Paquete de envío Punto Café",
    mode: "cover",
  },
  van: {
    src: "/assets/pedido.png",
    alt: "Furgoneta de reparto Punto Café",
    mode: "cover",
  },
  card: {
    src: "/assets/tarjeta.png",
    alt: "Tarjeta de pago Punto Café",
    mode: "contain",
  },
  paypal: {
    src: "/assets/paypal.png",
    alt: "Logo de PayPal",
    mode: "contain",
  },
  apple: {
    src: "/assets/apple.png",
    alt: "Apple Pay",
    mode: "contain",
  },
  hero: {
    src: "/assets/cafeteria_hero.png",
    alt: "Interior de la cafetería Punto Café",
    mode: "cover",
  },
  latte: {
    src: "/assets/latte_destacado.png",
    alt: "Café latte destacado",
    mode: "cover",
  },
  people: {
    src: "/assets/conocenos.png",
    alt: "Clientes en Punto Café",
    mode: "cover",
  },
  bearLatte: {
    src: "/assets/latte_oso.png",
    alt: "Latte art con forma de oso",
    mode: "cover",
  },
  granVia: {
    src: "/assets/local_gran_via.png",
    alt: "Local Punto Café en Gran Vía",
    mode: "cover",
  },
  tostadero: {
    src: "/assets/local_tostadero.png",
    alt: "Local Tostadero Punto Café",
    mode: "cover",
  },
};

function CoffeeImage({ variant = "bag", className = "", fitMode }) {
  const asset = ASSET_IMAGES[variant];

  if (asset) {
    const mode = fitMode || asset.mode;
    const fitClass = mode === "cover" ? "object-cover" : "object-contain";
    const paddingClass = mode === "contain" ? "p-2" : "";

    return (
      <div className={`overflow-hidden bg-white ${className}`}>
        <img
          src={asset.src}
          alt={asset.alt}
          className={`h-full w-full ${fitClass} ${paddingClass}`}
          draggable="false"
        />
      </div>
    );
  }

  if (variant === "latte") {
    return (
      <div className={`relative overflow-hidden bg-[#ab7a45] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#f7eee0_0_22%,#c28d56_23%_40%,#704629_42%_100%)]" />
        <div className="absolute left-[29%] top-[31%] h-11 w-20 rounded-full bg-[#fff9eb]" />
        <div className="absolute left-[42%] top-[32%] text-xl">☕</div>
      </div>
    );
  }

  if (variant === "shop") {
    return (
      <div className={`relative overflow-hidden bg-[#5f452d] ${className}`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#2f251d,#81613f)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-[#2b1f16]" />
        <div className="absolute left-8 top-10 h-28 w-10 rounded-full bg-[#315638] blur-[1px]" />
        <div className="absolute right-7 top-6 h-24 w-32 rounded bg-[#111]/40" />
        <div className="absolute bottom-11 left-12 h-16 w-36 rounded bg-[#b98b56]" />
      </div>
    );
  }

  if (variant === "people") {
    return (
      <div className={`relative overflow-hidden bg-[#66462d] ${className}`}>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#241916,#a87544)]" />
        <div className="absolute bottom-4 left-9 h-16 w-16 rounded-full bg-[#1c1c1c]" />
        <div className="absolute bottom-5 left-28 h-20 w-16 rounded-full bg-[#2d2018]" />
        <div className="absolute bottom-4 right-9 h-16 w-16 rounded-full bg-[#202020]" />
        <div className="absolute bottom-5 left-10 right-10 h-5 rounded-full bg-[#e3c08a]" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#f2ddbd] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.65),transparent_38%),linear-gradient(140deg,#f7e7cc,#dfb579)]" />
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[47%] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#d6b17c] shadow-xl" />
      <div className="absolute left-1/2 top-[22%] h-12 w-[43%] -translate-x-1/2 rounded-t bg-[#efe1c9]" />
      <div className="absolute left-1/2 top-[36%] -translate-x-1/2 text-center text-[12px] font-black leading-3 text-[#2a231a]">
        CAFÉ
        <br />
        COLOMBIA
      </div>
      <div className="absolute bottom-[22%] left-1/2 h-10 w-[38%] -translate-x-1/2 rounded bg-[#36502a]" />
    </div>
  );
}

function EmailBox({ className = "" }) {
  return (
    <div className={`w-[205px] rounded-sm bg-[#38241C] px-5 py-2 text-white shadow-sm ${className}`}>
      <div className="mb-1 flex items-center justify-between text-[12px] text-white/75">
        <span>Mail</span>
        <X size={17} className="rounded-full border border-white/70" />
      </div>
      <div className="text-base font-medium">Correo:</div>
      <div className="mt-1 border-b border-white/70" />
      <p className="mt-1 text-xs text-white/70">Supporting text</p>
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="mx-auto mt-10 flex w-[380px] items-start justify-between bg-[#F4F4EC] px-5 py-4">
      <div>
        <h3 className="mb-3 font-serif text-2xl text-[#6f6b68]">Contacto</h3>
        <p className="mb-1 flex items-center gap-2 font-serif text-sm">
          <span>📞</span> +34 123 45 67 89
        </p>
        <p className="flex items-center gap-2 font-serif text-sm">
          <Mail size={18} /> puntocafe@correocafe.es
        </p>
        <p className="mt-10 text-center font-serif text-base text-[#79716b]">Reciba novedades:</p>
        <EmailBox className="mx-auto mt-2" />
      </div>
      <div className="flex flex-col items-center gap-3 pt-8">
        <Instagram size={40} strokeWidth={2.4} />
        <div className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#1877F2] text-3xl font-black text-white">f</div>
        <div className="text-4xl font-black text-black">♪</div>
      </div>
    </div>
  );
}

function ProductCard({ product, onClick, detail = false }) {
  const imageClassName = detail ? "mx-auto h-[278px] w-[210px]" : "h-[278px] w-full";
  return (
    <button onClick={onClick} className="mx-auto w-[260px] rounded-lg border border-[#d0d0d0] bg-white p-4 text-left shadow-sm transition hover:shadow-md">
      <CoffeeImage variant={product.image} className={imageClassName} fitMode={detail ? "contain" : undefined} />
      <p className="mt-4 text-lg text-[#33313a]">{product.name}</p>
      <p className="mt-2 text-lg font-bold">${product.price ?? "_"}</p>
    </button>
  );
}

function Inicio({ go }) {
  return (
    <Screen>
      <Header title="Punto Café" icon={MapPin} onMenu={() => go("tienda")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-3 max-w-[430px] pb-8">
        <div className="relative mx-1 overflow-hidden border border-[#ddd] bg-white">
          <CoffeeImage variant="hero" className="h-[154px] w-full" />
          <CoffeeTitle className="absolute bottom-4 left-10 text-[20px]">Café de Especialidad sin complicarte</CoffeeTitle>
        </div>

        <section className="mt-7 bg-[#F4F4EC] py-4">
          <SectionTitle>Productos Destacados</SectionTitle>
          <div className="flex items-center justify-center gap-5">
            <ArrowLeft size={54} />
            <div className="rounded border border-[#ddd] bg-white p-3">
              <CoffeeImage variant="latte" className="h-[160px] w-[160px]" />
            </div>
            <ArrowRight size={54} />
          </div>
          <GoldButton className="mt-10" onClick={() => go("tienda")}>
            Ver Productos
          </GoldButton>
        </section>

        <div className="relative mx-2 mt-14 overflow-hidden border border-[#ddd] bg-white">
          <CoffeeImage variant="people" className="h-[176px] w-full" />
          <CoffeeTitle className="absolute bottom-4 left-9 text-[20px]">Conócenos</CoffeeTitle>
        </div>

        <section className="mt-14 text-center">
          <SectionTitle>Specialty Coffee</SectionTitle>
          <p className="mx-auto max-w-[380px] font-serif text-sm leading-7 text-[#231f20]">
            Una cafetería acogedora con aroma a café recién hecho, luz cálida y un ambiente tranquilo ideal para conversar, leer o trabajar.
            Un rincón perfecto para disfrutar bebidas artesanales y algo dulce.
          </p>
        </section>

        <section className="mt-10 bg-[#F4F4EC] py-4">
          <SectionTitle>Nuestra Carta</SectionTitle>
          <div className="flex items-center justify-center gap-7">
            <ArrowLeft size={50} />
            <div className="rounded border border-[#ddd] bg-white p-3">
              <CoffeeImage variant="bearLatte" className="h-[185px] w-[185px]" />
            </div>
            <ArrowRight size={50} />
          </div>
          <GoldButton className="mt-8">Descargar Carta</GoldButton>
        </section>

        <section className="mt-12">
          <SectionTitle>Nuestros Locales</SectionTitle>
          <LocalCard title="Gran Vía" time="L-V de 8:00 a 18:00" variant="granVia" />
          <LocalCard title="Local Tostadero" time="L-V de 9:00 a 16:00" variant="tostadero" />
        </section>
        <ContactBlock />
      </main>
    </Screen>
  );
}

function LocalCard({ title, time, variant }) {
  return (
    <div className="mx-auto mb-8 w-[325px] overflow-hidden rounded border border-[#ddd] bg-white">
      <div className="bg-[#F4F4EC] px-12 py-4">
        <h3 className="font-bold text-[#16161f]">{title}</h3>
        <p className="text-sm text-[#69616d]">Visita Nuestro Local en {title} ...</p>
      </div>
      <div className="bg-[#38241C] px-4 py-5 text-2xl font-black text-white">
        Horario: <span className="font-medium">{time}</span>
      </div>
      <CoffeeImage variant={variant} className="m-3 h-[150px] rounded border-4 border-white" />
    </div>
  );
}

function Tienda({ go }) {
  const [query, setQuery] = useState("");
  const tiendaItems = Array.from({ length: 4 }, (_, index) => ({ ...products[1], id: `pack-${index}` }));
  const visible = tiendaItems.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Screen>
      <Header title="Tienda" icon={DollarSign} onMenu={() => go("inicio")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-14 max-w-[430px] pb-10">
        <label className="mx-auto flex h-[56px] w-[360px] items-center gap-4 rounded-full bg-[#F4F4EC] px-5 text-[#55545e]">
          <Search size={24} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Encuentra tu café..."
            className="w-full bg-transparent text-[17px] outline-none placeholder:text-[#56545f]"
          />
        </label>
        <button onClick={() => go("filtros")} className="ml-8 mt-4 rounded-lg border border-[#cfc8d7] bg-white px-3 py-2 text-sm shadow-sm">
          ▸ Filtros
        </button>
        <div className="mt-6 grid gap-12">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => go("infoCafe")} />
          ))}
        </div>
        <ContactBlock />
      </main>
    </Screen>
  );
}

function InfoCafe({ go, addToCart }) {
  const [qty, setQty] = useState(1);

  return (
    <Screen>
      <Header title="Volver a Tienda" icon={null} onMenu={() => go("tienda")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-5 max-w-[430px] pb-10">
        <ProductCard product={products[1]} onClick={() => {}} detail />
        <div className="mx-auto mt-3 w-[380px] space-y-8 text-[17px]">
          <p className="flex items-center gap-3">
            <TinyStar /> Nombre: _________________
          </p>
          <p className="flex items-center gap-3">
            <TinyStar /> Precio: __________________
          </p>
          <div className="flex items-center gap-3">
            <TinyStar />
            <span>Grano - Molido:</span>
            <button className="ml-auto flex items-center gap-2 rounded-l-lg bg-[#6F51B4] px-4 py-3 font-bold text-white">
              <Star size={18} fill="white" /> Elegir
            </button>
            <button className="rounded-r-lg bg-[#6F51B4] px-4 py-3 text-white">
              <ChevronDown size={18} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <TinyStar />
            <span>Cantidad:</span>
            <strong className="text-2xl">{qty}</strong>
            <div className="ml-3 flex items-center rounded-full bg-[#f1f1f1]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2">
                <Minus size={22} />
              </button>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2">
                <Plus size={22} />
              </button>
            </div>
          </div>
        </div>
        <GoldButton className="mt-4 h-[50px]" onClick={() => { addToCart(qty); go("carrito"); }}>
          Agregar al Carrito
        </GoldButton>
        <p className="ml-8 mt-6 text-[17px]">Descripción del producto: __________________</p>
        <EmailBox className="mx-auto mt-6" />
      </main>
    </Screen>
  );
}

function CartItem({ product, qty, setQty }) {
  return (
    <div className="mx-auto mb-5 flex h-[130px] w-[330px] bg-[#F4F4EC]">
      <CoffeeImage variant={product.image} className="h-full w-[112px] rounded-sm border-8 border-white" />
      <div className="flex-1 px-2 py-5">
        <div className="flex items-start justify-between">
          <h3 className="text-[17px] font-black">{product.name}</h3>
          <p className="text-[10px]">Total: __________</p>
        </div>
        <div className="mt-12 flex items-center justify-between text-xs">
          <span className="text-sm">{product.type}</span>
          <span className="flex items-center gap-2">
            <Star size={12} /> Cantidad: <strong>{qty}</strong>
          </span>
          <span className="flex rounded-full bg-[#dedede]">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-2">
              <Minus size={13} />
            </button>
            <button onClick={() => setQty(qty + 1)} className="px-2">
              <Plus size={13} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

function Carrito({ go, cartQty, setCartQty }) {
  return (
    <Screen>
      <Header title="Carrito" icon={ShoppingCart} onMenu={() => go("tienda")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-7 max-w-[430px] pb-10">
        <CartItem product={products[0]} qty={cartQty} setQty={setCartQty} />
        <CartItem product={products[1]} qty={1} setQty={() => {}} />
        <div className="mx-auto mt-8 w-[330px] space-y-8 text-[17px] text-[#282833]">
          <p className="flex items-center gap-4">
            <TinyStar /> Gastos de envío: Gratis
          </p>
          <p className="flex items-center gap-4">
            <TinyStar /> Total: __________________
          </p>
        </div>
        <div className="mx-auto mt-10 w-[330px] space-y-5">
          <MenuRow label="Política de Devolución" />
          <MenuRow label="Política de Envío" />
          <MenuRow label="Método de Pago" onClick={() => go("pago")} />
        </div>
        <GoldButton className="mt-8" onClick={() => go("pedidos")}>
          Finalizar Pedido
        </GoldButton>
      </main>
    </Screen>
  );
}

function Cuenta({ go }) {
  return (
    <Screen>
      <Header title="Cuenta" icon={UsersRound} onMenu={() => go("inicio")} onProfile={() => go("miCuenta")} />
      <main className="mx-auto mt-12 max-w-[430px] pb-10">
        <div className="mx-auto flex w-[350px] items-center gap-8">
          <div className="grid h-[58px] w-[58px] place-items-center rounded-full bg-[#E4D4FF]">
            <UserRound size={44} color="#6F51B4" />
          </div>
          <div className="text-[24px] leading-tight">
            <p>Federico Álvarez</p>
            <p>@fedealv_02</p>
          </div>
        </div>
        <div className="mx-auto mt-7 w-[315px] rounded-3xl bg-[#98805C] p-7">
          <h2 className="mb-6 text-[24px]">Pedidos actuales:</h2>
          <p className="text-sm text-[#57525e]">Tu pedido está en camino:</p>
          <div className="mt-2 flex items-center justify-center gap-3 text-lg">
            <TinyStar /> ID: #12345
            <button onClick={() => go("pedidos")} className="ml-2 rounded-full bg-[#F4F4EC] p-3">
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
        <div className="mx-auto mt-10 w-[290px] space-y-8">
          <MenuRow card label="Mi Cuenta" onClick={() => go("miCuenta")} />
          <MenuRow card label="Mis Pedidos" onClick={() => go("pedidos")} />
          <MenuRow card label="Direcciones Guardadas" onClick={() => go("direcciones")} />
          <MenuRow card label="Métodos de Pago" onClick={() => go("pago")} />
        </div>
        <GoldButton className="mt-7" onClick={() => go("inicio")}>
          Cerrar Sesión
        </GoldButton>
      </main>
    </Screen>
  );
}

function InputBox({ label, placeholder }) {
  return (
    <label className="block h-[55px] w-[315px] bg-[#E3DDE7] px-4 py-2">
      <span className="block text-sm text-[#635e68]">{label}</span>
      <input placeholder={placeholder} className="mt-1 w-full border-b border-[#33313a] bg-transparent text-[17px] outline-none placeholder:text-[#5d5865]" />
    </label>
  );
}

function MiCuenta({ go }) {
  return (
    <Screen>
      <Header title="Mi Cuenta" icon={CreditCard} onMenu={() => go("cuenta")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-7 max-w-[430px] pb-10">
        <div className="grid place-items-center">
          <div className="grid h-[100px] w-[100px] place-items-center rounded-full bg-[#E4D4FF]">
            <UserRound size={84} color="#6F51B4" />
          </div>
          <button className="mt-2 rounded bg-[#A88454] px-4 py-2 text-sm font-bold text-white">Cambiar foto</button>
        </div>
        <div className="mx-auto mt-16 grid w-[315px] gap-5">
          <InputBox label="Nombre" placeholder="Escribe tu nombre" />
          <InputBox label="Apellidos" placeholder="Escribe tus apellidos" />
          <InputBox label="Email" placeholder="example@email.com" />
          <InputBox label="Dirección" placeholder="Escribe tu dirección" />
        </div>
        <GoldButton className="mt-36" onClick={() => go("cuenta")}>
          Guardar cambios
        </GoldButton>
      </main>
    </Screen>
  );
}

function AddressCard() {
  return (
    <div className="mx-auto mb-5 flex h-[130px] w-[330px] bg-[#F4F4EC]">
      <CoffeeImage variant="box" className="h-full w-[112px] rounded-sm border-8 border-white" />
      <div className="space-y-5 p-6 text-xs">
        <p>Dirección: C/_____ Nº__</p>
        <p>Localidad: ______ &nbsp;&nbsp;&nbsp; C. Postal: ______</p>
        <p>Provincia: ______</p>
      </div>
    </div>
  );
}

function Direcciones({ go }) {
  return (
    <Screen>
      <Header title="Direcciones" icon={Home} onMenu={() => go("cuenta")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-7 max-w-[430px] pb-10">
        {[1, 2, 3, 4].map((n) => (
          <AddressCard key={n} />
        ))}
        <GoldButton className="mt-12" onClick={() => go("cuenta")}>
          Volver
        </GoldButton>
      </main>
    </Screen>
  );
}

function PaymentCard({ title, image }) {
  return (
    <div className="mx-auto mb-5 flex h-[130px] w-[330px] bg-[#F4F4EC]">
      <CoffeeImage variant={image} className="h-full w-[112px] rounded-sm border-8 border-white" />
      <div className="p-4">
        <h3 className="mb-8 text-[22px] font-black">{title}</h3>
        <p className="mb-5 text-xs">ID: ______</p>
        <p className="text-xs">Fecha cad.: ______</p>
      </div>
    </div>
  );
}

function Pago({ go }) {
  return (
    <Screen>
      <Header title="Métodos de pago" icon={CreditCard} onMenu={() => go("cuenta")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-7 max-w-[430px] pb-10">
        <PaymentCard title="Paypal" image="paypal" />
        <PaymentCard title="Tarjeta" image="card" />
        <PaymentCard title="Apple Pay" image="apple" />
        <GoldButton className="mt-48">Añadir Método</GoldButton>
      </main>
    </Screen>
  );
}

function OrderCard({ id }) {
  return (
    <div className="mx-auto mb-16 flex w-[330px] bg-[#F4F4EC]">
      <CoffeeImage variant="van" className="h-[130px] w-[112px] rounded-sm border-8 border-white" />
      <div className="flex-1">
        <div className="p-4">
          <h3 className="mb-7 text-[22px] font-black">ID: #{id}</h3>
          <p className="mb-5 text-xs">Dirección: C/_____ Nº__</p>
          <p className="text-xs">Fecha: ___/___/___ &nbsp;&nbsp;&nbsp; Total: ________</p>
        </div>
        <div className="bg-[#e5dde0] px-5 py-3 text-sm font-black">
          <CoffeeTitle className="text-xs text-white">Productos:</CoffeeTitle>
          <p>1.____________</p>
          <p>2.____________</p>
          <p>3.__________</p>
        </div>
      </div>
    </div>
  );
}

function Pedidos({ go }) {
  return (
    <Screen>
      <Header title="Mis Pedidos" icon={Truck} onMenu={() => go("cuenta")} onProfile={() => go("cuenta")} />
      <main className="mx-auto mt-7 max-w-[430px] pb-10">
        <OrderCard id="12345" />
        <OrderCard id="56789" />
        <GoldButton className="mt-20" onClick={() => go("cuenta")}>
          Volver
        </GoldButton>
      </main>
    </Screen>
  );
}

function Filtros({ go }) {
  const [checked, setChecked] = useState({ asc: true, desc: true, col: true, gua: true });
  const toggle = (k) => setChecked((v) => ({ ...v, [k]: !v[k] }));

  return (
    <div className="min-h-screen bg-white p-8">
      <button onClick={() => go("tienda")} className="mb-1 rounded-lg border border-[#cfc8d7] bg-white px-4 py-2 shadow-sm">
        ▸ Filtros
      </button>
      <div className="flex gap-1 overflow-x-auto pb-8">
        <div className="h-[148px] min-w-[210px] rounded-xl border border-[#d4cadc] bg-[#F4EFF7] p-5 shadow-xl">
          <FilterMenuRow label="Por precio" />
          <FilterMenuRow label="Accesorios" />
          <FilterMenuRow label="Origen" />
        </div>
        <div className="w-[360px] min-w-[360px]">
          <FilterOption letter="A" label="Más alto" checked={checked.asc} onClick={() => toggle("asc")} />
          <FilterOption letter="D" label="Más bajo" checked={checked.desc} onClick={() => toggle("desc")} />
          <div className="h-10" />
          <FilterOption letter="C" label="Ruanda" checked={checked.col} onClick={() => toggle("col")} />
          <FilterOption letter="G" label="Etiopía" checked={checked.gua} onClick={() => toggle("gua")} />
        </div>
      </div>
    </div>
  );
}

function FilterMenuRow({ label }) {
  return (
    <div className="mb-5 flex items-center justify-between text-sm font-bold">
      <span className="flex items-center gap-3">
        <TinyStar />
        {label}
      </span>
      <ChevronRight size={14} />
    </div>
  );
}

function FilterOption({ letter, label, checked, onClick }) {
  return (
    <button onClick={onClick} className="flex h-[61px] w-full items-center bg-[#fff6ff] px-4 text-left">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#E4D4FF] font-bold text-[#6F51B4]">{letter}</span>
      <span className="ml-5 text-[17px] text-[#292632]">{label}</span>
      <span className={`ml-auto grid h-5 w-5 place-items-center rounded-sm ${checked ? "bg-[#6F51B4]" : "border border-[#6F51B4]"}`}>
        {checked && <span className="text-sm font-black text-white">✓</span>}
      </span>
    </button>
  );
}

function Screen({ children }) {
  return <div className="min-h-screen bg-[#FCFCFC] text-[#202028]">{children}</div>;
}

function FloatingNav({ current, go }) {
  const entries = [
    ["inicio", "Inicio"],
    ["tienda", "Tienda"],
    ["infoCafe", "Producto"],
    ["carrito", "Carrito"],
    ["cuenta", "Cuenta"],
    ["miCuenta", "Perfil"],
    ["pedidos", "Pedidos"],
    ["direcciones", "Direcciones"],
    ["pago", "Pago"],
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 hidden max-w-[92vw] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-2xl border border-black/10 bg-white/90 p-3 shadow-xl backdrop-blur md:flex">
      {entries.map(([key, label]) => (
        <button key={key} onClick={() => go(key)} className={`rounded-full px-3 py-2 text-xs font-semibold ${current === key ? "bg-[#A88454] text-white" : "bg-[#f2f2f2] text-[#333]"}`}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("inicio");
  const [cartQty, setCartQty] = useState(1);
  const go = (name) => setScreen(name);
  const addToCart = (qty) => setCartQty(qty);

  const component = useMemo(
    () => ({
      inicio: <Inicio go={go} />,
      tienda: <Tienda go={go} />,
      infoCafe: <InfoCafe go={go} addToCart={addToCart} />,
      carrito: <Carrito go={go} cartQty={cartQty} setCartQty={setCartQty} />,
      cuenta: <Cuenta go={go} />,
      miCuenta: <MiCuenta go={go} />,
      pedidos: <Pedidos go={go} />,
      direcciones: <Direcciones go={go} />,
      pago: <Pago go={go} />,
      filtros: <Filtros go={go} />,
    }),
    [cartQty]
  );

  return (
    <div className="mx-auto min-h-screen bg-[#F4F4EC]">
      <div className="mx-auto w-full max-w-[650px] bg-[#FCFCFC] shadow-sm">
        <motion.div key={screen} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          {component[screen]}
        </motion.div>
      </div>
      <FloatingNav current={screen} go={go} />
    </div>
  );
}
