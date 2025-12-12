export const formatCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").slice(0, 19);
};

export const formatCardExpiryDate = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length >= 2) {
    return digits.slice(0, 2) + "/" + digits.slice(2, 4);
  }
  return digits;
};
