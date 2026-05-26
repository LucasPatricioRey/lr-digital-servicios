export const businessConfig = {
  brandName: "Lucas Rey",
  businessName: "LR Digital",
  whatsappNumber: "5491154097209",
  email: "AGREGAR_EMAIL",
  siteUrl: "https://lr-digital-servicios.vercel.app",
  ogImage: "/og-lr-digital.png",
  defaultWhatsappMessage:
    "Hola Lucas, quiero una propuesta para mejorar la presencia digital de mi negocio"
};

export const getWhatsappUrl = (message = businessConfig.defaultWhatsappMessage) => {
  const cleanNumber = businessConfig.whatsappNumber.replace(/\D/g, "");

  if (!cleanNumber) {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};
