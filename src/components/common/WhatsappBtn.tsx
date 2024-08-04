import React from "react";

function WhatsappBtn({ children }: { children: React.ReactNode }) {
  const whatsappGroupLink = "https://chat.whatsapp.com/HWUMSzHQWkyLv3VwWgnRFu"; 

  const handleClick = () => {
    window.open(whatsappGroupLink, "_blank");
  };
  return (
    <button
      onClick={handleClick}
      className="text-white py-3 px-8 rounded-[99999px] cursor-pointer uppercase transition-transform hover:scale-110 bg-red-grad text-2xl font-bold z-10 max-w-[220px] mx-auto"
    >
      {children}
    </button>
  );
}

export default WhatsappBtn;
